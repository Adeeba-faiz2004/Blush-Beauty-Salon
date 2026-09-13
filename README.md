# Blush Beauty by Sajida

A responsive beauty salon website designed to present salon services, bridal offerings, visual work, and appointment booking through a clean, elegant interface.

## Live Demo

🌐 **[View Live Website](https://adeeba-faiz2004.github.io/Blush-Beauty-Salon/)**

💻 **[View Source Code](https://github.com/Adeeba-faiz2004/Blush-Beauty-Salon)**

## Preview

![Blush Beauty Website Preview](preview.png)

## Introduction

**Blush Beauty by Sajida** is a responsive front-end website created for a beauty and bridal salon based in Sargodha.

The website focuses on:

* Clear presentation of beauty and bridal services
* A visually consistent and responsive user interface
* Easy navigation across different sections
* Gallery-based presentation of salon work
* Simple appointment requests through WhatsApp

The project was developed using HTML, CSS, JavaScript, and Tailwind CSS configuration, with a focus on responsive design, client-side interactivity, and user experience.

## Key Features

* Responsive layout for desktop, tablet, and mobile screens
* Sticky navigation with responsive mobile menu
* Hero section with appointment and bridal-booking actions
* About section introducing the salon
* Structured service cards for beauty and bridal services
* Bridal campaign section with visual content
* Responsive image gallery
* Client testimonials section
* Appointment booking form
* WhatsApp integration for sending booking details
* Smooth scrolling between page sections
* Scroll-triggered animations using the Intersection Observer API
* Custom typography using Google Fonts
* Mobile-friendly spacing, layouts, and navigation behavior

## Technology Stack

| Technology                | Purpose                                                                 |
| ------------------------- | ----------------------------------------------------------------------- |
| HTML5                     | Page structure and semantic content                                     |
| CSS3                      | Custom styling, layouts, responsiveness, and animations                 |
| JavaScript                | Menu interaction, form handling, smooth scrolling, and dynamic behavior |
| Tailwind CSS              | Utility-based styling and custom design configuration                   |
| Google Fonts              | Custom typography and visual identity                                   |
| Intersection Observer API | Scroll-triggered section animations                                     |
| WhatsApp Link Integration | Sending appointment details directly to WhatsApp                        |
| GitHub Pages              | Website deployment                                                      |

## Integrations

### WhatsApp Appointment Integration

The appointment form collects the visitor's basic information, including:

* Name
* Phone number
* Selected service
* Preferred date
* Additional message

After submission, JavaScript creates a formatted WhatsApp message and opens WhatsApp with the booking details.

```text
Visitor selects a service
        ↓
Completes appointment form
        ↓
JavaScript formats booking details
        ↓
WhatsApp opens with the message
        ↓
Salon handles the appointment request
```

This is a **client-side booking request flow**. The project does not currently use a backend database or an online appointment-management system.

## Project Structure

```text
Blush-Beauty-Salon/
│
├── index.html
├── style.css
├── script.js
├── tailwind.config.js
└── .gitignore
```

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Adeeba-faiz2004/Blush-Beauty-Salon.git
   ```

2. Open the project folder:

   ```bash
   cd Blush-Beauty-Salon
   ```

3. Open `index.html` in a browser.

For development, the project can also be opened using **VS Code Live Server**.

## Implementation Highlights

* Used CSS Flexbox, Grid, responsive media queries, and custom styling for different screen sizes.
* Implemented a mobile navigation menu using JavaScript.
* Added smooth scrolling for internal navigation links.
* Used the Intersection Observer API to reveal selected sections during scrolling.
* Added client-side form handling for appointment requests.
* Connected the booking form with WhatsApp using a generated message URL.
* Organized the website into reusable visual sections such as services, bridal content, gallery, testimonials, and contact information.

## Future Improvements

* Backend-based appointment management
* Database storage for booking requests
* Appointment availability tracking
* Admin dashboard for salon management
* Improved form validation and confirmation messages
* Accessibility and performance improvements

## Author

**Adeeba Faiz**

Computer Science Undergraduate
University of Sargodha

[GitHub](https://github.com/Adeeba-faiz2004) · [LinkedIn](https://www.linkedin.com/in/adeebafaiz2004/)
