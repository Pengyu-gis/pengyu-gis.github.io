---
layout: page
title: About
permalink: /about/
tags: [Page]
---

<style>
    /* --- 页面核心布局 --- */
    .about-container {
        max-width: 850px;
        margin: 0 auto;
        padding: 0 15px;
        color: #333;
        line-height: 1.6;
    }

    /* --- 顶部 Header --- */
    .profile-header {
        text-align: center;
        padding: 40px 0;
        border-bottom: 1px solid #eee;
        margin-bottom: 40px;
    }
    .profile-header h1 {
        font-size: 1.8rem;
        font-weight: 700;
        color: #2c3e50;
        margin-bottom: 15px;
    }
    .contact-links {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 25px;
    }
    .contact-links a {
        color: #4a90e2;
        text-decoration: none;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .contact-links a:hover { text-decoration: underline; }

    .btn-cv {
        display: inline-block;
        background: #2c3e50;
        color: white !important;
        padding: 8px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 0.9rem;
        transition: all 0.3s;
    }
    .btn-cv:hover { background: #4a90e2; }

    /* --- 状态公告栏 --- */
    .status-banner {
        background: #f0f7ff;
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 40px;
        font-size: 0.95rem;
        color: #2c3e50;
        border-left: 4px solid #4a90e2;
    }

    /* --- 模块标题 --- */
    .section-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #2c3e50;
        margin: 40px 0 20px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .section-title::after {
        content: "";
        flex: 1;
        height: 1px;
        background: #eee;
    }

    /* --- 简历条目布局 --- */
    .entry {
        margin-bottom: 30px;
    }
    .entry-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 5px;
    }
    .entry-main {
        font-weight: 700;
        font-size: 1.1rem;
        color: #111;
    }
    .entry-date {
        font-size: 0.85rem;
        color: #888;
        font-family: 'Courier New', Courier, monospace;
    }
    .entry-sub {
        font-weight: 600;
        color: #555;
        font-size: 0.95rem;
        margin-bottom: 8px;
    }
    .entry-details {
        font-size: 0.95rem;
        color: #555;
    }
    .entry-details ul {
        margin: 8px 0;
        padding-left: 18px;
    }
    .entry-details li {
        margin-bottom: 5px;
    }

    /* --- 导师照片墙 (恢复彩色 & 优化) --- */
    .advisor-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 25px;
        margin-top: 20px;
    }
    .advisor-card {
        text-align: center;
    }
    .advisor-img {
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s;
    }
    .advisor-card:hover .advisor-img {
        transform: translateY(-5px);
    }
    .advisor-name {
        display: block;
        font-weight: 700;
        font-size: 0.95rem;
        margin-top: 12px;
        color: #2c3e50;
    }
    .advisor-role {
        font-size: 0.8rem;
        color: #888;
    }

    @media (max-width: 700px) {
        .entry-header { flex-direction: column; }
        .advisor-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="about-container">

    <header class="profile-header">
        <h1>Pengyu Chen</h1>
        <div class="contact-links">
            <a href="mailto:pengyuc@vt.edu"><i class="fa fa-envelope"></i> Email</a>
            <a href="https://github.com/Pengyu-gis"><i class="fa fa-github"></i> GitHub</a>
            <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ"><i class="fa fa-graduation-cap"></i> Scholar</a>
            <a href="https://www.linkedin.com/in/pengyu-chen-a07973181/"><i class="fa fa-linkedin"></i> LinkedIn</a>
        </div>
        <a href="/Pengyu_Chen_CV.pdf" class="btn-cv">Complete CV (PDF)</a>
    </header>

    <div class="status-banner">
        <strong>Open to collaboration on:</strong> GeoAI · Remote Sensing · Spatial Statistics · AI for Good<br>
        <p style="margin-top: 8px; margin-bottom: 0;">Starting my Ph.D. in Geospatial and Environmental Analysis at <strong>Virginia Tech</strong> in Fall 2026.</p>
    </div>

    <h2 class="section-title">Education</h2>
    
    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">M.S. in Geographic Information Science</span>
            <span class="entry-date">2024 – 2026</span>
        </div>
        <div class="entry-sub">University of South Carolina, Columbia, SC</div>
        <div class="entry-details">
            GPA: 3.82/4.0 | Teaching Assistant (Full Scholarship)<br>
            Advisor: <a href="https://scholar.google.com/citations?user=ul3VlbgAAAAJ" style="color:#4a90e2; text-decoration:none;">Dr. Sicheng Wang</a>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">Visiting Student</span>
            <span class="entry-date">2023 – 2024</span>
        </div>
        <div class="entry-sub">Wuhan University, China</div>
        <div class="entry-details">Advisor: <a href="https://only4john.github.io/" style="color:#4a90e2; text-decoration:none;">Prof. Teng Fei</a></div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">B.S. in Geographic Information Science</span>
            <span class="entry-date">2020 – 2024</span>
        </div>
        <div class="entry-sub">Wuhan University of Technology, China</div>
        <div class="entry-details">Thesis: <em>Transformer-based geographic scene description</em> | Advisor: Prof. Wei Cui</div>
    </div>

    <h2 class="section-title">Research & Internship</h2>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">Graduate Research Assistant</span>
            <span class="entry-date">Jul – Aug 2025</span>
        </div>
        <div class="entry-sub">University of South Carolina (Funded by City of Columbia)</div>
        <div class="entry-details">
            <ul>
                <li>Developed a deep learning pipeline using <strong>SegFormer</strong> to automate tree canopy detection from historical aerial imagery (2005–2023).</li>
                <li>Conducted multi-temporal analysis to assess urban canopy change and its environmental impact.</li>
            </ul>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">Research Intern (Spatial Data Lab)</span>
            <span class="entry-date">May – Sept 2024</span>
        </div>
        <div class="entry-sub">Harvard University (CGA)</div>
        <div class="entry-details">
            Focus: <strong>Geographic Big Data Analytics</strong> and Spatio-Temporal Data Mining under the supervision of Dr. Yuhang Pan.
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">Research Assistant & Visiting Student</span>
            <span class="entry-date">2023 – 2024</span>
        </div>
        <div class="entry-sub">Wuhan University</div>
        <div class="entry-details">
            <ul>
                <li>Developed a YOLO-based <strong>Intelligent Bear Deterrence System</strong> to mitigate human-wildlife conflicts.</li>
                <li>Optimized and deployed computer vision models to K210 microcontrollers for real-time edge computing.</li>
            </ul>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">Research Intern</span>
            <span class="entry-date">Sept 2022 – Jan 2023</span>
        </div>
        <div class="entry-sub">Clemson University (Remote)</div>
        <div class="entry-details">
            Co-authored research in <strong>Journal of Transport Geography</strong>; processed mobility datasets and generated impact curves for extreme temperatures.
        </div>
    </div>

    <h2 class="section-title">Advisors</h2>
    <div class="advisor-grid">
        <div class="advisor-card">
            <img src="/assets/img/sicheng.jpg" alt="Sicheng Wang" class="advisor-img">
            <span class="advisor-name">Dr. Sicheng Wang</span>
            <span class="advisor-role">M.S. Advisor, USC</span>
        </div>
        <div class="advisor-card">
            <img src="/assets/img/tengfei.jpg" alt="Teng Fei" class="advisor-img">
            <span class="advisor-name">Prof. Teng Fei</span>
            <span class="advisor-role">Visiting Advisor, WHU</span>
        </div>
        <div class="advisor-card">
            <img src="/assets/img/cuiwei.jpg" alt="Wei Cui" class="advisor-img">
            <span class="advisor-name">Prof. Wei Cui</span>
            <span class="advisor-role">B.S. Advisor, WUT</span>
        </div>
    </div>

</div>
