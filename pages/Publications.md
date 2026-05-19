---
layout: page
title: Publications
permalink: /Publications/
tags: [Page]
---

<style>
    /* --- 核心容器控制 --- */
    .publications-container {
        max-width: 800px; /* 限制宽度，提升阅读舒适度 */
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #333;
        line-height: 1.5;
    }

    /* --- 简洁标题 --- */
    .section-header {
        margin: 40px 0 20px 0;
        padding-bottom: 8px;
        border-bottom: 1px solid #eee;
        font-size: 1.3rem;
        font-weight: 600;
        color: #111;
    }

    /* --- 研究兴趣 (极简列表) --- */
    .interests-list {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 35px;
    }
    .interest-item {
        background: #f5f5f5;
        padding: 6px 14px;
        border-radius: 20px; /* 圆润的小标签，更有现代网页感 */
        font-size: 0.85rem;
        color: #555;
        font-weight: 500;
    }

    /* --- 出版物条目 (移除卡片感) --- */
    .pub-item {
        margin-bottom: 28px;
        position: relative;
    }
    .pub-title {
        font-size: 1.05rem;
        font-weight: 600;
        color: #1a0dab; /* 类似 Google Scholar 的学术蓝 */
        display: block;
        margin-bottom: 5px;
        text-decoration: none;
        transition: color 0.2s ease;
    }
    .pub-title:hover {
        text-decoration: underline;
        color: #0026b3;
    }
    .pub-authors {
        font-size: 0.92rem;
        color: #4f4f4f;
        display: block;
        margin-bottom: 2px;
    }
    .me {
        font-weight: 700;
        text-decoration: underline;
        text-underline-offset: 3px;
    }
    .pub-venue {
        font-size: 0.9rem;
        color: #666;
        font-style: italic;
    }
    .pub-metadata {
        font-size: 0.85rem;
        margin-top: 6px;
        display: flex;
        align-items: center;
    }
    .badge {
        font-size: 0.75rem;
        padding: 2px 6px;
        border-radius: 3px;
        margin-right: 10px;
        background: #f0f0f0;
        color: #666;
        font-weight: 500;
    }
    .doi-link {
        color: #006621; /* 经典学术链接绿 */
        text-decoration: none;
        font-weight: 500;
        padding: 2px 4px;
        border-radius: 3px;
        transition: background 0.2s ease;
    }
    .doi-link:hover {
        background: #edf7ed;
        text-decoration: underline;
    }

    /* --- 底部 Scholar 链接 --- */
    .scholar-footer {
        margin-top: 60px;
        padding: 25px;
        border-top: 1px solid #eee;
        text-align: center;
        font-size: 0.95rem;
    }

    @media (max-width: 600px) {
        .publications-container { padding: 0 15px; }
    }
</style>

<div class="publications-container">

    <div class="interests-list">
        <span class="interest-item">Geospatial AI</span>
        <span class="interest-item">Remote Sensing</span>
        <span class="interest-item">Urban Computing</span>
    </div>

    <!-- 2026 Section -->
    <h2 class="section-header">Publications (2026)</h2>

    <div class="pub-item">
        <span class="pub-title">FG-TreeSeg: Flow-Guided Tree Crown Segmentation without Instance Annotations</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Lyu, F., Wang, S., & Wang, C.</span>
        <span class="pub-venue">IEEE Geoscience and Remote Sensing Letters, 2026</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <a href="https://doi.org/10.1109/LGRS.2026.3693969" class="doi-link">[DOI]</a>
        </div>
    </div>

    <div class="pub-item">
        <span class="pub-title">Intelligent bear deterrence system based on computer vision: Reducing human–bear conflicts in remote areas</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Fei, T., Kupfer, J. A., Du, Y., Yi, J., & Li, Y.</span>
        <span class="pub-venue">Ursus, 2026</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <a href="https://doi.org/10.2192/URSUS-D-25-00010" class="doi-link">[DOI]</a>
        </div>
    </div>

    <div class="pub-item">
        <span class="pub-title">Cross-Modal Urban Sensing: Evaluating Sound–Vision Alignment Across Street-Level and Aerial Imagery</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Huang, X., Fei, T., & Wang, S.</span>
        <span class="pub-venue">Transactions in GIS, 2026</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <a href="https://doi.org/10.1111/tgis.70246" class="doi-link">[DOI]</a>
        </div>
    </div>

    <!-- 2025 Section -->
    <h2 class="section-header">Publications (2025)</h2>

    <div class="pub-item">
        <span class="pub-title">A GAN-enhanced deep learning framework for rooftop detection from historical aerial imagery</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Wang, S., Wang, C., et al.</span>
        <span class="pub-venue">International Journal of Remote Sensing, 2025 (Cover Article)</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <a href="https://doi.org/10.1080/01431161.2025.2534994" class="doi-link">[DOI]</a>
        </div>
    </div>

    <div class="pub-item">
        <span class="pub-title">Where are GIScience faculty hired from? Analyzing faculty mobility and research themes through hiring networks</span>
        <span class="pub-authors">Chen, Y., Nelson, J. K., ..., <span class="me">Chen, P.</span></span>
        <span class="pub-venue">Cartography and Geographic Information Science, 2025</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <a href="https://doi.org/10.1080/15230406.2025.25675643" class="doi-link">[DOI]</a>
        </div>
    </div>

    <!-- 2024 Section -->
    <h2 class="section-header">Publications (2024)</h2>

    <div class="pub-item">
        <span class="pub-title">Socio-demographic inequalities in the impacts of extreme temperatures on population mobility</span>
        <span class="pub-authors">Gu, X., <span class="me">Chen, P.</span>, & Fan, C.</span>
        <span class="pub-venue">Journal of Transport Geography, 114, 103755, 2024</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <a href="https://doi.org/10.1016/j.jtrangeo.2023.103755" class="doi-link">[DOI]</a>
        </div>
    </div>

    <!-- Working Papers Section -->
    <h2 class="section-header">Working Papers</h2>

    <div class="pub-item">
        <span class="pub-title">Spatial Model of Crash Fatalities by Examining Effects of Infrastructural Factors: A Case Study on South Carolina</span>
        <span class="pub-authors"><span class="me">Chen, P.</span> (Co-first author)</span>
        <span class="pub-venue">Under Review</span>
        <div class="pub-metadata">
            <span class="badge">Working Paper</span>
        </div>
    </div>

    <div class="scholar-footer">
        <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ" style="color: #4a90e2; text-decoration: none; font-weight: 500;">
            <i class="fa fa-graduation-cap"></i> Google Scholar Profile
        </a>
        <p style="color: #888; font-size: 0.8rem; margin-top: 15px;">Last updated: May 2026</p>
    </div>
</div>
