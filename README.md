# Safwaan Mulla | Personal Portfolio

Personal portfolio website for Safwaan Mulla, an AI/ML student and builder exploring intelligent software, computer vision, generative AI, and systems that connect code to the real world.

## Live Website

**[safwaan-aiml.me](https://safwaan-aiml.me)**

## About

This portfolio presents Safwaan's selected projects, technical capabilities, experiments, education, and contact links. It is designed as a focused, editorial-style site for sharing practical work in AI/ML, software, and real-world systems.

## Website Sections

- **Selected Work** — Corelytics, LatentSpace, Visagenix, and Cognicare.
- **About** — Builder-focused biography, education timeline, current direction, and interests.
- **Capabilities** — AI/ML, software, and systems areas of practice.
- **Experiments** — Smaller explorations including local LLMs, embeddings, FAISS, graph clustering, computer vision, ESP32 robotics, and AI risk analysis.
- **Contact** — Phone, WhatsApp, email, GitHub, and LinkedIn links.

## Features

- Responsive desktop, tablet, and mobile layouts.
- Sticky header with desktop navigation and an accessible mobile menu.
- Smooth scrolling for internal navigation links.
- Active navigation state based on the visible section.
- Scroll-reveal transitions powered by `IntersectionObserver`.
- Reduced-motion support through `prefers-reduced-motion`.
- CSS-based project previews and restrained hover interactions.
- Inline SVG icons for contact and social links.
- Corelytics project card linked to its live application; the other projects remain non-linked case-study previews.
- Subtle grid, orbital, border, and texture details implemented in CSS.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

No frontend framework, JavaScript library, package manager, or build step is used by the website.

## Project Structure

```text
safwaan-portfolio/
├── assets/
│   └── logo.jpg
├── css/
│   └── style.css
├── js/
│   └── main.js
├── index.html
├── .gitignore
└── README.md
```

The local workspace also contains ignored development folders such as `.idea/` and `.venv/`; they are not part of the website source shown above.

## Running Locally

This is a static website with no build step or dependency installation required. Open `index.html` directly in a browser, or serve the repository root with any local static HTTP server and visit the resulting local address.

## Deployment

The portfolio is deployed through GitHub Pages from the repository's `master` branch. Updates pushed to the configured branch are published by GitHub Pages, and the live site is available at:

**[https://safwaan-aiml.me](https://safwaan-aiml.me)**

## Custom Domain

The current checkout does not contain a `CNAME` file, so the repository-side custom-domain configuration cannot be verified from the available files. The intended custom domain is [safwaan-aiml.me](https://safwaan-aiml.me).

## Updating the Website

After editing the source files, commit and push the changes to the configured deployment branch:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will deploy the pushed changes according to the repository's Pages configuration.

## Author

**Safwaan Mulla**

- B.Tech AI & ML Student
- NIMS University Jaipur

## Links

- [Live portfolio](https://safwaan-aiml.me)
- [GitHub repository](https://github.com/prince-Sf/safwaan-portfolio)
- [GitHub profile](https://github.com/prince-Sf)
- [LinkedIn](https://www.linkedin.com/in/safwaan-mulla-012a78371)

## License

No license has currently been specified for this repository.
