---
layout: page
title: About
permalink: /about/
tags: [Page]
---

<style>
    /* --- Global Reset --- */
    .page-container {
        max-width: 800px;  /* 稍窄一点更适合阅读 */
        margin: 0 auto;
        padding: 0 20px;
        color: #444;
        line-height: 1.7;
    }

    /* --- Hero Section --- */
    .hero {
        text-align: center;
        padding: 60px 0 40px;
        border-bottom: 1px solid #eee;
        margin-bottom: 50px;
    }
    .hero h1 {
        font-size: 2.2rem;
        font-weight: 700;
        color: #2c3e50;
        margin: 0 0 10px 0;
        letter-spacing: -0.5px;
    }
    .hero .subtitle {
        font-size: 1.1rem;
        color: #666;
        margin-bottom: 25px;
        font-weight: 400;
    }
    .hero .contact-bar {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .hero .contact-bar a {
        color: #4a90e2;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        transition: color 0.2s;
    }
    .hero .contact-bar a:hover {
        color: #2c3e50;
    }
    .btn-cv {
        display: inline-block;
        background: #2c3e50;
        color: white !important;
        padding: 10px 24px;
        border-radius: 30px;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        margin-top: 10px;
        transition: all 0.2s;
    }
    .btn-cv:hover {
        background: #4a90e2;
        transform: translateY(-1px);
    }

    /* --- Quote Block --- */
    .quote-block {
        margin: 50px auto;
        max-width: 600px;
        text-align: center;
        font-style: italic;
        color: #666;
        font-size: 1rem;
        line-height: 1.8;
        position: relative;
        padding: 20px 0;
    }
    .quote-block::before {
        content: '"';
        font-size: 3rem;
        color: #ddd;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        font-family: Georgia, serif;
    }

    /* --- Section Cards --- */
    .section-card {
        background: #fff;
        border: 1px solid #f0f0f0;
        border-radius: 12px;
        padding: 35px;
        margin-bottom: 30px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    }
    .section-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #2c3e50;
        margin: 0 0 25px 0;
        padding-bottom: 12px;
        border-bottom: 2px solid #f5f5f5;
    }

    /* --- Clean List Style (No Timeline Border) --- */
    .entry {
        margin-bottom: 30px;
        padding-bottom: 30px;
        border-bottom: 1px solid #f5f5f5;
    }
    .entry:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
    }
    .entry-header {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 6px;
        flex-wrap: wrap;
        gap: 10px;
    }
    .entry-title {
        font-size: 1.1rem;
        font-weight: 600;
        color: #2c3e50;
        margin: 0;
    }
    .entry-date {
        font-size: 0.85rem;
        color: #888;
        font-family: "SF Mono", Monaco, monospace;
        white-space: nowrap;
    }
    .entry-org {
        font-size: 0.95rem;
        color: #555;
        margin-bottom: 8px;
    }
    .entry-desc {
        font-size: 0.95rem;
        color: #666;
        margin: 8px 0;
    }
    .entry-desc ul {
        margin: 8px 0;
        padding-left: 20px;
    }
    .entry-desc li {
        margin-bottom: 4px;
    }
    .entry-tags {
        margin-top: 10px;
    }
    .tag {
        display: inline-block;
        background: #f0f4f8;
        color: #4a5568;
        padding: 3px 10px;
        border-radius: 12px;
        font-size: 0.8rem;
        margin-right: 6px;
    }
    .tag-highlight {
        background: #ebf5ff;
        color: #2563eb;
    }

    /* --- Advisors Section --- */
    .advisors {
        margin-top: 40px;
    }
    .advisor-grid {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-wrap: wrap;
    }
    .advisor-item {
        text-align: center;
        flex: 0 0 200px;
    }
    .advisor-img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 12px;
        filter: grayscale(20%);
        transition: filter 0.3s;
    }
    .advisor-img:hover {
        filter: grayscale(0%);
    }
    .advisor-name {
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 4px;
    }
    .advisor-role {
        font-size: 0.85rem;
        color: #888;
    }

    /* --- Responsive --- */
    @media (max-width: 600px) {
        .section-card {
            padding: 25px 20px;
        }
        .hero h1 {
            font-size: 1.8rem;
        }
        .entry-header {
            flex-direction: column;
            gap: 4px;
        }
    }
</style>

<div class="page-container">

<!-- Hero -->
<div class="hero">
    <h1>Pengyu Chen <span style="font-weight: 400; color: #666; font-size: 1.3rem;">陈鹏宇</span></h1>
    <div class="subtitle">
        M.S. in Geographic Information Science<br>
        University of South Carolina
    </div>
    
    <div class="contact-bar">
        <a href="mailto:pengyuc@email.sc.edu">Email</a>
        <a href="https://github.com/Pengyu-gis">GitHub</a>
        <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ">Google Scholar</a>
        <a href="https://www.linkedin.com/in/pengyu-chen">LinkedIn</a>
    </div>
    
    <a href="/Pengyu_Chen_CV.pdf" class="btn-cv">Download CV</a>
</div>

<!-- Quote -->
<div class="quote-block">
    一九二六，北伐兵兴，边隅之地，青年两个，墨盒为礼，寄语未来；惟不知抬头落款中的两个人，他们的后来，是否就达学问功名，是否完成…『伟大的人生』。<br>
    — 腰乐队 刘弢
</div>

<!-- Collaboration Note -->
<div style="text-align: center; margin: 40px 0; padding: 20px; background: #fafbfc; border-radius: 8px; font-size: 0.95rem; color: #555;">
    <strong>Open to collaboration on:</strong> GeoAI · Remote Sensing · Geospatial Statistics · AI for Good<br>
    <span style="color: #888; font-size: 0.9rem; display: block; margin-top: 8px;">
        🎓 Starting Ph.D. at Virginia Tech in Fall 2026
    </span>
</div>

<!-- Education -->
<div class="section-card">
    <h2 class="section-title">Education</h2>
    
    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">M.S. in Geographic Information Science</div>
            <div class="entry-date">2024 – 2026</div>
        </div>
        <div class="entry-org">University of South Carolina, Columbia, SC</div>
        <div class="entry-tags">
            <span class="tag tag-highlight">TA Full Scholarship</span>
            <span class="tag">GPA 3.82/4.0</span>
        </div>
        <div class="entry-desc" style="margin-top: 10px;">
            Advisor: <a href="https://scholar.google.com/citations?user=ul3VlbgAAAAJ" style="color: #4a90e2; text-decoration: none;">Dr. Sicheng Wang</a>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Visiting Student</div>
            <div class="entry-date">2023 – 2024</div>
        </div>
        <div class="entry-org">Wuhan University, China</div>
        <div class="entry-desc">
            Spent final undergraduate year as visiting student.<br>
            Advisor: <a href="https://only4john.github.io/" style="color: #4a90e2; text-decoration: none;">Prof. Teng Fei</a>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">B.S. in Geographic Information Science</div>
            <div class="entry-date">2020 – 2024</div>
        </div>
        <div class="entry-org">Wuhan University of Technology, China</div>
        <div class="entry-desc">
            Thesis: <em>Transformer-based geographic scene description</em><br>
            Advisor: Prof. Wei Cui
        </div>
    </div>
</div>

<!-- Experience -->
<div class="section-card">
    <h2 class="section-title">Research Experience</h2>
    
    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Research Assistant</div>
            <div class="entry-date">Jul – Aug 2025</div>
        </div>
        <div class="entry-org">University of South Carolina (City of Columbia funded)</div>
        <div class="entry-desc">
            <ul>
                <li>Tree canopy detection using SegFormer on historical aerial imagery (2005–2023)</li>
            </ul>
            Advisors: Dr. Cuizhen Wang & Dr. Kirstin Dow
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Research Intern, Spatial Data Lab</div>
            <div class="entry-date">May – Sept 2024</div>
        </div>
        <div class="entry-org">Harvard University</div>
        <div class="entry-desc">
            Geographic Big Data Analytics, Spatio-Temporal Data Mining<br>
            Supervisor: Dr. Yuhang Pan
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Visiting Student & RA</div>
            <div class="entry-date">2023 – 2024</div>
        </div>
        <div class="entry-org">Wuhan University</div>
        <div class="entry-desc">
            <ul>
                <li>YOLO-based brown bear detection for human-bear conflict mitigation</li>
                <li>Model compression and deployment to K210 microcontroller</li>
            </ul>
            Supervisor: Prof. Teng Fei
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Research Intern</div>
            <div class="entry-date">Sept 2022 – Jan 2023</div>
        </div>
        <div class="entry-org">Clemson University (Remote)</div>
        <div class="entry-desc">
            Data processing and curve generation; co-authored paper in <em>Journal of Transport Geography</em><br>
            Supervisor: Dr. Chao Fan
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Algorithm Intern</div>
            <div class="entry-date">Jan – Mar 2022</div>
        </div>
        <div class="entry-org">Xuzhou Construction Machinery Group (XCMG)</div>
        <div class="entry-desc">
            Digital road modeling using Leica software and ArcGIS
        </div>
    </div>
</div>

<!-- Teaching -->
<div class="section-card">
    <h2 class="section-title">Teaching & Service</h2>
    
    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Lab Instructor, GEOG 201</div>
            <div class="entry-date">Fall 2024 – Spring 2025</div>
        </div>
        <div class="entry-org">University of South Carolina</div>
        <div class="entry-desc">
            Landform Geography laboratory sections<br>
            Supervisors: Dr. Jean Taylor Ellis & Dr. John A. Kupfer
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <div class="entry-title">Website Development Lead</div>
            <div class="entry-date">2021 – Present</div>
        </div>
        <div class="entry-org">GISphere</div>
        <div class="entry-desc">
            Backend development (Django REST Framework, MySQL), frontend (Vue), product management
        </div>
    </div>
</div>

<!-- Advisors -->
<div class="section-card advisors">
    <h2 class="section-title">Advisors</h2>
    <div class="advisor-grid">
        <div class="advisor-item">
            <img src="/assets/img/sicheng.jpg" alt="Dr. Sicheng Wang" class="advisor-img">
            <div class="advisor-name">Dr. Sicheng Wang</div>
            <div class="advisor-role">M.S. Advisor, USC</div>
        </div>
        <div class="advisor-item">
            <img src="/assets/img/tengfei.jpg" alt="Prof. Teng Fei" class="advisor-img">
            <div class="advisor-name">Prof. Teng Fei</div>
            <div class="advisor-role">Visiting Advisor, WHU</div>
        </div>
        <div class="advisor-item">
            <img src="/assets/img/cuiwei.jpg" alt="Prof. Wei Cui" class="advisor-img">
            <div class="advisor-name">Prof. Wei Cui</div>
            <div class="advisor-role">B.S. Advisor, WUT</div>
        </div>
    </div>
</div>

</div>
