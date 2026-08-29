---
layout: post
title: "Resurrecting History: GAN-Enhanced Rooftop Detection in 1979 Aerial Imagery"
tags: [Deep-Learning, Computer-Vision, Remote-Sensing, GAN]
feature-img: "assets/img/test_results.png"
thumbnail: "assets/img/test_results.png"
---

<style>
    /* Make the video responsive (16:9 ratio) */
    .video-container {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        height: 0;
        overflow: hidden;
        max-width: 100%;
        background: #000;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    /* Update Box */
    .update-box {
        background-color: #e8f5e9;
        border-left: 5px solid #4caf50;
        padding: 15px;
        margin-bottom: 30px;
        border-radius: 4px;
        font-family: sans-serif;
    }

    /* Link Buttons */
    .project-links {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 40px;
        justify-content: center;
    }
    .link-btn {
        background: #f8f9fa;
        border: 1px solid #ddd;
        padding: 8px 16px;
        border-radius: 20px;
        text-decoration: none !important;
        font-size: 0.9rem;
        color: #333 !important;
        transition: all 0.2s;
        display: inline-flex;
        align-items: center;
    }
    .link-btn:hover {
        background: #4a90e2;
        color: white !important;
        border-color: #4a90e2;
        transform: translateY(-2px);
    }
    .link-btn i { margin-right: 5px; }

    /* Images */
    figure {
        margin: 30px 0;
        text-align: center;
    }
    figcaption {
        color: #666;
        font-style: italic;
        font-size: 0.9rem;
        margin-top: 8px;
    }
    img.content-img {
        max-width: 100%;
        height: auto; /* Ensures aspect ratio is maintained */
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
</style>

<div class="update-box">
    <strong>🚀 PUBLISHED:</strong> This paper, "A GAN-enhanced deep learning framework for rooftop detection from historical aerial imagery," was published on July 20, 2025.
</div>

<div class="project-links">
    <a href="https://www.tandfonline.com/doi/full/10.1080/01431161.2025.2534994" class="link-btn" target="_blank">📄 Read Paper</a>
    <a href="https://github.com/Pengyu-gis/Historical-Aerial-Photos" class="link-btn" target="_blank">💻 View Code (GitHub)</a>
</div>

### 1. Introduction: Seeing the Past Clearly

Cities are constantly changing, and often the only record of our urban history is preserved in black-and-white, blurry aerial photographs. Precisely identifying rooftops from these historical images is crucial for analyzing the long-term evolution of urban development and human settlement patterns.

However, extracting data from these archives is difficult. Historical analog images suffer from limited spatial resolution, a complete lack of color information, and defects like overexposure.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/2238e5dd-bba7-4d3e-840d-6cb5e31ce64d" alt="Blurriness and Overexposure Examples" />
    <figcaption>(a) Blurriness and low resolution; (b) Overexposure in historical imagery.</figcaption>
</figure>

To address this, we propose a two-stage image enhancement pipeline based on **Generative Adversarial Networks (GAN)**. We "colorize" the city and sharpen the details before using modern object detection models to identify rooftops one by one.

### 2. Study Area and Data

Our study focuses on **Charleston, South Carolina**, a historic port city founded in 1670. The city retains a large number of historic buildings (Colonial, Georgian, Victorian), making it an ideal case study for urban change.

We utilized eight black-and-white aerial images captured by the USDA in **1979**, digitized and georeferenced by the University of South Carolina library.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/289a1f51-1925-43d5-8a07-bc9fa97289ba" alt="Study Area Map" />
    <figcaption>The study area covering Charleston, SC, overlaid with the 1979 aerial imagery mosaic.</figcaption>
</figure>

### 3. Methodology: A GAN-Enhanced Pipeline

We constructed a workflow that combines image enhancement with deep learning object detection. The process involves three main steps:
1.  **Colorization** (DeOldify)
2.  **Super-Resolution** (Real-ESRGAN)
3.  **Object Detection** (YOLOv11, Faster R-CNN, DETR)

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/a5de708a-9132-47f2-afc8-164a240d96b6" alt="Technical Workflow" />
    <figcaption>The overall framework: From raw B&W input -> Colorization -> Super-Resolution -> Detection.</figcaption>
</figure>

#### 3.1 Image Enhancement (The "Magic")

**Colorization:** We used **DeOldify**, a GAN-based method that combines a U-Net generator with a ResNet-34 backbone. It restores semantic color (e.g., green trees vs. gray roofs), which is critical for modern detection models pretrained on colorful datasets.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/4d38a483-2cb7-4133-82a9-c79fa48881bc" alt="GAN Architecture" />
    <figcaption>The GAN architecture used for image enhancement (Generator and Discriminator).</figcaption>
</figure>

**Super-Resolution:** To fix the blurriness, we applied **Real-ESRGAN**. This model generates sharper edges and richer textures, making the outline of small buildings distinct enough for detection.

#### 3.2 Detection Model Training

We trained models like **YOLOv11n** using the enhanced images. The architecture uses CSPNet for feature extraction and a PAN neck for multi-scale fusion.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/b2555c16-1509-4bfd-960d-fb2c50f9b19a" alt="YOLO Architecture" />
    <figcaption>The YOLOv11 detection pipeline: Input images + Box Labels -> Training -> Output Predictions.</figcaption>
</figure>

### 4. Experimental Results

#### 4.1 Visual Enhancement
The enhancement results were striking. The addition of color helps distinguish buildings from the surrounding vegetation, while super-resolution restores the structural edges of the rooftops.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/94d20e0c-de26-4cf5-8fc9-164874d85f45" alt="Colorization Results" />
    <figcaption>Comparison: (a) Original Black-and-white images vs (b) GAN-Colorized images.</figcaption>
</figure>

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/3a7bc133-593e-4237-afec-756033adaa68" alt="Large Area Mosaic" />
    <figcaption>A large-scale view of the colorized Charleston mosaic.</figcaption>
</figure>

#### 4.2 The Impact of Super-Resolution
When zooming in, the difference becomes even more apparent. Real-ESRGAN effectively removes noise and sharpens the building boundaries.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/6c0161c1-dc3c-4a68-9a31-f1cc1a0c4ea1" alt="Super Resolution Comparison" />
    <figcaption>Top: Original vs Upscaled B&W. Bottom: Original vs Upscaled Color. Note the sharpness of the roof edges in the upscaled versions.</figcaption>
</figure>

#### 4.3 Quantitative Performance
We compared four training scenarios:
1.  B&W Original
2.  Colored Original
3.  B&W Upscaled
4.  **Colored Upscaled (Ours)**

The **Colored + Upscaled** approach yielded the best performance. **YOLOv11n achieved a mean Average Precision (mAP) of over 85%**, which is a ~40% improvement over the raw B&W images.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/77842118-61db-420e-ba23-fdae8115b3d6" alt="Training Metrics Charts" />
    <figcaption>Training curves showing Loss, Precision, Recall, and mAP. The Orange line (Colored) consistently outperforms the Blue line (B&W).</figcaption>
</figure>

### 5. Discussion & Comparisons

We also benchmarked different enhancement models. **Real-ESRGAN** outperformed competitors like SwinIR and BSRGAN in maintaining realistic textures without introducing artifacts.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/8f32ed21-0348-4479-b189-b14d5cbd3aa1" alt="Comparison of SR Models" />
    <figcaption>Visual comparison of different Super-Resolution models (BSRGAN vs SwinIR vs Real-ESRGAN).</figcaption>
</figure>

Interestingly, we tested "Zero-Shot" large segmentation models like **SAM (Segment Anything Model)**. They performed poorly on this historical data, often missing buildings or hallucinating shapes due to the domain gap between modern training data and 1979 aerial photos.

<figure>
    <img class="content-img" src="https://github.com/user-attachments/assets/e6be3c13-b66d-49fc-bb01-fba7a1866ff2" alt="SAM Failure Cases" />
    <figcaption>Failure cases using the Segment Anything Model (SAM) with different text prompts.</figcaption>
</figure>

### 6. Conclusion
This framework bridges the gap between archival imagery and modern AI. By restoring the visual quality of 1979 aerial photos, we unlocked the ability to automatically map historical urban structures with high precision.

---
*Editing & Layouts: Pengyu CHEN*
