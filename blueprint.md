# LunchGenie Blueprint

## Overview
LunchGenie is a single-page web application designed to solve the "what's for lunch?" dilemma. It provides users with random lunch menu recommendations based on selectable categories. The app features a modern, responsive design with a "spin" mechanic to make the decision process fun.

## Current Plan: Add Animal Classifier
### Goal
Integrate a Teachable Machine image model to distinguish between dogs, cats, and cows using the user's webcam.

### Steps
1.  **Structure (HTML):**
    *   Add the required TensorFlow.js and Teachable Machine script libraries to `index.html`.
    *   Add a new `<section>` for the "Animal Classifier" after the review section.
    *   Add the "Start" button, webcam container, and label container.
2.  **Styling (CSS):**
    *   Style the new section to match the app's design (card style, centered).
    *   Style the webcam canvas and prediction labels.
3.  **Logic (JavaScript):**
    *   Integrate the Teachable Machine logic into `main.js`.
    *   Wire up the "Start" button to initialize the webcam and model.
    *   Display real-time predictions in the UI.

## Project Documentation
### Features
*   **Random Recommendation Engine:** Selects a random lunch item from a curated list.
*   **Category Filtering:** Users can filter options by type (e.g., Healthy, Fast Food, Asian).
*   **Interactive UI:** "Spin" button with visual feedback.
*   **Responsive Layout:** Optimized for both mobile and desktop views.
*   **Web Components:** Utilizes custom elements for modular UI components like the result card.
*   **User Feedback:** Integrated Formspree review box.
*   **Animal Classifier (New):** AI-powered dog/cat/cow classifier using webcam input.
