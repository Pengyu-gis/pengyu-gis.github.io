---
layout: page
title: Publications
permalink: /Publications/
tags: [Page]
---

<style>
    /* --- 核心全局变量 --- */
    :root {
        --accent-blue: #4a90e2;
        --card-bg: #f9f9f9;
        --card-hover-bg: rgba(74, 144, 226, 0.03);
        --card-border: #dcdcdc;
        --card-hover-border: #4a90e2;
        --tag-bg: rgba(0, 0, 0, 0.06);
        --card-shadow: 0 1px 2px rgba(0, 0, 0, 0.01); 
        --shadow-hover: 0 6px 16px rgba(0, 0, 0, 0.06);
    }
    
    @media (prefers-color-scheme: dark) {
        :root {
            --accent-blue: #64b5f6;
            --card-bg: rgba(255, 255, 255, 0.03);
            --card-hover-bg: rgba(100, 181, 246, 0.06);
            --card-border: rgba(255, 255, 255, 0.15);
            --card-hover-border: #64b5f6;
            --tag-bg: rgba(255, 255, 255, 0.08);
            --card-shadow: none;
            --shadow-hover: 0 8px 25px rgba(0, 0, 0, 0.3);
        }
    }

    .publications-container {
        max-width: 800px; 
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: inherit; 
        line-height: 1.6;
        padding: 0 10px;
    }

    /* --- 顶部的研究领域静态胶囊 --- */
    .interests-list {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 40px;
        padding-bottom: 20px;
        border-bottom: 1px dashed var(--card-border);
    }
    .interest-item {
        background: var(--tag-bg);
        padding: 5px 14px;
        border-radius: 20px; 
        font-size: 0.85rem;
        color: inherit;
        opacity: 0.85;
        font-weight: 500;
    }

    /* --- 区域大标题 --- */
    .section-header {
        margin: 50px 0 25px 0;
        font-size: 1.25rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        opacity: 0.85;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .section-header::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--card-border);
    }

    /* --- 精选模块平铺栅格（保持独立卡片样式） --- */
    .featured-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        .featured-grid { grid-template-columns: 1fr; }
    }
    
    .featured-card {
        border-top: 3px solid var(--accent-blue) !important;
    }

    /* --- 精选卡片：保留独立外框+圆角 --- */
    .featured-grid .pub-item {
        margin-bottom: 0;
        padding: 24px; 
        background: var(--card-bg);
        border: 1px solid var(--card-border);
        box-shadow: var(--card-shadow);
        border-radius: 8px;
        position: relative;
        display: block;
        text-decoration: none;
        color: inherit;
        transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), 
                    box-shadow 0.2s cubic-bezier(0.25, 1, 0.5, 1), 
                    background-color 0.2s ease, 
                    border-color 0.2s ease;
    }
    
    .featured-grid .pub-item:hover {
        transform: translateY(-2px);
        background: var(--card-hover-bg);
        border-color: var(--card-hover-border); 
        box-shadow: var(--shadow-hover);
    }

    /* --- Journal Articles 列表：分割线样式 --- */
    .journal-list .pub-item {
        margin-bottom: 0;
        padding: 24px;
        background: var(--card-bg);
        border: none;
        border-bottom: 1px solid var(--card-border);
        box-shadow: none;
        border-radius: 0;
        position: relative;
        display: block;
        text-decoration: none;
        color: inherit;
        transition: background-color 0.2s ease, 
                    border-color 0.2s ease;
    }
    
    /* 第一个卡片顶部加线，形成封闭列表 */
    .journal-list .pub-item:first-child {
        border-top: 1px solid var(--card-border);
    }
    
    /* 悬停时：背景微变 + 分割线变色 */
    .journal-list .pub-item:hover {
        background: var(--card-hover-bg);
        border-bottom-color: var(--card-hover-border);
    }
    .journal-list .pub-item:first-child:hover {
        border-top-color: var(--card-hover-border);
    }
    /* 悬停时让下一张卡片的顶边也变色，形成连续感 */
    .journal-list .pub-item:hover + .pub-item {
        border-top-color: var(--card-hover-border);
    }

    .pub-title {
        font-size: 1.08rem;
        font-weight: 600;
        color: inherit; 
        margin-bottom: 8px;
        line-height: 1.4;
        transition: color 0.2s ease;
    }
    .pub-item:hover .pub-title {
        color: var(--accent-blue);
    }
    
    .pub-authors {
        font-size: 0.92rem;
        color: inherit;
        opacity: 0.85;
        display: block;
        margin-bottom: 6px;
    }
    .me {
        font-weight: 700;
        border-bottom: 2px solid var(--accent-blue);
        padding-bottom: 1px;
    }
    
    .pub-venue {
        font-size: 0.88rem;
        color: inherit;
        opacity: 0.65;
        font-style: italic;
    }
    
    /* --- 卡片内标签与右侧 DOI 按钮布局 --- */
    .pub-metadata {
        font-size: 0.82rem;
        margin-top: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }
    
    .badge {
        font-size: 0.72rem;
        padding: 2px 8px;
        border-radius: 4px;
        background: var(--tag-bg);
        font-weight: 600;
        opacity: 0.8;
    }
    .badge.highlight {
        background: rgba(198, 40, 40, 0.1);
        color: #ef5350;
    }

    .doi-link-btn {
        margin-left: auto; 
        color: #2e7d32;
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 2px 8px;
        border-radius: 4px;
        background: rgba(46, 125, 50, 0.05);
        transition: all 0.2s ease;
    }
    @media (prefers-color-scheme: dark) {
        .doi-link-btn { color: #81c784; background: rgba(129, 199, 132, 0.08); }
    }
    .pub-item:hover .doi-link-btn {
        background: var(--accent-blue);
        color: white !important;
    }
    @media (max-width: 600px) {
        .doi-link-btn { margin-left: 0; width: 100%; margin-top: 5px; justify-content: center; }
    }

    /* --- Footer --- */
    .scholar-footer {
        margin-top: 70px;
        padding: 40px 0;
        border-top: 1px solid var(--card-border);
        text-align: center;
        font-size: 0.95rem;
    }
    .scholar-btn {
        color: var(--accent-blue); 
        text-decoration: none; 
        font-weight: 500; 
        display: inline-flex; 
        align-items: center; 
        gap: 6px;
    }
</style>

<div class="publications-container">

    <div class="interests-list">
        <span class="interest-item">Geospatial AI</span>
        <span class="interest-item">Remote Sensing</span>
        <span class="interest-item">Spatial Statistics</span>
    </div>

    <h2 class="section-header">Featured Research</h2>
    <div class="featured-grid">
        
        <a href="https://doi.org/10.1016/j.apgeog.2026.104053" target="_blank" class="pub-item featured-card">
            <span class="pub-title">Modelling state-level crash fatalities by a network-constrained inhomogeneous poisson point process</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Liu, X., Wang, S., et al.</span>
            <span class="pub-venue">Applied Geography, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Spatial Statistics</span>
            </div>
        </a>

        <a href="https://doi.org/10.2192/URSUS-D-25-00010" target="_blank" class="pub-item featured-card">
            <span class="pub-title">Intelligent bear deterrence system based on computer vision: Reducing human–bear conflicts in remote areas</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Fei, T., Kupfer, J. A., et al.</span>
            <span class="pub-venue">Ursus, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Wlidlife</span>
            </div>
        </a>

    </div>

    <h2 class="section-header">Journal Articles</h2>
    <div class="journal-list">

        <a href="https://doi.org/10.1016/j.apgeog.2026.104053" target="_blank" class="pub-item">
            <span class="pub-title">Modelling state-level crash fatalities by a network-constrained inhomogeneous poisson point process</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Liu, X., Wang, S., Ma, T. F., Yang, X., & Goel, V.</span>
            <span class="pub-venue">Applied Geography, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Spatial Statistics</span>
                <span class="badge">Traffic</span>
                <span class="doi-link-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1016/j.apgeog.2026.104053
                </span>
            </div>
        </a>

        <a href="https://doi.org/10.1109/LGRS.2026.3693969" target="_blank" class="pub-item">
            <span class="pub-title">FG-TreeSeg: Flow-Guided Tree Crown Segmentation without Instance Annotations</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Lyu, F., Wang, S., & Wang, C.</span>
            <span class="pub-venue">IEEE Geoscience and Remote Sensing Letters, 2026</span>
            <div class="pub-metadata">
                <span class="badge">GeoAI</span>
                <span class="badge">Remote Sensing</span>
                <span class="badge">Canopy</span>
                <span class="doi-link-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1109/LGRS.2026.3693969
                </span>
            </div>
        </a>

        <a href="https://doi.org/10.2192/URSUS-D-25-00010" target="_blank" class="pub-item">
            <span class="pub-title">Intelligent bear deterrence system based on computer vision: Reducing human–bear conflicts in remote areas</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Fei, T., Kupfer, J. A., Du, Y., Yi, J., & Li, Y.</span>
            <span class="pub-venue">Ursus, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Wlidlife</span>
                <span class="doi-link-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.2192/URSUS-D-25-00010
                </span>
            </div>
        </a>

        <a href="https://doi.org/10.1111/tgis.70246" target="_blank" class="pub-item">
            <span class="pub-title">Cross-Modal Urban Sensing: Evaluating Sound–Vision Alignment Across Street-Level and Aerial Imagery</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Huang, X., Fei, T., & Wang, S.</span>
            <span class="pub-venue">Transactions in GIS, 2026</span>
            <div class="pub-metadata">
                <span class="badge">GeoAI</span>
                <span class="badge">Street View</span>
                <span class="doi-link-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1111/tgis.70246
                </span>
            </div>
        </a>

        <a href="https://doi.org/10.1080/01431161.2025.2534994" target="_blank" class="pub-item">
            <span class="pub-title">A GAN-enhanced deep learning framework for rooftop detection from historical aerial imagery</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Wang, S., Wang, C., et al.</span>
            <span class="pub-venue">International Journal of Remote Sensing, 2025</span>
            <div class="pub-metadata">
                <span class="badge">GeoAI</span>
                <span class="badge">Remote Sensing</span>
                <span class="badge highlight">Cover Article</span>
                <span class="doi-link-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1080/01431161.2025.2534994
                </span>
            </div>
        </a>

        <a href="https://doi.org/10.1080/15230406.2025.25675643" target="_blank" class="pub-item">
            <span class="pub-title">Where are GIScience faculty hired from? Analyzing faculty mobility and research themes through hiring networks</span>
            <span class="pub-authors">Chen, Y., Nelson, J. K., ..., <span class="me">Chen, P.</span></span>
            <span class="pub-venue">Cartography and Geographic Information Science, 2025</span>
            <div class="pub-metadata">
                <span class="badge">GISphere</span>
                <span class="doi-link-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    doi.org/10.1080/15230406.2025.25675643
                </span>
            </div>
        </a>

        <a href="https://doi.org/10.1016/j.jtrangeo.2023.103755" target="_blank" class="pub-item">
            <span class="pub-title">Socio-demographic inequalities in the impacts of extreme temperatures on population mobility</span>
            <span class="pub-authors">Gu, X., <span class="me">Chen, P.</span>, & Fan, C.</span>
            <span class="pub-venue">Journal of Transport Geography, 114, 103755, 2024</span>
            <div class="pub-metadata">
                <span class="badge">population mobility</span>
                <span class="doi-link-btn">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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
