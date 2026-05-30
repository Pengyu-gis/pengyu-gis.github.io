---
layout: page
title: Teaching
permalink: /teach/
tags: [Page]
---

<style>
    /* --- 核心容器控制 --- */
    .teaching-container {
        max-width: 850px;
        margin: 0 auto;
        padding: 0 15px;
        color: inherit; /* 继承系统文字颜色，完美适配黑夜模式 */
        line-height: 1.6;
    }

    /* Feynman Quote Style */
    .intro-quote {
        border-left: 4px solid #4a90e2;
        background: rgba(128, 128, 128, 0.05);
        padding: 18px 20px;
        font-style: italic;
        color: inherit;
        opacity: 0.85;
        margin-bottom: 40px;
        border-radius: 0 6px 6px 0;
    }

    /* Course Card Styling */
    .course-card {
        background: rgba(128, 128, 128, 0.02);
        border: 1px solid rgba(128, 128, 128, 0.15);
        border-left: 5px solid #4a90e2; /* 改用统一的活跃蓝作为左侧 Accent */
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 45px;
    }
    .course-title {
        margin-top: 0;
        margin-bottom: 6px;
        font-size: 1.4rem;
        font-weight: 700;
        color: inherit;
    }
    .course-meta {
        font-style: italic;
        color: inherit;
        opacity: 0.6;
        margin-bottom: 22px;
        display: block;
        font-size: 0.9rem;
    }

    /* PDF Link Buttons */
    .material-list {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }
    .material-list li {
        margin-bottom: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        padding: 6px 0;
    }
    .material-list li:not(:last-child) {
        border-bottom: 1px solid rgba(128, 128, 128, 0.08);
    }
    .material-name {
        font-weight: 600;
        color: inherit;
    }
    .btn-pdf {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        background-color: rgba(128, 128, 128, 0.1);
        color: inherit !important;
        padding: 5px 14px;
        border-radius: 20px;
        text-decoration: none !important;
        font-size: 0.82rem;
        font-weight: 500;
        transition: all 0.2s ease;
        border: 1px solid rgba(128, 128, 128, 0.05);
    }
    .btn-pdf:hover {
        background-color: #4a90e2;
        color: white !important;
        border-color: #4a90e2;
    }

    /* Evaluation Section Styles */
    .eval-section {
        margin-top: 50px;
    }
    .eval-section h2 {
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 25px;
    }
    .eval-section h3 {
        font-size: 1.15rem;
        font-weight: 600;
        margin-top: 35px;
        margin-bottom: 18px;
        opacity: 0.9;
    }
    
    .score-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 20px;
        margin-bottom: 35px;
    }
    .score-box {
        background: rgba(128, 128, 128, 0.03);
        color: inherit;
        padding: 22px;
        border-radius: 8px;
        text-align: center;
        font-size: 0.95rem;
        border: 1px solid rgba(128, 128, 128, 0.15);
    }
    .score-box.highlight {
        background: rgba(74, 144, 226, 0.08); /* 突出最新学期的满分绩点 */
        border-color: rgba(74, 144, 226, 0.3);
    }
    .score-number {
        font-size: 2rem;
        font-weight: 700;
        display: block;
        margin-top: 6px;
        color: #4a90e2;
    }

    /* Student Comment Bubbles */
    .comment-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 20px;
        margin-bottom: 25px;
    }
    .student-comment {
        background: rgba(128, 128, 128, 0.02);
        padding: 20px;
        border-radius: 12px;
        font-style: italic;
        color: inherit;
        opacity: 0.85;
        border: 1px solid rgba(128, 128, 128, 0.12);
        position: relative;
    }
    .student-comment::before {
        content: "“";
        font-size: 3rem;
        color: rgba(128, 128, 128, 0.15);
        position: absolute;
        top: -10px;
        left: 12px;
        z-index: 0;
        font-family: serif;
    }
    .student-comment.constructive {
        background: rgba(239, 108, 0, 0.03); /* 柔和的半透明浅橘，黑夜下不突兀 */
        border: 1px dashed rgba(239, 108, 0, 0.25);
    }
    .comment-text {
        position: relative;
        z-index: 1;
        display: block;
    }

    @media (max-width: 600px) {
        .material-list li { flex-direction: column; align-items: flex-start; gap: 6px; }
        .score-container { grid-template-columns: 1fr; }
        .comment-grid { grid-template-columns: 1fr; }
    }
</style>

<div class="teaching-container">

    <blockquote class="intro-quote">
        "If you want to master something, teach it." — Richard Feynman
    </blockquote>

    <div class="course-card">
        <h2 class="course-title">GEOG 201: Landform Geography</h2>
        <span class="course-meta">Role: Lab Instructor | University of South Carolina | Fall 2024, Spring 2025, & Spring 2026</span>

        <h4 style="margin-bottom: 15px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            Lab Materials & Slides
        </h4>
        <ul class="material-list">
            <li>
                <span class="material-name">Lab 2: Maps and Mapping</span>
                <a href="/assets/data/Maps_and_Mapping.pdf" class="btn-pdf" target="_blank">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    PDF Slides
                </a>
            </li>
            <li>
                <span class="material-name">Lab 3: Minerals and Rocks</span>
                <a href="/assets/data/GEOG201_2024_Rocks.pdf" class="btn-pdf" target="_blank">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    PDF Slides
                </a>
            </li>
            <li>
                <span class="material-name">Lab 4: Soils and Soil Mapping</span>
                <a href="/assets/data/Soils_and_Soil_Mapping.pdf" class="btn-pdf" target="_blank">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    PDF Slides
                </a>
            </li>
            <li>
                <span class="material-name">Lab 6: Surface Hydrology</span>
                <a href="/assets/data/Surface_Hydrology_and_Watershed_Processes.pdf" class="btn-pdf" target="_blank">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    PDF Slides
                </a>
            </li>
            <li>
                <span class="material-name">Lab 7: Fluvial Processes</span>
                <a href="/assets/data/Fluvial_Processes_and_Landforms.pdf" class="btn-pdf" target="_blank">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    PDF Slides
                </a>
            </li>
            <li style="margin-top: 15px; padding-top: 15px;">
                <span class="material-name" style="display: inline-flex; align-items: center; gap: 6px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    Review Session
                </span>
                <a href="/assets/data/Review_GEOG201.pdf" class="btn-pdf" target="_blank">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                    Review Doc
                </a>
            </li>
        </ul>
    </div>


    <div class="eval-section">
        <h2>Anonymous Evaluations & Feedback</h2>
        
        <div class="score-container">
            <div class="score-box highlight">
                Spring 2026 Overall Instructor Score:
                <span class="score-number">5.00 / 5.0</span>
            </div>
            <div class="score-box">
                Fall 2024 Overall Instructor Score:
                <span class="score-number">4.44 / 5.0</span>
            </div>
        </div>

        <h3>Student Feedback (Spring 2026)</h3>
        <div class="comment-grid">
            <div class="student-comment">
                <span class="comment-text">"He was the best. He always helped us when we needed it, made the labs engaging and we learned a lot."</span>
            </div>
            <div class="student-comment">
                <span class="comment-text">"He was very kind and it was easy to ask him questions regarding the lab. He would explain the labs very well and I understood them."</span>
            </div>
            <div class="student-comment">
                <span class="comment-text">"The combination of lectures and labs help a lot with being able to understand real world applications of what we learned in class."</span>
            </div>
        </div>

        <h3>Student Feedback (Fall 2024)</h3>
        <div class="comment-grid">
            <div class="student-comment">
                <span class="comment-text">"Mr. Chen was a great TA! He helped me understand the material better. I will miss him."</span>
            </div>
            <div class="student-comment">
                <span class="comment-text">"I really enjoyed the labs; he made it very interesting."</span>
            </div>
            <div class="student-comment constructive">
                <span class="comment-text">"Sometimes when we would ask questions, it would be difficult to get an answer that we could understand to grasp the material. But definitely knowledgeable on the subject!"</span>
            </div>
        </div>
    </div>

    <div style="text-align: center; margin-top: 60px; margin-bottom: 40px; border-top: 1px dashed rgba(128, 128, 128, 0.2); padding-top: 30px;">
        <p style="font-size: 0.9rem; color: inherit; opacity: 0.6; font-style: italic; margin-bottom: 15px;">
            How the semester feels sometimes:
        </p>
        <img src="/assets/img/pexels/teachermemes.jpg" 
             alt="Teaching Meme" 
             style="max-width: 500px; width: 100%; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.15); border: 1px solid rgba(128, 128, 128, 0.15);">      
        <p style="font-size: 0.8rem; color: inherit; opacity: 0.4; margin-top: 8px;">(But... I love teaching. For real!)</p>
    </div>
</div>
