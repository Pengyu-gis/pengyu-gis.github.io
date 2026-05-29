---
layout: page
title: Publications
permalink: /Publications/
tags: [Page]
---

<style>
    /* --- 核心变量与容器控制 --- */
    :root {
        --primary-blue: #4a90e2;
        --hover-bg: rgba(74, 144, 226, 0.04);
        --hover-border: rgba(74, 144, 226, 0.15);
        --item-bg: rgba(128, 128, 128, 0.02);
    }
    
    @media (prefers-color-scheme: dark) {
        :root {
            --primary-blue: #64b5f6; /* 黑夜模式下稍作提亮，保证对比度 */
            --hover-bg: rgba(100, 181, 246, 0.06);
            --hover-border: rgba(100, 181, 246, 0.25);
            --item-bg: rgba(255, 255, 255, 0.02);
        }
    }

    .publications-container {
        max-width: 840px; 
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: inherit; 
        line-height: 1.6;
        padding: 0 20px;
    }

    /* --- 简洁标题 --- */
    .section-header {
        margin: 45px 0 25px 0;
        padding-bottom: 12px;
        border-bottom: 2px solid rgba(128, 128, 128, 0.15);
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: -0.01em;
    }

    /* --- 研究兴趣胶囊标签 --- */
    .interests-list {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    .interest-item {
        background: rgba(128, 128, 128, 0.08);
        padding: 6px 14px;
        border-radius: 20px; 
        font-size: 0.85rem;
        color: inherit;
        opacity: 0.85;
        font-weight: 500;
        border: 1px solid rgba(128, 128, 128, 0.12);
    }

    /* --- 出版物条目布局与高级动画优化 --- */
    .pub-item {
        margin-bottom: 24px;
        padding: 20px;
        border-radius: 10px;
        border: 1px solid rgba(128, 128, 128, 0.08);
        background: var(--item-bg);
        transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), 
                    box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1), 
                    border-color 0.25s ease, 
                    background-color 0.25s ease;
        position: relative;
    }
    
    /* 悬停交互：优雅的轻微浮起与微阴影 */
    .pub-item:hover {
        transform: translateY(-3px);
        background: var(--hover-bg); 
        border-color: var(--hover-border);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
    }
    
    @media (prefers-color-scheme: dark) {
        .pub-item:hover {
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
    }
    
    .pub-link-wrapper {
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .pub-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: inherit; 
        display: block;
        margin-bottom: 8px;
        transition: color 0.2s ease;
    }
    
    /* 鼠标悬停时标题变为学术蓝 */
    .pub-item:hover .pub-title {
        color: var(--primary-blue);
    }
    
    .pub-authors {
        font-size: 0.95rem;
        color: inherit;
        opacity: 0.85;
        display: block;
        margin-bottom: 6px;
    }
    .me {
        font-weight: 700;
        border-bottom: 2px solid var(--primary-blue);
        padding-bottom: 1px;
    }
    
    .pub-venue {
        font-size: 0.9rem;
        color: inherit;
        opacity: 0.7;
        font-style: italic;
    }
    
    .pub-metadata {
        font-size: 0.85rem;
        margin-top: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }
    
    /* --- 现代化徽章与 DOI 按钮设计 --- */
    .badge {
        font-size: 0.75rem;
        padding: 3px 10px;
        border-radius: 6px;
        background: rgba(128, 128, 128, 0.12);
        color: inherit;
        opacity: 0.9;
        font-weight: 500;
    }
    .badge.highlight {
        background: rgba(198, 40, 40, 0.12);
        color: #ef5350;
    }

    .doi-inline-link {
        color: #2e7d32;
        text-decoration: none;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 2px 8px;
        border-radius: 6px;
        background: rgba(46, 125, 50, 0.06);
        transition: all 0.2s ease;
    }
    
    @media (prefers-color-scheme: dark) {
        .doi-inline-link { 
            color: #81c784; 
            background: rgba(129, 199, 132, 0.08);
        }
    }
    
    .doi-inline-link:hover {
        background: rgba(46, 125, 50, 0.12);
        text-decoration: underline;
    }
    @media (prefers-color-scheme: dark) {
        .doi-inline-link:hover {
            background: rgba(129, 199, 132, 0.15);
        }
    }

    /* --- 底部 Scholar 链接 --- */
    .scholar-footer {
        margin-top: 60px;
        padding: 40px 20px;
        border-top: 1px solid rgba(128, 128, 128, 0.15);
        text-align: center;
        font-size: 0.95rem;
    }

    .scholar-btn {
        color: var(--primary-blue); 
        text-decoration: none; 
        font-weight: 500; 
        display: inline-flex; 
        align-items: center; 
        gap: 6px;
        transition: opacity 0.2s ease;
    }
    .scholar-btn:hover {
        opacity: 0.8;
    }

    @media (max-width: 600px) {
        .pub-item { padding: 16px; margin-bottom: 18px; }
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
        <a href="https://doi.org/10.1016/j.apgeog.2026.104053" target="_blank" class="pub-link-wrapper">
            <span class="pub-title">Modelling state-level crash fatalities by a network-constrained inhomogeneous poisson point process</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Liu, X., Wang, S., Ma, T. F., Yang, X., & Goel, V.</span>
            <span class="pub-venue">Applied Geography, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <span class="doi-inline-link">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1016/j.apgeog.2026.104053
                </span>
            </div>
        </a>
    </div>

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

    <div class="scholar-footer">
        <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ" target="_blank" class="scholar-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            Google Scholar Profile
        </a>
        <p style="color: inherit; opacity: 0.5; font-size: 0.8rem; margin-top: 15px;">Last updated: May 2026</p>
    </div>
</div>
