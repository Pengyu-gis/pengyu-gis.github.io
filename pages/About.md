---
layout: page
title: About
permalink: /about/
tags: [Page]
---

<style>
    /* --- 全局容器控制 --- */
    .about-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 10px;
        color: #333;
        line-height: 1.6;
    }

    /* --- 顶部联系方式与按钮 --- */
    .hero-section {
        text-align: center;
        margin: 40px 0 50px 0;
    }
    .hero-title {
        font-size: 1.4rem;
        color: #666;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 15px;
    }
    .social-links {
        margin-bottom: 25px;
    }
    .social-links a {
        margin: 0 12px;
        color: #4a90e2;
        text-decoration: none;
        font-size: 0.95rem;
    }
    .social-links a:hover { text-decoration: underline; }

    .btn-cv {
        display: inline-block;
        border: 1px solid #2c3e50;
        color: #2c3e50 !important;
        padding: 8px 25px;
        border-radius: 4px;
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.2s;
    }
    .btn-cv:hover {
        background: #2c3e50;
        color: white !important;
    }

    /* --- 极简公告栏 --- */
    .collab-note {
        border-left: 3px solid #4a90e2;
        background: #f8f9fa;
        padding: 15px 20px;
        margin: 30px 0;
        font-size: 0.95rem;
    }

    /* --- 模块标题 --- */
    .section-header {
        margin: 50px 0 25px 0;
        font-size: 1.3rem;
        font-weight: 700;
        border-bottom: 2px solid #333;
        display: inline-block;
        padding-bottom: 4px;
    }

    /* --- 经历条目 --- */
    .entry {
        margin-bottom: 25px;
    }
    .entry-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
    }
    .entry-title {
        font-weight: 700;
        font-size: 1.05rem;
        color: #111;
    }
    .entry-date {
        font-size: 0.85rem;
        color: #888;
        font-family: monospace;
    }
    .entry-sub {
        font-size: 0.95rem;
        color: #555;
        font-style: italic;
        margin-bottom: 5px;
    }
    .entry-content {
        font-size: 0.95rem;
        color: #666;
    }
    .entry-content ul {
        margin: 5px 0;
        padding-left: 18px;
    }

    /* --- 导师区域 --- */
    .advisor-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    .advisor-item {
        text-align: center;
    }
    .advisor-img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: 4px;
        filter: grayscale(100%);
        transition: 0.3s;
        border: 1px solid #eee;
    }
    .advisor-item:hover .advisor-img { filter: grayscale(0%); }
    .advisor-name {
        font-weight: 600;
        font-size: 0.9rem;
        margin-top: 8px;
        display: block;
    }
    .advisor-role {
        font-size: 0.8rem;
        color: #888;
    }

    @media (max-width: 600px) {
        .entry-header { flex-direction: column; }
        .advisor-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="about-container">

    <div class="hero-section">
        <h1 class="hero-title">Geospatial & Spatial Learning</h1>
        <div class="social-links">
            <a href="mailto:pengyuc@vt.edu">Email</a>
            <a href="https://github.com/Pengyu-gis">GitHub</a>
            <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ">Scholar</a>
            <a href="https://www.linkedin.com/in/pengyu-chen">LinkedIn</a>
        </div>
        <a href="/Pengyu_Chen_CV.pdf" class="btn-cv">Download CV (PDF)</a>
    </div>

    <div class="collab-note">
        <strong>Research Interests:</strong> GeoAI, Remote Sensing, Spatial Statistics.<br>
        <span style="color: #666;">Incoming Ph.D. Student at Virginia Tech (Fall 2026).</span>
    </div>

    <h2 class="section-header">Education</h2>
    
    <div class="entry">
        <div class="entry-header">
            <span class="entry-title">M.S. in Geographic Information Science</span>
            <span class="entry-date">2024 – 2026</span>
        </div>
        <div class="entry-sub">University of South Carolina, Columbia, SC</div>
        <div class="entry-content">
            GPA: 3.82/4.0 | Advisor: <a href="https://scholar.google.com/citations?user=ul3VlbgAAAAJ">Dr. Sicheng Wang</a>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-title">Visiting Student</span>
            <span class="entry-date">2023 – 2024</span>
        </div>
        <div class="entry-sub">Wuhan University, China</div>
        <div class="entry-content">Advisor: Prof. Teng Fei</div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-title">B.S. in Geographic Information Science</span>
            <span class="entry-date">2020 – 2024</span>
        </div>
        <div class="entry-sub">Wuhan University of Technology, China</div>
        <div class="entry-content">Thesis: <em>Transformer-based geographic scene description</em></div>
    </div>

    <h2 class="section-header">Research Experience</h2>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-title">Research Assistant (City of Columbia Project)</span>
            <span class="entry-date">2025</span>
        </div>
        <div class="entry-sub">University of South Carolina</div>
        <div class="entry-content">
            <ul>
                <li>Tree canopy detection using SegFormer on historical aerial imagery (2005–2023).</li>
            </ul>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-title">Research Intern, Spatial Data Lab</span>
            <span class="entry-date">2024</span>
        </div>
        <div class="entry-sub">Harvard University</div>
        <div class="entry-content">Geographic Big Data Analytics & Spatio-Temporal Data Mining.</div>
    </div>

    <h2 class="section-header">Advisors</h2>
    <div class="advisor-grid">
        <div class="advisor-item">
            <img src="/assets/img/sicheng.jpg" class="advisor-img">
            <span class="advisor-name">Dr. Sicheng Wang</span>
            <span class="advisor-role">M.S. Advisor, USC</span>
        </div>
        <div class="advisor-item">
            <img src="/assets/img/tengfei.jpg" class="advisor-img">
            <span class="advisor-name">Prof. Teng Fei</span>
            <span class="advisor-role">Visiting Advisor, WHU</span>
        </div>
        <div class="advisor-item">
            <img src="/assets/img/cuiwei.jpg" class="advisor-img">
            <span class="advisor-name">Prof. Wei Cui</span>
            <span class="advisor-role">B.S. Advisor, WUT</span>
        </div>
    </div>

</div>
