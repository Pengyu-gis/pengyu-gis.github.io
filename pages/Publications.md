---
layout: page
title: Publications
permalink: /Publications/
tags: [Page]
---

<style>
    /* --- 核心变量与高级多主题控制 --- */
    :root {
        --primary-blue: #1a0dab;
        --accent-blue: #4a90e2;
        --hover-bg: rgba(74, 144, 226, 0.04);
        --hover-border: rgba(74, 144, 226, 0.15);
        --item-bg: rgba(128, 128, 128, 0.02);
        --border-color: rgba(128, 128, 128, 0.12);
        --text-muted: rgba(0, 0, 0, 0.6);
    }
    
    @media (prefers-color-scheme: dark) {
        :root {
            --primary-blue: #64b5f6;
            --accent-blue: #29b6f6;
            --hover-bg: rgba(100, 181, 246, 0.06);
            --hover-border: rgba(100, 181, 246, 0.25);
            --item-bg: rgba(255, 255, 255, 0.02);
            --border-color: rgba(255, 255, 255, 0.1);
            --text-muted: rgba(255, 255, 255, 0.6);
        }
    }

    .publications-container {
        max-width: 880px; 
        margin: 0 auto;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        color: inherit; 
        line-height: 1.6;
        padding: 0 20px;
    }

    /* --- 分类过滤器样式 --- */
    .filter-wrapper {
        margin: 30px 0 10px 0;
        display: flex;
        align-items: center;
        gap: 12px;
        flex-wrap: wrap;
    }
    .filter-label {
        font-size: 0.85rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.5;
    }
    .filter-btn {
        background: transparent;
        padding: 6px 14px;
        border-radius: 20px; 
        font-size: 0.85rem;
        color: inherit;
        opacity: 0.7;
        font-weight: 500;
        border: 1px solid var(--border-color);
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .filter-btn:hover {
        opacity: 1;
        background: var(--hover-bg);
        border-color: var(--accent-blue);
    }
    .filter-btn.active {
        opacity: 1;
        background: var(--accent-blue);
        color: white !important;
        border-color: var(--accent-blue);
    }

    /* --- 模块大标题 --- */
    .section-header {
        margin: 50px 0 25px 0;
        padding-bottom: 12px;
        border-bottom: 2px solid var(--border-color);
        font-size: 1.3rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        opacity: 0.9;
    }

    /* --- 代表作板块高级平铺布局 (Featured Grid) --- */
    .featured-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        .featured-grid { grid-template-columns: 1fr; }
    }
    .featured-item {
        border-left: 4px solid var(--accent-blue) !important; /* 独特的左侧亮条区隔代表作 */
    }

    /* --- 出版物基础条目组件 --- */
    .pub-item {
        margin-bottom: 20px;
        padding: 22px;
        border-radius: 8px;
        border: 1px solid var(--border-color);
        background: var(--item-bg);
        transition: transform 0.25s cubic-bezier(0.25, 1, 0.5, 1), 
                    box-shadow 0.25s cubic-bezier(0.25, 1, 0.5, 1), 
                    border-color 0.25s ease;
        display: block;
        text-decoration: none;
        color: inherit;
    }
    
    .pub-item:hover {
        transform: translateY(-2px);
        background: var(--hover-bg); 
        border-color: var(--hover-border);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
    }
    @media (prefers-color-scheme: dark) {
        .pub-item:hover { box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25); }
    }

    /* 过滤动画触发时的隐藏状态 */
    .pub-item.is-hidden {
        display: none;
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
    
    /* --- 底部多元化标签与资源按钮 --- */
    .pub-metadata {
        font-size: 0.82rem;
        margin-top: 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
    }
    
    .pub-tags-inline {
        display: flex;
        gap: 6px;
    }
    .inline-tag {
        font-size: 0.72rem;
        padding: 1px 6px;
        border-radius: 4px;
        background: rgba(128, 128, 128, 0.08);
        border: 1px solid var(--border-color);
        opacity: 0.6;
    }

    .resource-links {
        margin-left: auto; /* 将资源按钮优雅地推到右侧对齐 */
        display: flex;
        gap: 8px;
    }
    @media (max-width: 600px) {
        .resource-links { margin-left: 0; width: 100%; margin-top: 5px; }
    }

    .res-link {
        text-decoration: none;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 3px 10px;
        border-radius: 5px;
        background: rgba(128, 128, 128, 0.08);
        color: inherit;
        transition: all 0.2s ease;
    }
    .res-link.doi {
        color: #2e7d32;
        background: rgba(46, 125, 50, 0.06);
    }
    @media (prefers-color-scheme: dark) { .res-link.doi { color: #81c784; background: rgba(129, 199, 132, 0.08); } }
    
    .res-link:hover {
        background: var(--accent-blue);
        color: white !important;
        text-decoration: none;
    }

    .badge {
        font-size: 0.72rem;
        padding: 2px 8px;
        border-radius: 4px;
        background: rgba(128, 128, 128, 0.12);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.02em;
    }
    .badge.highlight {
        background: rgba(198, 40, 40, 0.1);
        color: #ef5350;
    }

    /* --- Footer --- */
    .scholar-footer {
        margin-top: 60px;
        padding: 40px 20px;
        border-top: 1px solid var(--border-color);
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

    <div class="filter-wrapper">
        <span class="filter-label">Filter By:</span>
        <button class="filter-btn active" onclick="filterPubs('all')">All Works</button>
        <button class="filter-btn" onclick="filterPubs('geoai')">Geospatial AI</button>
        <button class="filter-btn" onclick="filterPubs('rs')">Remote Sensing</button>
        <button class="filter-btn" onclick="filterPubs('stats')">Spatial Statistics</button>
    </div>

    <h2 class="section-header">Featured Research</h2>
    <div class="featured-grid">
        
        <a href="https://doi.org/10.1016/j.apgeog.2026.104053" target="_blank" class="pub-item featured-item" data-topics="geoai stats">
            <span class="pub-title">Modelling state-level crash fatalities by a network-constrained inhomogeneous poisson point process</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Liu, X., Wang, S., et al.</span>
            <span class="pub-venue">Applied Geography, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <div class="resource-links">
                    <span class="res-link doi">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> DOI
                    </span>
                </div>
            </div>
        </a>

        <a href="https://doi.org/10.1109/LGRS.2026.3693969" target="_blank" class="pub-item featured-item" data-topics="geoai rs">
            <span class="pub-title">FG-TreeSeg: Flow-Guided Tree Crown Segmentation without Instance Annotations</span>
            <span class="pub-authors"><span class="me">Chen, P.</span>, Lyu, F., Wang, S., & Wang, C.</span>
            <span class="pub-venue">IEEE Geoscience and Remote Sensing Letters, 2026</span>
            <div class="pub-metadata">
                <span class="badge">Journal</span>
                <div class="resource-links">
                    <span class="res-link doi">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> DOI
                    </span>
                </div>
            </div>
        </a>
    </div>

    <h2 class="section-header">All Articles & Preprints</h2>

    <a href="https://doi.org/10.1016/j.apgeog.2026.104053" target="_blank" class="pub-item" data-topics="geoai stats">
        <span class="pub-title">Modelling state-level crash fatalities by a network-constrained inhomogeneous poisson point process</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Liu, X., Wang, S., Ma, T. F., Yang, X., & Goel, V.</span>
        <span class="pub-venue">Applied Geography, 2026</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <div class="pub-tags-inline">
                <span class="inline-tag">Poisson Process</span>
                <span class="inline-tag">Traffic Safety</span>
            </div>
            <div class="resource-links">
                <span class="res-link doi">doi.org/10.1016/j.apgeog.2026.104053</span>
            </div>
        </div>
    </a>

    <a href="https://doi.org/10.1109/LGRS.2026.3693969" target="_blank" class="pub-item" data-topics="geoai rs">
        <span class="pub-title">FG-TreeSeg: Flow-Guided Tree Crown Segmentation without Instance Annotations</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Lyu, F., Wang, S., & Wang, C.</span>
        <span class="pub-venue">IEEE Geoscience and Remote Sensing Letters, 2026</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <div class="pub-tags-inline">
                <span class="inline-tag">Tree Delineation</span>
                <span class="inline-tag">Weakly Supervised</span>
            </div>
            <div class="resource-links">
                <span class="res-link doi">doi.org/10.1109/LGRS.2026.3693969</span>
            </div>
        </div>
    </a>

    <a href="https://doi.org/10.2192/URSUS-D-25-00010" target="_blank" class="pub-item" data-topics="rs">
        <span class="pub-title">Intelligent bear deterrence system based on computer vision: Reducing human–bear conflicts in remote areas</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Fei, T., Kupfer, J. A., Du, Y., Yi, J., & Li, Y.</span>
        <span class="pub-venue">Ursus, 2026</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <div class="pub-tags-inline">
                <span class="inline-tag">Computer Vision</span>
                <span class="inline-tag">Edge AI</span>
            </div>
            <div class="resource-links">
                <span class="res-link doi">doi.org/10.2192/URSUS-D-25-00010</span>
            </div>
        </div>
    </a>

    <a href="https://doi.org/10.1111/tgis.70246" target="_blank" class="pub-item" data-topics="geoai rs">
        <span class="pub-title">Cross-Modal Urban Sensing: Evaluating Sound–Vision Alignment Across Street-Level and Aerial Imagery</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Huang, X., Fei, T., & Wang, S.</span>
        <span class="pub-venue">Transactions in GIS, 2026</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <div class="pub-tags-inline">
                <span class="inline-tag">Cross-Modal</span>
                <span class="inline-tag">Urban Sensing</span>
            </div>
            <div class="resource-links">
                <span class="res-link doi">doi.org/10.1111/tgis.70246</span>
            </div>
        </div>
    </a>

    <a href="https://doi.org/10.1080/01431161.2025.2534994" target="_blank" class="pub-item" data-topics="geoai rs">
        <span class="pub-title">A GAN-enhanced deep learning framework for rooftop detection from historical aerial imagery</span>
        <span class="pub-authors"><span class="me">Chen, P.</span>, Wang, S., Wang, C., et al.</span>
        <span class="pub-venue">International Journal of Remote Sensing, 2025</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <span class="badge highlight">Cover Article</span>
            <div class="resource-links">
                <span class="res-link doi">doi.org/10.1080/01431161.2025.2534994</span>
            </div>
        </div>
    </a>

    <a href="https://doi.org/10.1080/15230406.2025.25675643" target="_blank" class="pub-item" data-topics="stats">
        <span class="pub-title">Where are GIScience faculty hired from? Analyzing faculty mobility and research themes through hiring networks</span>
        <span class="pub-authors">Chen, Y., Nelson, J. K., ..., <span class="me">Chen, P.</span></span>
        <span class="pub-venue">Cartography and Geographic Information Science, 2025</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <div class="pub-tags-inline">
                <span class="inline-tag">Hiring Networks</span>
            </div>
            <div class="resource-links">
                <span class="res-link doi">doi.org/10.1080/15230406.2025.25675643</span>
            </div>
        </div>
    </a>

    <a href="https://doi.org/10.1016/j.jtrangeo.2023.103755" target="_blank" class="pub-item" data-topics="stats">
        <span class="pub-title">Socio-demographic inequalities in the impacts of extreme temperatures on population mobility</span>
        <span class="pub-authors">Gu, X., <span class="me">Chen, P.</span>, & Fan, C.</span>
        <span class="pub-venue">Journal of Transport Geography, 114, 103755, 2024</span>
        <div class="pub-metadata">
            <span class="badge">Journal</span>
            <div class="pub-tags-inline">
                <span class="inline-tag">Mobility</span>
                <span class="inline-tag">Climate Justice</span>
            </div>
            <div class="resource-links">
                <span class="res-link doi">doi.org/10.1016/j.jtrangeo.2023.103755</span>
            </div>
        </div>
    </a>

    <div class="scholar-footer">
        <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ" target="_blank" class="scholar-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
            Google Scholar Profile
        </a>
        <p style="color: inherit; opacity: 0.5; font-size: 0.8rem; margin-top: 15px;">Last updated: May 2026</p>
    </div>
</div>

<script>
    function filterPubs(topic) {
        // 更新按钮活跃状态
        const buttons = document.querySelectorAll('.filter-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');

        // 检索并过滤所有出版物条目
        const items = document.querySelectorAll('.pub-item');
        items.forEach(item => {
            if (topic === 'all') {
                item.classList.remove('is-hidden');
            } else {
                const itemTopics = item.getAttribute('data-topics') || '';
                if (itemTopics.includes(topic)) {
                    item.classList.remove('is-hidden');
                } else {
                    item.classList.add('is-hidden');
                }
            }
        });
    }
</script>
