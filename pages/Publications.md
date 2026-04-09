---
layout: page
title: Publications
permalink: /Publications/
tags: [Page]
---

<style>
    /* --- Global --- */
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        color: #333;
        line-height: 1.6;
    }

    /* --- Section Headers --- */
    .section-header {
        margin-top: 40px;
        margin-bottom: 25px;
        padding-bottom: 10px;
        border-bottom: 2px solid #e0e0e0;
        font-size: 1.4rem;
        font-weight: 700;
        color: #2c3e50;
    }

    /* --- Publication Cards --- */
    .pub-card {
        margin-bottom: 20px;
        padding: 16px;
        background: #fafafa;
        border-radius: 8px;
        border-left: 4px solid #4a90e2;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .pub-card:hover {
    transform: none;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    }
    
    /* Status-based left borders */
    .pub-card.journal { border-left-color: #1565c0; }
    .pub-card.conference { border-left-color: #ef6c00; }
    .pub-card.preprint { border-left-color: #7b1fa2; }
    .pub-card.working { border-left-color: #9e9e9e; background: #f5f5f5; }

    /* --- Header Row: Tags --- */
    .pub-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }

    /* --- Tags --- */
    .pub-tag {
        display: inline-block;
        font-size: 0.7rem;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 4px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .tag-journal { background: #e3f2fd; color: #1565c0; }
    .tag-conf { background: #fff3e0; color: #ef6c00; }
    .tag-preprint { background: #f3e5f5; color: #7b1fa2; }
    .tag-working { background: #eeeeee; color: #616161; }

    .pub-year {
        font-size: 0.85rem;
        color: #888;
        font-weight: 600;
    }

    /* --- Content --- */
    .pub-title {
        font-size: 1.05rem;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 8px;
        line-height: 1.4;
        display: block;
    }
    
    .pub-authors {
        font-size: 0.95rem;
        color: #555;
        margin-bottom: 6px;
        line-height: 1.5;
    }
    .me {
        font-weight: 700;
        color: #000;
        background: linear-gradient(120deg, #ffe0b2 0%, #ffe0b2 100%);
        background-repeat: no-repeat;
        background-size: 100% 40%;
        background-position: 0 88%;
        padding: 0 2px;
    }
    
    .pub-venue {
        font-style: italic;
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 12px;
        display: block;
    }

    /* --- Action Links --- */
    .pub-links {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }
    .btn-link {
        display: inline-flex;
        align-items: center;
        border: 1px solid #4a90e2;
        color: #4a90e2;
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        text-decoration: none;
        transition: all 0.2s;
        font-weight: 500;
    }
    .btn-link:hover {
        background-color: #4a90e2;
        color: white;
        text-decoration: none;
    }
    .btn-link i {
        margin-right: 5px;
        font-size: 0.75rem;
    }
    
    /* Alternative actions for working papers */
    .btn-link.disabled {
        border-color: #ccc;
        color: #999;
        cursor: not-allowed;
    }
    .btn-link.disabled:hover {
        background: transparent;
        color: #999;
    }

    /* --- Research Interests --- */
    .interests-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-bottom: 40px;
    }
    .interest-box {
        padding: 20px;
        background: #f8f9fa;
        border-radius: 8px;
        border-top: 3px solid #4a90e2;
    }
    .interest-box h3 {
        margin: 0 0 10px 0;
        font-size: 1rem;
        color: #2c3e50;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .interest-box i {
        color: #4a90e2;
        font-size: 1.2rem;
    }
    .interest-box p {
        margin: 0;
        font-size: 0.95rem;
        color: #555;
        line-height: 1.5;
    }

    /* --- Scholar Box --- */
    .scholar-box {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        border-radius: 12px;
        padding: 25px;
        text-align: center;
        margin: 40px 0;
    }
    .scholar-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        background-color: #4a90e2;
        color: white !important;
        padding: 10px 25px;
        border-radius: 25px;
        text-decoration: none !important;
        font-weight: 600;
        margin-top: 10px;
        transition: all 0.3s;
        box-shadow: 0 4px 6px rgba(74, 144, 226, 0.3);
    }
    .scholar-btn:hover {
        background-color: #357abd;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(74, 144, 226, 0.4);
    }

    /* --- Responsive --- */
    @media (max-width: 600px) {
        .pub-card { padding: 15px; }
        .pub-title { font-size: 1.05rem; }
        .interests-grid { grid-template-columns: 1fr; }
    }
</style>

<!-- Research Interests -->
<h2 class="section-header">Research Interests</h2>
<div class="interests-grid">
    <div class="interest-box">
        <h3><i class="fa fa-brain"></i> Geospatial AI</h3>
        <p>Applying <strong>deep learning and spatial statistics</strong> to analyze human and environmental spatial behavior patterns.</p>
    </div>
    <div class="interest-box">
        <h3><i class="fa fa-satellite"></i> Remote Sensing</h3>
        <p>Leveraging AI in <strong>remote sensing</strong> for environmental monitoring, land use mapping, and conservation efforts.</p>
    </div>
    <div class="interest-box">
        <h3><i class="fa fa-city"></i> Urban Computing</h3>
        <p>Integrating <strong>computer vision and multimodal data</strong> analysis for urban sensing, planning, and mobility understanding.</p>
    </div>
</div>

<!-- Scholar Profile -->
<div class="scholar-box">
    <p style="margin: 0 0 15px 0; font-size: 1.1rem; color: #2c3e50; font-weight: 600;">
        📚 View complete publication list, citation metrics, and preprints
    </p>
    <a href="https://scholar.google.com/citations?hl=en&authuser=1&user=3Y9YVSIAAAAJ" class="scholar-btn" target="_blank">
        <i class="fa fa-graduation-cap"></i> Google Scholar Profile
    </a>
</div>

<!-- Published Works -->
<h2 class="section-header">Journal Articles</h2>

<!-- Ursus (NEW - put FIRST) -->
<div class="pub-card journal highlight">
    <div class="pub-header">
        <span class="pub-tag tag-journal">Journal Article</span>
        <span class="pub-year">2026</span>
    </div>
    <span class="pub-title">Intelligent bear deterrence system based on computer vision: Reducing human–bear conflicts in remote areas</span>
    <span class="pub-authors"><span class="me">Chen, P.</span>, Fei, T., Kupfer, J. A., Du, Y., Yi, J., & Li, Y.</span>
    <span class="pub-venue">Ursus, 37:e6</span>
    <div class="pub-links">
        <a href="https://doi.org/10.2192/URSUS-D-25-00010" class="btn-link" target="_blank">DOI</a>
    </div>
</div>

<!-- TGIS -->
<div class="pub-card journal">
    <div class="pub-header">
        <span class="pub-tag tag-journal">Journal Article</span>
        <span class="pub-year">2026</span>
    </div>
    <span class="pub-title">Cross-Modal Urban Sensing: Evaluating Sound–Vision Alignment Across Street-Level and Aerial Imagery</span>
    <span class="pub-authors"><span class="me">Chen, P.</span>, Huang, X., Fei, T., & Wang, S.</span>
    <span class="pub-venue">Transactions in GIS</span>
    <div class="pub-links">
        <a href="https://doi.org/10.1111/tgis.70246" class="btn-link" target="_blank">DOI</a>
    </div>
</div>

<!-- IJRS -->
<div class="pub-card journal">
    <div class="pub-header">
        <span class="pub-tag tag-journal">Journal Article</span>
        <span class="pub-year">2025</span>
    </div>
    <span class="pub-title">A GAN-enhanced deep learning framework for rooftop detection from historical aerial imagery</span>
    <span class="pub-authors"><span class="me">Chen, P.</span>, Wang, S., Wang, C., Wang, S., Huang, B., Huang, L., & Zang, Z.</span>
    <span class="pub-venue">International Journal of Remote Sensing (Cover Article)</span>
    <div class="pub-links">
        <a href="https://doi.org/10.1080/01431161.2025.2534994" class="btn-link" target="_blank">DOI</a>
    </div>
</div>

<!-- CAGIS (NEW ADD) -->
<div class="pub-card journal">
    <div class="pub-header">
        <span class="pub-tag tag-journal">Journal Article</span>
        <span class="pub-year">2025</span>
    </div>
    <span class="pub-title">Where are GIScience faculty hired from? Analyzing faculty mobility and research themes through hiring networks</span>
    <span class="pub-authors">Chen, Y., Nelson, J. K., Zhou, B., Zhou, R. Z., Ye, S., Liu, H., Gu, Z., Kar, A., Kwon, H., <span class="me">Chen, P.</span></span>
    <span class="pub-venue">Cartography and Geographic Information Science</span>
    <div class="pub-links">
        <a href="https://doi.org/10.1080/15230406.2025.25675643" class="btn-link" target="_blank">DOI</a>
    </div>
</div>

<!-- JTG -->
<div class="pub-card journal">
    <div class="pub-header">
        <span class="pub-tag tag-journal">Journal Article</span>
        <span class="pub-year">2023</span>
    </div>
    <span class="pub-title">Socio-demographic inequalities in the impacts of extreme temperatures on population mobility</span>
    <span class="pub-authors">Gu, X., <span class="me">Chen, P.</span>, & Fan, C.</span>
    <span class="pub-venue">Journal of Transport Geography</span>
    <div class="pub-links">
        <a href="https://doi.org/10.1016/j.jtrangeo.2023.103755" class="btn-link" target="_blank">DOI</a>
    </div>
</div>

<!-- Working Papers -->
<h2 class="section-header">Working Papers & In Preparation</h2>

<div class="pub-card working">
    <div class="pub-header">
        <span class="pub-tag tag-working">In Prep</span>
        <span class="pub-year">2025</span>
    </div>
    <span class="pub-title">Spatial Model of Crash Fatalities by Examining Effects of Infrastructural Factors: A Case Study on South Carolina</span>
    <span class="pub-authors"><span class="me">Chen, P.</span> (Co-first author)</span>
    <span class="pub-venue">Submitted to Target Journal</span>
    <div class="pub-links">
        <span class="btn-link disabled"><i class="fa fa-clock"></i> Under Review</span>
    </div>
</div>

<div class="pub-card working">
    <div class="pub-header">
        <span class="pub-tag tag-working">In Prep</span>
        <span class="pub-year">2025</span>
    </div>
    <span class="pub-title">Mapping Multi-Dimensional Urban Tree Canopy Change with Deep Learning: A Case Study of Columbia, SC (2005–2023)</span>
    <span class="pub-authors"><span class="me">Chen, P.</span> (First author)</span>
    <span class="pub-venue">Manuscript in Preparation</span>
    <div class="pub-links">
        <span class="btn-link disabled"><i class="fa fa-edit"></i> Drafting</span>
    </div>
</div>

<p style="margin-top: 4em; color: #888; font-style: italic; font-size: 0.9rem; text-align: center; border-top: 1px solid #eee; padding-top: 2em;">
    — Last updated: March 2025 | <i class="fa fa-sync"></i> More papers coming —
</p>
