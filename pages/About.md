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
        color: inherit; /* 继承系统文字颜色，完美适配黑夜模式 */
        line-height: 1.6;
    }

    /* --- 顶部 Header --- */
    .profile-header {
        text-align: center;
        padding: 40px 0;
        border-bottom: 1px solid rgba(128, 128, 128, 0.15);
        margin-bottom: 40px;
    }
    .profile-header h1 {
        font-size: 1.9rem;
        font-weight: 700;
        color: inherit;
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
        color: #4a90e2; /* 在白天与黑夜都有极佳辨识度的蓝色 */
        text-decoration: none;
        font-size: 0.95rem;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .contact-links a:hover { text-decoration: underline; }

    .btn-cv {
        display: inline-block;
        background: rgba(128, 128, 128, 0.15);
        color: inherit !important;
        padding: 8px 24px;
        border-radius: 6px;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 500;
        border: 1px solid rgba(128, 128, 128, 0.1);
        transition: all 0.25s ease;
    }
    .btn-cv:hover { 
        background: #4a90e2; 
        color: white !important;
        border-color: #4a90e2;
    }

    /* --- 状态公告栏 (适配多主题) --- */
    .status-banner {
        background: rgba(74, 144, 226, 0.08); /* 使用带有主题蓝倾向的低饱和透明背景 */
        border-radius: 8px;
        padding: 20px;
        margin-bottom: 40px;
        font-size: 0.95rem;
        color: inherit;
        border-left: 4px solid #4a90e2;
    }

    /* --- 模块标题 --- */
    .section-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: inherit;
        margin: 45px 0 20px 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .section-title::after {
        content: "";
        flex: 1;
        height: 1px;
        background: rgba(128, 128, 128, 0.15);
    }

    /* --- 简历条目布局 --- */
    .entry {
        margin-bottom: 28px;
        padding: 4px 0;
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
        color: inherit;
    }
    .entry-date {
        font-size: 0.85rem;
        color: inherit;
        opacity: 0.5;
        font-family: 'Courier New', Courier, monospace;
    }
    .entry-sub {
        font-weight: 600;
        color: inherit;
        opacity: 0.8;
        font-size: 0.95rem;
        margin-bottom: 8px;
    }
    .entry-details {
        font-size: 0.95rem;
        color: inherit;
        opacity: 0.75;
    }
    .entry-details ul {
        margin: 8px 0;
        padding-left: 18px;
    }
    .entry-details li {
        margin-bottom: 5px;
    }

    /* --- 导师照片墙 (扩展为 4 列以包含博士导师) --- */
    .advisor-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    .advisor-card {
        text-align: center;
    }
    .advisor-img {
        width: 100%;
        aspect-ratio: 3/4; /* 切换为标准的学者肖像比，更显专业 */
        object-fit: cover;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        border: 1px solid rgba(128, 128, 128, 0.1);
    }
    .advisor-card:hover .advisor-img {
        transform: translateY(-4px);
        box-shadow: 0 6px 16px rgba(74, 144, 226, 0.2);
    }
    .advisor-name {
        display: block;
        font-weight: 700;
        font-size: 0.9rem;
        margin-top: 12px;
        color: inherit;
    }
    .advisor-role {
        display: block;
        font-size: 0.78rem;
        color: inherit;
        opacity: 0.5;
        margin-top: 2px;
    }

    @media (max-width: 768px) {
        .advisor-grid { grid-template-columns: repeat(2, 1fr); gap: 15px; }
    }
    @media (max-width: 480px) {
        .entry-header { flex-direction: column; gap: 2px; }
        .advisor-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="about-container">

    <header class="profile-header">
        <h1>Pengyu Chen</h1>
        <div class="contact-links">
            <a href="mailto:pengyuc@vt.edu"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Email</a>
            <a href="https://github.com/Pengyu-gis" target="_blank"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> GitHub</a>
            <a href="https://scholar.google.com/citations?user=3Y9YVSIAAAAJ" target="_blank"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg> Scholar</a>
            <a href="https://www.linkedin.com/in/pengyu-chen-a07973181/" target="_blank"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn</a>
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
            Thesis: VLM4S: A Vision-Language Model Framework for Geographically and Environmentally Informed Soundscape Assessment<br>
            Advisor: <a href="https://scholar.google.com/citations?user=ul3VlbgAAAAJ" target="_blank" style="color:#4a90e2; text-decoration:none;">Dr. Sicheng Wang</a>
        </div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">Visiting Student</span>
            <span class="entry-date">2023 – 2024</span>
        </div>
        <div class="entry-sub">Wuhan University, China</div>
        <div class="entry-details">Advisor: <a href="https://only4john.github.io/" target="_blank" style="color:#4a90e2; text-decoration:none;">Prof. Teng Fei</a></div>
    </div>

    <div class="entry">
        <div class="entry-header">
            <span class="entry-main">B.S. in Geographic Information Science</span>
            <span class="entry-date">2020 – 2024</span>
        </div>
        <div class="entry-sub">Wuhan University of Technology, China</div>
            Thesis: <em>Transformer-based geographic scene description <br>
            Advisor: <a href="https://baike.baidu.com/item/%E5%B4%94%E5%B7%8D/7542643" target="_blank" style="color:#4a90e2; text-decoration:none;">Prof. Wei Cui</a>
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

</div>
