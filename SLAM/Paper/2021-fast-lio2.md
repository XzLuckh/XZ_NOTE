# FAST-LIO2: Fast Direct LiDAR-Inertial Odometry

- **作者**：HKU MARS 实验室（Xu Wei 等）
- **会议 / 期刊**：arXiv（2021，后发表于 T-RO）
- **年份**：2021
- **链接**：[arXiv](https://arxiv.org/abs/2107.06829) · [PDF](https://arxiv.org/pdf/2107.06829.pdf) · [Github](https://github.com/hku-mars/FAST_LIO2)
- **阅读日期**：-
- **状态**：待读 ⏳

## 一句话总结

直接法 LiDAR-惯性里程计：用**迭代扩展卡尔曼滤波（iEKF）**紧耦合 LiDAR 与 IMU，配合增量式 k-d 树（**ikd-Tree**）维护增量体素地图，不做特征提取、直接匹配原始点云，快速且精度高。

## 为什么值得读

- 我的 FAST-LIO2 真机部署与 RTK 扩展、有图/无图导航项目都基于它
- 理解 iEKF 紧耦合、ikd-Tree 增量建图，是读懂 FAST-LIVO2 的基础

## 笔记待补充

- [ ] 读完补充：核心公式推导、实验结果、与 Cartographer 的对比
