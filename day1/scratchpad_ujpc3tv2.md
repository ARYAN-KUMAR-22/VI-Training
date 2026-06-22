# Tasks:
- [x] Navigate to https://home.iitd.ac.in/
- [x] Wait for page load, handle popups/preloaders/tours
- [x] Take screenshot of the hero/header section
- [x] Scroll and capture screenshots of subsequent sections:
  - [x] Navigation / Header
  - [x] Hero slider
  - [x] News/Announcements
  - [x] Statistics/Counter
  - [x] Events
  - [x] Footer
- [x] Document details of each section (layout, colors, structure, positioning)
- [x] Write final summary

# IIT Delhi Home Page Layout Findings

## 1. Colors & Theme
- **Primary Color:** Crimson Red (`rgb(194, 23, 23)` / `#C21717`) - Used in top header menu text/icons, main navigation background, highlights, active dropdowns, and button fills.
- **Secondary/Dark Theme Background:** Slate Blue/Dark Navy Charcoal (`rgb(33, 35, 49)` / `#212331`) - Used in footer, news section headings, quick navigation blocks, FAQs accordion headers, and text theme classes.
- **Backgrounds:** White (`#FFFFFF`) for primary content blocks, very light grey/beige for alternating page sections.

## 2. Header & Top Bar Layout
- **Top Utility Bar:** Deep red background. Text is white.
  - Left-aligned links: Jobs, Calendar, Tenders, Payment Gateway, Recruiters/Careers, IGES, ICC, GIVE. Each has a small white icon.
  - Right-aligned: Social icons (Twitter/X, LinkedIn, Facebook), Language (हिन्दी / English), accessibility font sizing buttons (`-`, `+`), Accessibility settings cog, and IITD Email webmail link.
- **Logo Banner (Header Middle):** White background.
  - Left: IITD official emblem (crest), alongside text "Indian Institute of Technology Delhi" / "An Institution of Eminence".
  - Middle: Diamond Jubilee celebratory logo (collaboration/anniversary emblem).
  - Right: Address card with a location pin icon, "Indian Institute of Technology Delhi, Hauz Khas, New Delhi-110016, India".

## 3. Navigation Menu Structure
- **Positioning:** Fixed/sticky below the Logo Banner.
- **Styling:** Crimson Red (`#C21717`) background. Font is white.
- **Links:** 
  - Home icon
  - Dropdown options: Academics, Admissions, For Students, For Faculty and Staff, Research, Alumni, Resources
  - Direct links: Administration
  - Right-aligned: Search icon (expands standard search field).

## 4. Hero Slider Section
- Full-width image carousel slider with dynamic transition animations.
- Overlaid text in large white sans-serif font (e.g. "Excellence Through Research").
- **Overlay Navigation Blocks:** Bottom overlay consists of 4 distinct equal-width grid cards (Research, Startups, News, IITD Abu Dhabi) which alternate between Dark Navy Charcoal (`#212331`) and Grey background, providing interactive links.

## 5. News / Announcements Section
- Titled **"Important Announcements"**:
  - Split grid container: Left side shows a large visual banner link (e.g., "Research Impact Report"); Right side lists active text links with custom bullet icons (PDF pages, FAQ icons, etc.) with animated hover states.
- Titled **"Latest News"**:
  - Horizontal cards containing: thumbnail picture, red/blue date badge on the image corner, news title, and a small grey "Read more" button.

## 6. Events / PhD Seminars Section
- Titled **"Upcoming Events"**:
  - Next to "Latest News", displays a list of incoming events (e.g. Seminars, Talks, Conferences) or placeholder text.
- Titled **"PhD Seminars"**:
  - Grid card format listing PhD viva details: Profile thumbnail picture, candidate name, date/time, and a "View Details" button.

## 7. Statistics / Counter Section
- Displays key stats in a row: "10,000 Students", "600 Faculty", "700 Staff".
- Large numbers in bold, dark colored font with labels centered below them.

## 8. Footer Layout
- Background is Dark Navy Slate Charcoal (`#212331`). Text is light grey/white.
- **Layout structure:** Four columns.
  - Column 1: Logo & address information, main phone link, registry/admin email links, website link, and row of social media icons.
  - Column 2: "Quick Links" menu (Departments, Centres & CoEs, Schools, policies, career services, dark mode switcher).
  - Column 3: "Explore" menu (Rules, Campus Life, Newsletter, Academic Programmes, PhD Seminars, Sustainability, Contact Us).
  - Column 4: Weather widget and Air Quality index widget (PM2.5 indicator).
  - Bottom Bar: Copyright notice, Credits, Developed & Maintained by CSC IIT Delhi link.
