# IOCL Home Page in IIT Delhi Layout Style

Build an IOCL (Indian Oil Corporation Limited) home page that replicates the layout structure and design patterns of the IIT Delhi website, re-branded with IOCL's official identity.

## Reference: IIT Delhi Layout Captured

````carousel
![IIT Delhi Header & Hero Section](C:/Users/aryan/.gemini/antigravity-ide/brain/7eb41440-3a92-4b24-bf59-3636cae076b3/iitd_header_hero_1782115186376.png)
<!-- slide -->
![IIT Delhi News Section](C:/Users/aryan/.gemini/antigravity-ide/brain/7eb41440-3a92-4b24-bf59-3636cae076b3/iitd_mid_1_1782115201194.png)
<!-- slide -->
![IIT Delhi Announcements](C:/Users/aryan/.gemini/antigravity-ide/brain/7eb41440-3a92-4b24-bf59-3636cae076b3/iitd_mid_2_1782115210777.png)
<!-- slide -->
![IIT Delhi Statistics](C:/Users/aryan/.gemini/antigravity-ide/brain/7eb41440-3a92-4b24-bf59-3636cae076b3/iitd_mid_5_1782115262281.png)
<!-- slide -->
![IIT Delhi Footer](C:/Users/aryan/.gemini/antigravity-ide/brain/7eb41440-3a92-4b24-bf59-3636cae076b3/iitd_footer_1782115389045.png)
````

## Branding Mapping: IIT Delhi → IOCL

| Aspect | IIT Delhi | IOCL |
|--------|-----------|------|
| **Primary Color** | Crimson Red `#C21717` | Indian Oil Orange `#F37022` |
| **Dark/Secondary Color** | Dark Navy `#212331` | Indian Oil Blue `#02164F` |
| **Accent** | Gold accents | Saffron/Orange glow |
| **Logo** | IIT Delhi Crest | IndianOil Logo (Saffron circle + blue band) |
| **Tagline** | "An Institution of Eminence" | "The Energy of India" |
| **Hindi Name** | भारतीय प्रौद्योगिकी संस्थान दिल्ली | इंडियन ऑयल कॉर्पोरेशन लिमिटेड |

## Proposed Changes

### [NEW] [index.html](file:///c:/Users/aryan/Desktop/iocl%20training%20intern/index.html)

Main HTML file with the following sections matching IIT Delhi's layout:

1. **Top Utility Bar** — Blue (`#02164F`) background with white text
   - Left: Quick links (Careers, Tenders, Investor Relations, RTI, Vigilance, Pay Online)
   - Right: Social icons (Twitter, LinkedIn, Facebook, YouTube), Hindi toggle, Font resize, Accessibility

2. **Logo Banner (Header Middle)** — White background
   - Left: IndianOil Logo + "Indian Oil Corporation Limited" + "The Energy of India" + Hindi name
   - Right: Address with map pin (IndianOil Bhawan, New Delhi)

3. **Sticky Navigation Bar** — Orange (`#F37022`) gradient background with white text
   - Home icon, mega-menu dropdowns: Business, Products & Services, Sustainability, Media, About Us, Investors
   - Right-aligned search icon

4. **Hero Slider** — Full-width image carousel (generated images of refineries/fuel stations)
   - Overlay text: "Fuelling India's Growth", "Energy for Tomorrow"
   - 4 overlay navigation cards at bottom (like IITD's Research/Startups/News/Abu Dhabi cards):
     - Refinery Operations, Fuel Stations, R&D, International Operations

5. **Important Announcements** — Split grid
   - Left: Featured banner (Annual Report / CSR Report)
   - Right: Scrollable announcement list with icons

6. **Latest News + Upcoming Events** — Side-by-side columns
   - News cards with thumbnails, date badges, titles
   - Events list (conferences, exhibitions, stakeholder meets)

7. **Statistics Counter Section** — Animated counters
   - 34,000+ Employees, 100+ Years Legacy, 35,000+ Fuel Stations, ₹8.6L Cr Revenue

8. **Footer** — Dark blue (`#02164F`) background
   - Column 1: Logo, address, phone, email, social links
   - Column 2: Quick Links (Divisions, Refineries, Pipelines, R&D)
   - Column 3: Explore (CSR, Sustainability, Careers, Tenders, Contact)
   - Column 4: Stock ticker / ISO certifications widget
   - Bottom bar: Copyright, Credits, Developed by info

---

### [NEW] [styles.css](file:///c:/Users/aryan/Desktop/iocl%20training%20intern/styles.css)

Complete CSS with:
- IOCL color variables and design tokens
- Font imports (Inter/Roboto from Google Fonts, matching IITD's Titillium Web approach)
- Top bar, logo banner, sticky nav, hero slider, news grid, counter, footer styles
- Mega-menu dropdown styles (matching IITD's multi-column megamenu)
- Smooth animations and hover effects
- Full responsive design (media queries)

---

### [NEW] [script.js](file:///c:/Users/aryan/Desktop/iocl%20training%20intern/script.js)

JavaScript for:
- Hero image slider with auto-play and transitions
- Sticky navigation on scroll
- Animated statistics counters (count-up on scroll into view)
- Mobile hamburger menu toggle
- Mega-menu hover interactions
- Smooth scroll behavior
- Dark mode toggle (matching IITD's feature)

---

### Generated Images

Hero slider images and other visual assets will be generated using the `generate_image` tool for:
- Refinery/petrochemical plant panorama (hero slide 1)
- Fuel station network (hero slide 2)
- R&D laboratory (hero slide 3)

## Open Questions

> [!IMPORTANT]
> **Content Scope**: Should I include all the mega-menu sub-links with real IOCL division/subsidiary names, or use placeholder text for now?

> [!NOTE]
> The page will be a **static HTML/CSS/JS** site (no framework) that can be opened directly in a browser. All hero images will be AI-generated to create a working demo.

## Verification Plan

### Manual Verification
- Open `index.html` in browser and visually compare layout structure against IIT Delhi screenshots
- Verify responsive behavior at mobile/tablet/desktop breakpoints
- Confirm all animations (slider, counters, hover effects) work correctly
- Validate IOCL branding colors match official specifications
