# PCT 全局规划 + Scan-Planner 局部规划融合导航

<div class="project-meta">
  <span class="status-pill status--done">已完成</span>
  <span class="tag-chip">PCT</span>
  <span class="tag-chip">SCAN-Planner</span>
  <span class="tag-chip">Navigation</span>
  <span class="tag-chip">RViz</span>
</div>

<!--
🖼 图片使用规范：
1. 本项目的图片放在当前文件夹下的 images/ 目录中，例如 images/demo.webp
2. 在正文中这样引用：![图片说明](./images/demo.webp)
3. 全站共享的图片放在 public/images/ 目录，引用方式：![图片说明](/images/xxx.png)
-->

## 项目概述

先后复现 **PCT** 三维全局规划与 **SCAN-Planner** 局部规划，再将两类规划器融合进导航链路，完成全局路径、局部避障与导航执行的联调 Demo。

<div class="info-grid">
  <div class="cell"><b>GLOBAL</b><span>PCT（三维全局规划）</span></div>
  <div class="cell"><b>LOCAL</b><span>SCAN-Planner（局部规划）</span></div>
  <div class="cell"><b>TOOL</b><span>RViz 可视化</span></div>
  <div class="cell"><b>STATUS</b><span>联调 Demo 已完成</span></div>
</div>

## 关键步骤

<ol class="steps">
  <li>复现并验证 PCT 三维全局规划</li>
  <li>复现并验证 SCAN-Planner 局部规划</li>
  <li>融合两类规划器并接入导航流程完成 Demo</li>
</ol>

## 实验截图

<figure class="img-frame">
  <a href="./images/PCT全局规划.webp" target="_blank" rel="noreferrer">
    <img src="./images/PCT全局规划.webp" alt="复现 PCT 三维全局规划的 RViz 截图" loading="lazy" />
  </a>
  <figcaption>PCT 三维全局规划（点击查看大图）</figcaption>
</figure>

<figure class="img-frame">
  <a href="./images/SCAN-Planner局部规划.webp" target="_blank" rel="noreferrer">
    <img src="./images/SCAN-Planner局部规划.webp" alt="复现 SCAN-Planner 局部规划的 RViz 截图" loading="lazy" />
  </a>
  <figcaption>SCAN-Planner 局部规划（点击查看大图）</figcaption>
</figure>

## 项目产出

<div class="output-box">
  <b>PROJECT OUTPUT</b>
  <ul>
    <li>PCT 全局规划截图</li>
    <li>SCAN-Planner 局部规划截图</li>
    <li>融合导航演示视频</li>
  </ul>
</div>

<div class="note-box">
<b>演示视频：</b>融合导航 Demo 已上传 B 站：<a href="https://www.bilibili.com/video/BV1d2gG6REz2/" target="_blank" rel="noreferrer">BV1d2gG6REz2 ↗</a>
</div>

## 参考资料

<div class="link-box">
  <a href="https://gitee.com/Xz_zh/pct_scan_plan_xz/" target="_blank" rel="noreferrer">
    <span>GITEE REPO</span>
    gitee.com/Xz_zh/pct_scan_plan_xz ↗
  </a>
  <a href="https://www.bilibili.com/video/BV1d2gG6REz2/" target="_blank" rel="noreferrer">
    <span>DEMO VIDEO</span>
    融合导航演示视频（B 站）↗
  </a>
</div>
