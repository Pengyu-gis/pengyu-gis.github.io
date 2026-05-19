---
layout: page
title: Publications
permalink: /Publications/
tags: [Page]
---

<style>
    /* --- 核心容器控制 --- */
    .publications-container {
        max-width: 800px; 
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: #333;
        line-height: 1.6;
    }

    /* --- 简洁标题 --- */
    .section-header {
        margin: 50px 0 25px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid #f0f0f0;
        font-size: 1.4rem;
        font-weight: 600;
        color: #111;
        letter-spacing: -0.01em;
    }

    /* --- 研究兴趣 (微调为更精致的胶囊标签) --- */
    .interests-list {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .interest-item {
        background: #f5f5f5;
        padding: 6px 14px;
        border-radius: 20px; 
        font-size: 0.85rem;
        color: #555;
        font-weight: 500;
        border: 1px solid #eaeaea;
    }

    /* --- 出版物整体交互优化 (Clean Visual Card) --- */
    .pub-item {
        margin-bottom: 12px;
        padding: 16px;
        border-radius: 8px;
        border: 1px solid transparent;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
    }
    /* 悬停时整个区域柔和亮起，赋予绝佳的交互暗示 */
    .pub-item:hover {
        background: #f8faff;
        border-color: #e1ebf9;
    }
    
    /* 让整个条目在包裹 <a> 标签时保持干净的块级链接 */
    .pub-link-wrapper {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .pub-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #222; 
        display: block;
        margin-bottom: 6px;
        transition: color 0.2s ease;
    }
    /* 悬停在整块区域时，标题顺滑过渡到学术蓝 */
    .pub-item:hover .pub-title {
        color: #1a0dab;
    }
    
    .pub-authors {
        font-size: 0.95rem;
        color: #555;
        display: block;
        margin-bottom: 4px;
    }
    .me {
        font-weight: 700;
        color: #111;
        background-gradient: linear-gradient(transparent 60%, #e1ebf9 0); /* 优雅的粗体强调，替代传统下划线 */
        border-bottom: 2px solid #1a0dab;
        padding-bottom: 1px;
    }
    
    .pub-venue {
        font-size: 0.9rem;
        color: #666;
        font-style: italic;
    }
    
    .pub-metadata {
        font-size: 0.85rem;
        margin-top: 10px;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }
    
    /* --- 现代化徽章与小图标 --- */
    .badge {
        font-size: 0.75rem;
        padding: 2px 8px;
        border-radius: 4px;
        background: #f0f0f0;
        color: #666;
        font-weight: 500;
    }
    .badge.highlight {
        background: #ffebee;
        color: #c62828;
    }
    .badge.status {
        background: #e8f5e9;
        color: #2e7d32;
    }
    
    .doi-inline-link {
        color: #006621;
        text-decoration: none;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }
    .doi-inline-link:hover {
        text-decoration: underline;
    }

    /* --- 底部 Scholar 链接 --- */
    .scholar-footer {
        margin-top: 60px;
        padding: 30px;
        border-top: 1px solid #eee;
        text-align: center;
        font-size: 0.95rem;
    }

    @media (max-width: 600px) {
        .pub-item { padding: 10px; }
        .publications-container { padding: 0 12px; }
    }
</style>

<div class="publications-container">

    <div class="interests-list">
        <span class="interest-item">Geospatial AI</span>
        <span class="interest-item">Remote Sensing</span>
        <span class="interest-item">Spatial Statistics</span>
    </div>

    <h2 class="section-header">Journal Articles</h2>

    <div class="pub-item">
        <a href="https://doi.org/10.1109/LGRS.2026.3693969" target="_blank" class="pub-link-wrapper">
            <span class="pub-title">FG-TreeSeg: Flow-Guided Tree Crown Segmentation without Instance Annotations</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Lyu, F., Wang, S., & Wang, C.</span>
            <span class="pub-venue">IEEE Geoscience and Remote Sensing Letters, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <span class="doi-inline-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1109/LGRS.2026.3693969
                </span>
            </div>
        </a>
    </div>

    <div class="pub-item">
        <a href="https://doi.org/10.2192/URSUS-D-25-00010" target="_blank" class="pub-link-wrapper">
            <span class="pub-title">Intelligent bear deterrence system based on computer vision: Reducing human–bear conflicts in remote areas</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Fei, T., Kupfer, J. A., Du, Y., Yi, J., & Li, Y.</span>
            <span class="pub-venue">Ursus, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <span class="doi-inline-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.2192/URSUS-D-25-00010
                </span>
            </div>
        </a>
    </div>

    <div class="pub-item">
        <a href="https://doi.org/10.1111/tgis.70246" target="_blank" class="pub-link-wrapper">
            <span class="pub-title">Cross-Modal Urban Sensing: Evaluating Sound–Vision Alignment Across Street-Level and Aerial Imagery</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Huang, X., Fei, T., & Wang, S.</span>
            <span class="pub-venue">Transactions in GIS, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <span class="doi-inline-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1111/tgis.70246
                </span>
            </div>
        </a>
    </div>

    <div class="pub-item">
        <a href="https://doi.org/10.1080/01431161.2025.2534994" target="_blank" class="pub-link-wrapper">
            <span class="pub-title">A GAN-enhanced deep learning framework for rooftop detection from historical aerial imagery</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Wang, S., Wang, C., et al.</span>
            <span class="pub-venue">International Journal of Remote Sensing, 2025</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <span class="badge highlight">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right:2px;"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    Cover Article
                </span>
                <span class="doi-inline-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1080/01431161.2025.2534994
                </span>
            </div>
        </a>
    </div>

    <div class="pub-item">
        <a href="https://doi.org/10.1080/15230406.2025.25675643" target="_blank" class="pub-link-wrapper">
            <span class="pub-title">Where are GIScience faculty hired from? Analyzing faculty mobility and research themes through hiring networks</span>
            <span class="pub-authors">Chen, Y., Nelson, J. K., ..., <span class="me">Chen, P.</span></span>
            <span class="pub-venue">Cartography and Geographic Information Science, 2025</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <span class="doi-inline-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1080/15230406.2025.25675643
                </span>
            </div>
        </a>
    </div>

    <div class="pub-item">
        <a href="https://doi.org/10.1016/j.jtrangeo.2023.103755" target="_blank" class="pub-link-wrapper">
            <span class="pub-title">Socio-demographic inequalities in the impacts of extreme temperatures on population mobility</span>
            <span class="pub-authors">Gu, X., <span class="me">Chen, P.</span>, & Fan, C.</span>
            <span class="pub-venue">Journal of Transport Geography, 114, 103755, 2024</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <span class="doi-inline-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1016/j.jtrangeo.2023.103755
                </span>
            </div>
        </a>
    </div>

    <h2 class="section-header">Working Papers</h2>

    <div class="pub-item">
        <span class="pub-title">Spatial Model of Crash Fatalities by Examining Effects of Infrastructural Factors: A Case Study on South Carolina</span>
        <span class="pub-authors"><span class="me">Chen, P.</span> (Co-first author)</span>
        <span class="pub-venue">Under Review</span>
        <div class="pub-metadata">
            <span class="badge status">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="margin-right:3px;"><path d="M20 6L9 17l-5-5"></path></svg>
                Under Review
            </span>
        </div>
    </div>

    <div class="scholar-footer">
        <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ" target="_blank" style="color: #4a90e2; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center; gap: 6px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            Google Scholar Profile
        </a>
        <p style="color: #888; font-size: 0.8rem; margin-top: 15px;">Last updated: May 2026</p>
    </div>
</div>
