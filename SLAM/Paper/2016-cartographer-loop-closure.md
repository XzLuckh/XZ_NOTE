# Real-Time Loop Closure in 2D LIDAR SLAM

- **作者**：Wolfgang Hess, Damon Kohler, Holger Rapp, Dan Andor（Google）
- **会议 / 期刊**：ICRA 2016
- **年份**：2016
- **链接**：[官方 PDF](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/45466.pdf) · [Github 主仓库](https://github.com/cartographer-project/cartographer) · [ROS 封装](https://github.com/cartographer-project/cartographer_ros)
- **阅读日期**：2025-12
- **状态**：已精读 ✅

## 一句话总结

Cartographer 提出"**局部子图 + 全局位姿图**"的两级 SLAM 框架：用子图保证局部一致性，用基于**分支定界（Branch-and-Bound）**的快速回环检测 + 稀疏位姿图优化保证全局一致性，在 2D 激光场景下做到实时且无累积漂移。

## 解决的问题

- 纯里程计/局部 SLAM 会随时间**累积漂移**，地图在大场景下错位
- 回环检测需要在大搜索空间（平移 + 旋转）内匹配扫描，**暴力搜索太慢**，无法实时
- 如何在保证实时性的同时，把回环搜索做"准"（尽量接近全局最优）

## 核心方法

### 系统框架

Cartographer 分两部分：
- **局部 SLAM**（Local SLAM）：连续扫描插入当前子图，构建局部一致地图
- **全局 SLAM**（Global SLAM）：扫描与所有已完成子图匹配，做回环闭合 + 位姿图优化

<!-- 框架图可参考论文 Figure 1，后续补充 -->

### 关键模块

1. **子图（Submap）构建**
   - 子图是不断插入激光扫描的**概率栅格图**（occupancy grid）
   - 每个新扫描通过 Ceres 做 **scan-to-submap 匹配**：优化位姿使扫描点落在被占用概率最高的位置（把栅格概率映射到 [0,1] 构造残差）
   - 匹配初始值来自 IMU / 位姿外推（motion model）
   - 子图"完成"（finish）后冻结不再修改，转入全局 SLAM 参与回环

2. **回环检测（Loop Closure）**
   - 子图完成后，新扫描与**所有已完成子图**进行匹配，得分高于阈值即形成闭环约束
   - 闭环约束加入**稀疏位姿图**，用 SPA（sparse pose adjustment）方式异步优化整张图

3. **分支定界加速回环搜索**（论文核心贡献）
   - 回环匹配 = 在搜索窗口内找最优位姿，本质是最优化问题
   - 对**平移（x, y）**建立树形搜索：节点代表一个平移范围，用**预计算的多分辨率栅格**给出评分上界，低分辨率层快速剪枝
   - **旋转**离散化为多个候选角度，每个角度走一遍分支定界
   - 保证在给定搜索空间内找到**全局最优解**，且时间可控 → 实时性有确定性

### 工程实现

- 拆分为 `cartographer`（核心库）+ `cartographer_ros`（ROS 接口），完全开源
- 多线程：前端（局部 SLAM）实时，后端（回环 + 优化）异步

## 实验与结果

- 在手持/背包平台采集的室内外数据集上验证（如 Deutsches Museum 等场景）
- 回环闭合后**累积漂移显著消除**，全局地图保持一致
- 对比当时 SOTA 方法，精度更高且保持实时
- 2D 场景可实时运行，工程落地成熟

## 创新点

- **分支定界回环搜索**：把回环匹配从"慢"变成"快且最优"，这是实时全局一致性的关键
- 子图 + 位姿图的两级框架清晰、完整、易工程化
- Ceres 精细匹配与分支定界粗搜索结合，旋转/平移解耦处理
- 高质量开源实现（cartographer / cartographer_ros），生态完善

## 局限与思考

- 主要面向 2D 激光；3D 扩展（Cartographer 3D）存在但更重、参数更多
- 无回环时仍依赖里程计精度，漂移靠回环"修正"而非"避免"
- 回环检测依赖 scan-to-submap 匹配得分阈值，特征贫乏环境容易误/漏检
- **与我的项目联系**：对应"Cartographer 仿真验证与真机部署"项目（WORK 06）；可与 FAST-LIO2（直接法 LiDAR-惯性里程计）对比——前者重全局一致性，后者重局部精度与轻量化

## 参考资料

- Hess W, Kohler D, Rapp H, Andor D. *Real-Time Loop Closure in 2D LIDAR SLAM*. ICRA 2016.
- Cartographer 官方文档与源码
