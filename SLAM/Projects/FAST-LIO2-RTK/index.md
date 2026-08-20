# FAST-LIO2 真机部署与 RTK 扩展

<div class="project-meta">
  <span class="status-pill status--wip">进行中</span>
  <span class="tag-chip">FAST-LIO2</span>
  <span class="tag-chip">RSLiDAR 16</span>
  <span class="tag-chip">Robot</span>
  <span class="tag-chip">RTK</span>
</div>

<!--
🖼 图片使用规范：
1. 本项目的图片放在当前文件夹下的 images/ 目录中，例如 images/demo.webp
2. 在正文中这样引用：![图片说明](./images/demo.webp)
3. 全站共享的图片放在 public/images/ 目录，引用方式：![图片说明](/images/xxx.png)
-->

## 项目概述

正在使用速腾聚创 **RSLiDAR 16** 线机械式激光雷达进行 **FAST-LIO2** 真机部署，现阶段重点处理雷达数据、话题、坐标系和运行配置，后续计划加入 **RTK**，继续完善定位与建图链路。

<div class="info-grid">
  <div class="cell"><b>SENSOR</b><span>RSLiDAR 16（速腾聚创 16 线）</span></div>
  <div class="cell"><b>ALGORITHM</b><span>FAST-LIO2</span></div>
  <div class="cell"><b>NEXT</b><span>RTK 融合（规划中）</span></div>
  <div class="cell"><b>ENV</b><span>真机部署</span></div>
</div>

## 真机部署照片

<figure class="img-frame">
  <a href="./images/fast-lio2部署真机.webp" target="_blank" rel="noreferrer">
    <img src="./images/fast-lio2部署真机.webp" alt="RSLiDAR 16 线激光雷达与 FAST-LIO2 真机部署" loading="lazy" />
  </a>
  <figcaption>RSLiDAR 16 与 FAST-LIO2 真机部署（点击查看大图）</figcaption>
</figure>

## 关键步骤

<ol class="steps">
  <li>完成 RSLiDAR 16 与计算平台接入</li>
  <li>检查点云话题、坐标系与 FAST-LIO2 运行配置</li>
  <li>继续验证建图效果并规划 RTK 融合</li>
</ol>

## 项目产出

<div class="output-box">
  <b>PROJECT OUTPUT</b>
  <ul>
    <li>真机硬件接入</li>
    <li>FAST-LIO2 部署进度</li>
    <li>运行问题记录与 RTK 接入计划</li>
  </ul>
</div>

## 当前阶段

雷达接入、话题与坐标系检查、FAST-LIO2 部署、RTK 接入规划。

## 后续计划

- [ ] 完成建图效果验证
- [ ] 接入 RTK 并融合定位
- [ ] 补充运行问题记录

## 参考资料

<div class="link-box">
  <a href="https://gitee.com/Xz_zh/fast_lio2_xz/" target="_blank" rel="noreferrer">
    <span>GITEE REPO</span>
    gitee.com/Xz_zh/fast_lio2_xz ↗
  </a>
</div>
