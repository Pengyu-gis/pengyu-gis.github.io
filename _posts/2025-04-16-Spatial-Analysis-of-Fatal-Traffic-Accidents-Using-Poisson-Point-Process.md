---
layout: post
title: "Spatial Analysis of Fatal Traffic Accidents Using Poisson Point Process"
tags: [Point-process Geospatial-statistics Transportation Public-safety]
feature-img: "https://github.com/user-attachments/assets/02883512-0aba-44c2-9ce8-c95fe1cd7db3"
thumbnail: "https://github.com/user-attachments/assets/02883512-0aba-44c2-9ce8-c95fe1cd7db3"
---


*Collaborators: **Xiuchuan Liu** and **Xunan Yang**, Ph.D. students in Statistics at the University of South Carolina.*

**Paper Link:** [Spatial Model of Crash Fatalities by Examining Effects of Infrastructural Factors](https://www.researchgate.net/publication/398291272_Spatial_Model_of_Crash_Fatalities_by_Examining_Effects_of_Infrastructural_Factors_A_Case_Study_on_South_Carolina)

## 1. Dataset and Preprocessing

### (1) Infrastructure Data (SCDOT)
Data retrieved from the South Carolina Department of Transportation (SCDOT):
- **Road Network:** Shapefiles including highways, interstates, and local roads.
- **Traffic Volume:** Average Annual Daily Traffic (AADT).
- **Source:** [SCDOT GIS Mapping](https://info2.scdot.org/GISMapping/Pages/GIS.aspx)

<p align="center">
  <img src="https://github.com/user-attachments/assets/be8ec045-90d3-4951-91b9-30d7250328ac" alt="Different types of Roads" style="width:75%;">
</p>

### (2) Crash Data (SCDPS)
Data retrieved from the South Carolina Department of Public Safety (SCDPS):
- All traffic accidents.
- Fatal traffic accidents (subset).
- **Source:** [SCDPS GIS Hub](https://scdps-gis-and-mapping-scdps.hub.arcgis.com/search?collection=Dataset)

<p align="center">
  <img src="https://github.com/user-attachments/assets/4c829080-d252-4433-a8b5-975f92f72834" alt="Crash locations" style="width:75%;">
</p>

### (3) Terrain Data (USGS)
Digital Elevation Models (DEM) were used to derive slope information.
- **Source:** [USGS National Map Downloader](https://apps.nationalmap.gov/downloader/)

<p align="center">
  <img src="https://github.com/user-attachments/assets/762e78c7-0859-46ea-9a36-ac69e555740f" alt="DEM" style="width:75%;">
</p>

### (4) Deriving Slope and Curvature
**1. Slope:** Calculated using the ArcGIS Spatial Analyst toolset. ([Documentation](https://pro.arcgis.com/en/pro-app/latest/tool-reference/spatial-analyst/how-slope-works.htm))

**2. Curvature:**
Road curvature is quantified by calculating the **radius of the circumcircle** passing through **three consecutive points** along the road geometry. A smaller radius indicates a sharper turn, while a larger radius indicates a straighter segment.

<p align="center">
<img src="https://github.com/user-attachments/assets/c6575d1f-f867-4cc9-9c35-e4388bdd9e4f" alt="Curvature Diagram"  style="width:75%;">
</p>

Consider three sequential points on the road:
- $P_1 = (x_1, y_1)$  
- $P_2 = (x_2, y_2)$  
- $P_3 = (x_3, y_3)$
  
We calculate the radius $R$ of the circumcircle defined by these points.

**Step 1: Compute the Determinant $D$**
This value is required to locate the circumcenter:

$$
D = 2 \cdot (x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2))
$$

**Step 2: Compute Circumcenter Coordinates $(x_c, y_c)$**

$$
x_c = \frac{(x_1^2 + y_1^2)(y_2 - y_3) + (x_2^2 + y_2^2)(y_3 - y_1) + (x_3^2 + y_3^2)(y_1 - y_2)}{D}
$$

$$
y_c = \frac{(x_1^2 + y_1^2)(x_3 - x_2) + (x_2^2 + y_2^2)(x_1 - x_3) + (x_3^2 + y_3^2)(x_2 - x_1)}{D}
$$

**Step 3: Compute the Radius $R$**
The radius is the Euclidean distance from the center $(x_c, y_c)$ to any of the three points (e.g., $P_1$):

$$
R = \sqrt{(x_1 - x_c)^2 + (y_1 - y_c)^2}
$$

**Step 4: Moving Window Implementation**
To compute curvature along the entire road network, we slide a 3-point window along the line vertices, calculate $R$ for each triplet, and assign the value to the middle point.

## 2. Modeling Framework: Poisson Point Process

We model the occurrence of fatal traffic accidents as a **spatial Poisson point process (PPP)**. This approach treats fatalities as realizations of a stochastic process occurring over a continuous spatial domain (the South Carolina road network).

The **log-likelihood** of a nonhomogeneous Poisson point process is given by:

$$
\log L(\lambda) = \sum_{i=1}^n \log \lambda(x_i) - \int_W \lambda(x) \, dx
$$

Where:
- $\lambda(x)$: The **intensity function**, representing the expected number of fatal events per unit area (or road length) at location $x$.
- $x_i$: Coordinates of observed fatal accidents.
- $W$: The spatial domain (the road network).

Since the integral $\int_W \lambda(x) dx$ is analytically intractable for complex road networks, we approximate it using **Monte Carlo integration** over a set of background (non-fatal) points. This technique is known as a numerical quadrature scheme:

$$
\int_W \lambda(x) dx \approx \sum_{j=1}^m w_j \cdot \lambda(x_j)
$$

Where:
- $x_j$: Sampled background locations.
- $w_j$: Quadrature weights representing the road length each point accounts for.
- $m$: Total number of background points.

This transformation allows us to implement the model using **weighted Poisson regression**.

## 3. The Role of Weights

In this framework, **weights** are used to approximate the integral term of the likelihood function using a discrete set of background points.

- **For Fatalities (Events):**
  $$w_i = 1$$
  *(Note: This indicates an observed event presence).*

- **For Background Points (Pseudo-Absences):**
  $$w_j = \frac{A}{m}$$
  Where:
  - $A$: Total length of roads (in 100-meter units).
  - $m$: Number of background points sampled.

This weighting scheme ensures that the background points collectively approximate the spatial opportunity for a crash to occur. It is **not** a survey sampling weight, but rather a **numerical approximation of integration**.

Our background points are sampled from **non-fatal crash locations**. By using all crashes as the background domain, the model estimates the **fatality intensity conditional on crash occurrence**.

## 4. Correlation and Dependence

We evaluated potential multicollinearity among the continuous predictors: **Slope**, **Curvature**, and **AADT** (Average Annual Daily Traffic).

### Pearson Correlation Matrix

|              | Slope    | Curvature | AADT     |
|--------------|----------|-----------|----------|
| **Slope** | 1.000000 | -0.107572 | -0.166621|
| **Curvature**| -0.107572| 1.000000  | 0.044780 |
| **AADT** | -0.166621| 0.044780  | 1.000000 |

All pairwise correlations are weak ($|r| < 0.2$), indicating negligible linear dependence between variables.

### Variance Inflation Factor (VIF)

| Variable   | VIF      |
|------------|----------|
| const      | 8.647327 |
| Slope      | 1.042054 |
| Curvature  | 1.013978 |
| Night      | 1.009383 |
| Surface    | 1.003594 |
| Workzone   | 1.004390 |
| AADT       | 1.037288 |

All VIF values are approximately 1.0, well below the standard threshold of 5. This confirms that **multicollinearity is not present**.

## 5. Covariate Diagnostics: Sliding Window Regression

To test if the effects of continuous covariates are spatially or structurally stationary, we utilized **sliding window Poisson regression**.

**Methodology:**
1.  **Sort:** The dataset is sorted by the covariate of interest (e.g., increasing AADT).
2.  **Window:** A fixed-size window (e.g., 200,000 points) slides along the sorted data with a step size of 5,000.
3.  **Fit:** A Poisson regression is fitted within each window:
    $$\log(\lambda_i) = \beta_0 + \beta_1 x_{i1} + \dots + \beta_k x_{ik}$$
4.  **Extract & Smooth:** The coefficient ($\hat{\beta}$) for the variable of interest is extracted and smoothed using LOESS with a 95% confidence ribbon.

### AADT: Effect Weakens at Higher Volumes
<p align="center">
  <img src="https://github.com/user-attachments/assets/b51078b7-280f-44b8-b124-fe228ddb4cd5" alt="AADT Sliding Window" width="700"/>
</p>

> The AADT coefficient is consistently negative, implying that roads with higher traffic volume have a **lower risk of fatal crashes** (likely due to congestion reducing speeds). However, this **protective effect weakens** as traffic volume increases.

### Curvature: Consistent Risk Factor
<p align="center">
  <img src="https://github.com/user-attachments/assets/bce62c27-3d89-45f1-a579-92d157a4a5e4" alt="Curvature Sliding Window" width="700"/>
</p>

> The curvature coefficient remains negative (recall that lower Radius = sharper turn). This suggests that **sharper curves are consistently associated with higher fatality risk** across the dataset.

### Slope: Risk Increases with Gradient
<p align="center">
  <img src="https://github.com/user-attachments/assets/5a79f1f6-6878-47f5-b5e0-84bbfece715d" alt="Slope Sliding Window" width="700"/>
</p>

> The effect of slope transitions from negative at low gradients to **increasingly positive on steeper terrain**, indicating elevated fatality risk on high-gradient roads.

## 6. Spatial Distribution of Estimated Intensity $\hat{\lambda}(x)$

<p align="center">
  <img src="https://github.com/user-attachments/assets/08d28ed3-d2a4-411f-b625-7abe51318bc2" alt="Lambda Intensity All Roads" width="700"/>
</p>

> Brighter values indicate areas of high predicted fatality intensity. These correspond to major intersections, dense urban corridors, and high-risk geometries (steep/curved) with lower traffic volumes.

## 7. GLM Results: All Roads

| Variable      | Coefficient | Std. Error | z-value | p-value |
|---------------|-------------|------------|---------|---------|
| Intercept     | -0.7368     | 0.046      | -15.88  | <0.001  |
| Slope         | 0.0192      | 0.008      | 2.43    | 0.015   |
| Curvature     | -1.16e-05   | 8.38e-06   | -1.38   | 0.167   |
| Night         | 0.5429      | 0.032      | 17.12   | <0.001  |
| Surface       | -0.0553     | 0.043      | -1.29   | 0.198   |
| Workzone      | -0.1474     | 0.131      | -1.12   | 0.262   |
| AADT          | -1.51e-05   | 1.43e-06   | -10.54  | <0.001  |

- **Log-Likelihood**: −6522.0
- **Deviance**: 4950.0
- **Pearson Chi-square**: 3830.0
- **Pseudo R² (Cragg & Uhler’s)**: 0.0012

## 8. Comparative Modeling: Highways vs. Local Roads

### Poisson GLM Summary: Highways and Interstates

| Variable   | Coef       | Std. Err | z-value | p-value |
|------------|------------|----------|---------|---------|
| Intercept  | -0.5305    | 0.059    | -9.047  | <0.001  |
| Slope      | 0.0162     | 0.009    | 1.728   | 0.084   |
| Curvature  | -6.14e-06  | 1.06e-05 | -0.582  | 0.561   |
| Night      | 0.4358     | 0.038    | 11.610  | <0.001  |
| Surface    | -0.0401    | 0.051    | -0.792  | 0.428   |
| Workzone   | -0.1402    | 0.139    | -1.009  | 0.313   |
| AADT       | -9.67e-06  | 1.42e-06 | -6.810  | <0.001  |

### Poisson GLM Summary: Local Roads

| Variable   | Coef       | Std. Err | z-value | p-value |
|------------|------------|----------|---------|---------|
| Intercept  | -0.9337    | 0.079    | -11.825 | <0.001  |
| Slope      | 0.0181     | 0.015    | 1.206   | 0.228   |
| Curvature  | -4.20e-05  | 1.44e-05 | -2.920  | 0.003   |
| Night      | 0.5859     | 0.059    | 9.930   | <0.001  |
| Surface    | -0.0878    | 0.081    | -1.088  | 0.277   |
| Workzone   | 0.2232     | 0.380    | 0.588   | 0.557   |
| AADT       | -4.31e-05  | 4.59e-06 | -9.394  | <0.001  |

### Spatial Distribution of $\hat{\lambda}(x)$ by Road Type

<p align="center">
  <img src="https://github.com/user-attachments/assets/6bcf1167-7f57-4b0c-8290-1a8f921bf2fd" alt="Lambda Intensity By Road Type" width="700"/>
</p>

> The intensity of fatal crashes $\hat{\lambda}(x)$ is highest on **highway junctions and corridors**. In contrast, local roads exhibit **spatially dispersed intensity**, often centered around urbanized clusters and curved segments.

### Sliding Window Analysis: AADT Coefficient Comparison

<p align="center">
  <img src="https://github.com/user-attachments/assets/eca0b406-cb1a-4716-ba60-0fac8fd88b08" alt="AADT Coefficients by Road Type" width="700"/>
</p>

> This contrast suggests that **AADT plays a more substantial role in fatal crash suppression on local roads**. The negative association is stronger on local roads, where increased traffic volume likely forces lower speeds and higher driver vigilance compared to highways.
