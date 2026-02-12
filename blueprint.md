# LunchGenie Blueprint

## Overview
LunchGenie is a single-page web application designed to solve the "what's for lunch?" dilemma. It provides users with random lunch menu recommendations based on selectable categories. The app features a modern, responsive design with a "spin" mechanic to make the decision process fun.

### Current Plan: Update Animal Classifier Logic
### Goal
Modify the "Pet Detector" to analyze the video feed for 3 seconds and then present a final result, rather than running continuously.

### Steps
1.  **Logic (JavaScript):**
    *   Update `initAI` in `main.js`.
    *   Implement a 3-second timer after the webcam starts.
    *   During the 3 seconds, show "Scanning..." or live predictions.
    *   After 3 seconds, stop the prediction loop and the webcam.
    *   Identify the category with the highest probability.
    *   Display the final result prominently.

## Project Documentation
### Features
*   **Random Recommendation Engine:** Selects a random lunch item from a curated list.
*   **Category Filtering:** Users can filter options by type (e.g., Healthy, Fast Food, Asian).
*   **Interactive UI:** "Spin" button with visual feedback.
*   **Responsive Layout:** Optimized for both mobile and desktop views.
*   **Web Components:** Utilizes custom elements for modular UI components like the result card.
*   **User Feedback:** Integrated Formspree review box.
*   **Animal Classifier:** AI-powered dog/cat/cow classifier using webcam input.
*   **Monetization:** Integrated Google AdSense for site monetization.
