# LunchGenie Blueprint

## Overview
LunchGenie is a single-page web application designed to solve the "what's for lunch?" dilemma. It provides users with random lunch menu recommendations based on selectable categories. The app features a modern, responsive design with a "spin" mechanic to make the decision process fun.

## Current Plan: Add Review Box
### Goal
Integrate a user review/feedback form using Formspree to collect user thoughts on LunchGenie.

### Steps
1.  **Form Implementation (HTML):**
    *   Add a new `<section>` for user reviews before the footer in `index.html`.
    *   Implement the Formspree form with email and message fields as provided.
2.  **Styling (CSS):**
    *   Style the review section to match the "LunchGenie" aesthetic (warm colors, rounded corners, clean typography).
    *   Ensure the form is responsive and visually integrated with the existing layout.
3.  **Verification:**
    *   Confirm the form is correctly linked to the Formspree endpoint.
    *   Ensure the layout remains clean and functional.

## Project Documentation
### Features
*   **Random Recommendation Engine:** Selects a random lunch item from a curated list.
*   **Category Filtering:** Users can filter options by type (e.g., Healthy, Fast Food, Asian).
*   **Interactive UI:** "Spin" button with visual feedback.
*   **Responsive Layout:** Optimized for both mobile and desktop views.
*   **Web Components:** Utilizes custom elements for modular UI components like the result card.
*   **User Feedback (New):** Integrated Formspree review box for user feedback.
