# Addis Bloom

# PHASE 1 MASTER BUILD PROMPT

## Hill Addis Guest House | Premium Boutique Hospitality Website

Build a complete, production-quality **public-facing website for Hill Addis Guest House**, a boutique guesthouse in Addis Ababa, Ethiopia.

This is **PHASE 1 ONLY**.

The goal of this phase is to create the complete public website, visual identity, frontend architecture, responsive experience, placeholder room system, and booking UI.

Do NOT build the admin dashboard, authentication, database, payment system, or real booking backend yet.

However, structure the frontend and data models so that they can be connected to **Supabase + an admin dashboard in Phase 2 and later phases without rebuilding the UI**.

---

# 1. PROJECT GOAL

Create a sophisticated, modern boutique guesthouse website that feels like a real hospitality brand, not an AI-generated website template.

The website should communicate:

* Comfort
* Warm Ethiopian hospitality
* Boutique character
* Calmness
* Trust
* Quality
* Local identity
* Professional hospitality
* Easy booking

The website must look good enough to represent a real guesthouse professionally and should be suitable for deployment to a production domain.

The design should feel closer to a **premium boutique hotel / editorial travel website** than a typical small-business template.

---

# 2. BUSINESS INFORMATION

Use the following verified business information where appropriate:

Business name:

**Hill Addis Guest House**

Location:

**Addis Ababa, Ethiopia**

Google Business / Maps location:

https://www.google.com/maps/place/Hill+Addis+Guest+House/@9.0239187,38.8016131,882m/

Phone:

**+251 964 796 906**

Do not invent additional business facts such as:

* star rating
* number of rooms
* exact room prices
* exact amenities
* awards
* certifications
* years of operation
* restaurant availability
* airport shuttle availability
* exact check-in/check-out times
* policies

unless they are explicitly provided.

If information is unavailable, use tasteful placeholder content or structure the section so it can be replaced later.

Do NOT present fictional information as verified facts.

---

# 3. TECHNOLOGY

Use:

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Lucide React icons
* Framer Motion where appropriate

Keep the project modular and maintainable.

Use reusable components rather than duplicating markup.

The code should be clean enough to later continue development in VS Code and GitHub.

---

# 4. IMPORTANT FUTURE ARCHITECTURE

The rooms must NOT be hardcoded directly into individual page components.

Create a structured room data model.

Example conceptual structure:

```ts
type Room = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: string;
  capacity: number;
  size: string;
  bedType: string;
  featured: boolean;
  amenities: string[];
  images: string[];
};
```

For Phase 1, use local mock data.

Later, this model will be replaced by Supabase data.

The UI must therefore be completely data-driven.

The same principle should be used for:

* Gallery
* Experiences
* Journal posts
* Testimonials
* Amenities
* Site settings

Do not create a frontend that depends on manually editing dozens of components later.

---

# 5. DESIGN DIRECTION

This is the most important part.

DO NOT create a generic AI hotel website.

Avoid:

* excessive gradients
* neon colors
* excessive glassmorphism
* giant rounded cards
* excessive shadows
* excessive animations
* random blobs
* decorative grid backgrounds
* generic SaaS UI
* overly colorful interfaces
* excessive pills
* huge typography everywhere
* template-looking layouts

Instead create:

**Editorial boutique hospitality design**

Visual characteristics:

* Large immersive photography
* Elegant typography
* Strong visual hierarchy
* Warm neutral palette
* Deep charcoal text
* Earth-inspired accent colors
* Off-white / ivory backgrounds
* Dark sections used strategically
* Thin borders
* Subtle shadows
* Minimal border radius
* Large whitespace
* Asymmetric layouts
* Carefully cropped imagery
* Refined hover states
* Smooth but restrained motion

The website should feel:

**Warm + Elegant + Modern + Authentic + Calm**

Not:

**Luxury + Flashy + Corporate**

---

# 6. COLOR SYSTEM

Create a refined hospitality color system.

Suggested foundation:

Background:
#F6F3EE

Primary dark:
#171717

Secondary dark:
#24211E

Warm accent:
#A27652

Soft accent:
#D4C2AE

Muted text:
#716B64

White:
#FFFFFF

Use these as starting points, but maintain strong contrast and accessibility.

Do not overuse the accent color.

The accent should primarily be used for:

* CTAs
* active states
* small details
* links
* booking highlights
* subtle decorative elements

---

# 7. TYPOGRAPHY

Use a sophisticated combination of:

**Serif display font**

for:

* hero headings
* section titles
* room titles
* editorial statements

and

**clean modern sans-serif**

for:

* navigation
* body text
* buttons
* labels
* forms
* metadata

Typography should feel editorial and premium.

Do not make every heading enormous.

Hero heading should be large but controlled and responsive.

Avoid text overflow on mobile.

---

# 8. IMAGE DIRECTION

Photography is extremely important.

Use high-quality hospitality imagery for placeholders.

Image style should communicate:

* boutique rooms
* warm interiors
* natural light
* comfortable beds
* architectural details
* Addis Ababa atmosphere
* Ethiopian culture
* travel
* hospitality
* calm mornings
* city exploration

Avoid obviously artificial-looking images.

Use large images instead of filling the page with small cards.

Use consistent image aspect ratios.

All images must have:

* proper alt text
* lazy loading where appropriate
* responsive sizing
* object-cover behavior when necessary

Use remote placeholder images only for Phase 1.

Structure image data so real property photography can easily replace them later.

---

# 9. NAVIGATION

Create a premium responsive navigation.

Desktop:

Logo / brand:

**HILL ADDIS**

Navigation:

* Stay
* Experience
* Gallery
* Journal
* About
* Contact

Primary CTA:

**Book Your Stay**

The navbar should be transparent/overlayed over the hero initially and transition into a solid/light background when scrolling.

Use smooth transitions.

Mobile:

Use a clean full-screen or large slide-down menu.

Include:

* navigation links
* booking CTA
* phone number
* location

Do not make the mobile menu feel like a basic sidebar.

---

# 10. HOME PAGE

Create a highly polished homepage.

Route:

`/`

## HERO

Use a full-width immersive hero image.

Overlay content:

Small eyebrow:

**WELCOME TO HILL ADDIS**

Main heading:

**A Quiet Stay in the Heart of Addis**

Supporting text:

**A warm and comfortable guesthouse experience designed for travelers discovering Addis Ababa.**

Primary CTA:

**Book Your Stay**

Secondary CTA:

**Explore Rooms**

Include subtle location information:

**Addis Ababa, Ethiopia**

Hero should have:

* strong image
* subtle dark overlay
* elegant typography
* carefully positioned content
* subtle entrance animation
* scroll indicator

Do not make the hero overcrowded.

---

# 11. HERO BOOKING BAR

Immediately below or integrated into the hero, create a sophisticated booking/search bar.

Fields:

* Check-in
* Check-out
* Guests
* Search Availability

The booking bar should feel like a boutique hotel booking interface.

On desktop:

Horizontal layout.

On mobile:

Stack vertically.

Phase 1 behavior:

The form does NOT need to query a real database.

It should validate basic input and navigate to:

`/booking`

with the selected values.

Prepare the component for future real availability logic.

---

# 12. INTRODUCTION SECTION

Create an editorial introduction.

Use:

Small label:

**THE HILL ADDIS EXPERIENCE**

Heading:

**Stay Somewhere That Feels Like Home**

Create a two-column layout:

Left:
Large image.

Right:
Elegant paragraph describing the guesthouse experience.

Use temporary copy if exact business copy is unavailable.

Keep it natural and human.

Do not use generic AI phrases such as:

"Where luxury meets comfort."

---

# 13. FEATURED ROOMS

Section heading:

**Stay Your Way**

Supporting text:

Introduce the accommodation options.

Display 3 featured placeholder rooms.

Use room cards with:

* large image
* room name
* short description
* capacity
* bed type
* price
* View Room button

Placeholder rooms:

### Deluxe Room

Capacity:
2 guests

### Executive Room

Capacity:
2 guests

### Family Suite

Capacity:
4 guests

Use placeholder prices clearly as temporary data.

Do not claim these are the actual Hill Addis rooms.

Add:

**View All Rooms**

---

# 14. ROOMS PAGE

Route:

`/rooms`

Create a beautiful room discovery page.

Hero:

**Find Your Stay**

Supporting text:

Explore our accommodation options.

Room listing:

Use a responsive grid or editorial list.

Each room should show:

* image
* name
* description
* price
* capacity
* bed
* key amenities
* CTA

Add subtle filtering UI if appropriate.

Possible filters:

* Guests
* Room type
* Price

But do not overcomplicate Phase 1.

---

# 15. ROOM DETAIL PAGE

Route:

`/rooms/:slug`

Create a premium room detail page.

Structure:

1. Image gallery
2. Room name
3. Price
4. Description
5. Room information
6. Amenities
7. Booking CTA
8. Related rooms

Room information:

* Guests
* Bed
* Size
* View
* Room type

Again, use placeholder values.

Create a sticky booking card on desktop.

Mobile should use a sticky bottom booking CTA.

---

# 16. GALLERY

Route:

`/gallery`

Create a visually strong editorial gallery.

Do NOT use a boring uniform grid.

Use a tasteful masonry/asymmetric layout.

Categories:

* Rooms
* Interiors
* Dining
* Addis Ababa
* Experiences

Use image lightbox functionality.

When clicking an image:

* open large image
* allow next/previous
* close button
* keyboard support where possible

Images should have meaningful alt text.

---

# 17. EXPERIENCES PAGE

Route:

`/experiences`

Create a travel-inspired page about experiencing Addis Ababa.

Use placeholder experiences such as:

* Discover Addis Ababa
* Local Food & Coffee
* City Culture
* Markets & Shopping
* Ethiopian Heritage
* Nearby Attractions

Do not claim that Hill Addis officially provides these activities.

Frame them as:

**Things to Explore Around Addis Ababa**

This section can later be managed through the admin panel.

Use large editorial images.

---

# 18. JOURNAL

Route:

`/journal`

Create a travel journal / blog section.

Purpose:

SEO and useful travel content.

Placeholder posts:

1. First-Time Guide to Addis Ababa
2. Things to See in Addis Ababa
3. Ethiopian Coffee Culture
4. Where to Explore Around Megenagna
5. A Weekend in Addis Ababa

Each card:

* image
* category
* title
* excerpt
* date
* Read Article

Route:

`/journal/:slug`

Create an article detail page.

Structure it properly for future CMS integration.

---

# 19. ABOUT PAGE

Route:

`/about`

Create a sophisticated About page.

Include:

* Hero
* Story
* Hospitality philosophy
* Location
* Image sections
* CTA

Do not invent historical facts.

Use placeholder copy where necessary and clearly structure it so the actual story can later be added.

---

# 20. CONTACT PAGE

Route:

`/contact`

Include:

Phone:

+251 964 796 906

Location:

Addis Ababa, Ethiopia

Google Maps CTA.

Create contact form:

* Name
* Email
* Phone
* Message

Phase 1:

Form can show a successful submission state without actually sending data.

Prepare it for future backend integration.

Also include:

**Book Your Stay**

CTA.

---

# 21. BOOKING PAGE

Route:

`/booking`

Create the complete booking UI.

Step-based or well-structured layout:

### Step 1

Stay details

* Check-in
* Check-out
* Guests

### Step 2

Select room

Show available placeholder rooms.

### Step 3

Guest information

* First name
* Last name
* Email
* Phone
* Country
* Special requests

### Step 4

Booking summary

Show:

* selected room
* dates
* guests
* nights
* room price
* total

Phase 1:

Do not process payments.

Do not claim a reservation has been created in a real system.

Instead, show a clear placeholder confirmation state.

The UI should later be easy to connect to the real booking backend.

---

# 22. REVIEWS

Include a testimonial section on the homepage.

Use placeholder testimonials only if necessary.

Clearly structure testimonial data so it can later be replaced by real reviews.

Do NOT fabricate Google review statistics.

If showing placeholder testimonials during development, keep them clearly generic or temporary in the data layer.

---

# 23. LOCATION SECTION

Create a strong location section.

Show:

**Hill Addis Guest House**

**Addis Ababa, Ethiopia**

Include a map placeholder or embedded map area.

Add:

**Get Directions**

linking to the provided Google Maps listing.

Also show the phone number.

---

# 24. FOOTER

Create a premium multi-column footer.

Include:

Brand:

**HILL ADDIS GUEST HOUSE**

Short description.

Navigation:

* Home
* Rooms
* Gallery
* Experiences
* Journal
* About
* Contact

Stay:

* Rooms
* Booking
* Contact

Contact:

+251 964 796 906

Addis Ababa, Ethiopia

Social icons:

Only include social platforms if actual links are later provided.

Bottom:

© 2026 Hill Addis Guest House

Privacy Policy

Terms

---

# 25. 404 PAGE

Create a custom 404 page.

Heading:

**This Page Took a Different Route**

Supporting text:

The page you're looking for doesn't seem to be here.

CTA:

**Return Home**

Keep it elegant.

---

# 26. ANIMATION SYSTEM

Use Framer Motion.

Animations should be subtle.

Use:

* fade-up reveals
* image scale on hover
* smooth page transitions
* navbar transition on scroll
* staggered room cards
* gallery hover effects
* button hover transitions

Do NOT animate everything.

Avoid:

* bouncing elements
* excessive parallax
* constant floating objects
* distracting motion

Respect:

`prefers-reduced-motion`

---

# 27. RESPONSIVE DESIGN

The website must be designed mobile-first.

Test at:

* 320px
* 375px
* 390px
* 414px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px

No:

* horizontal scrolling
* overflowing headings
* broken grids
* oversized buttons
* tiny text
* overlapping images

Mobile should feel intentionally designed, not simply compressed desktop.

---

# 28. ACCESSIBILITY

Follow good accessibility practices.

Use:

* semantic HTML
* proper headings
* accessible buttons
* form labels
* keyboard navigation
* visible focus states
* alt text
* sufficient color contrast
* aria labels where appropriate

Images and interactive elements should be accessible.

---

# 29. SEO FOUNDATION

Build the frontend SEO-ready.

Every page should have:

* unique title
* meta description
* canonical-friendly structure
* proper H1
* semantic headings
* descriptive URLs
* image alt text

Example:

Home:

Title:
**Hill Addis Guest House | Stay in Addis Ababa, Ethiopia**

Description:

**Discover Hill Addis Guest House in Addis Ababa. Explore comfortable rooms, local experiences and plan your stay in Ethiopia.**

Rooms:

**Rooms at Hill Addis Guest House | Addis Ababa**

Room detail pages should dynamically generate metadata based on room information.

Journal pages should dynamically generate metadata based on article information.

Create:

* sitemap-ready routing
* robots.txt-ready architecture
* Open Graph metadata structure

Do not use keyword stuffing.

---

# 30. PERFORMANCE

Prioritize performance.

Use:

* lazy-loaded images
* optimized image dimensions
* responsive images where appropriate
* minimal unnecessary JavaScript
* reusable components
* avoid huge dependencies
* avoid unnecessary re-renders

The homepage should feel fast.

---

# 31. COMPONENT ARCHITECTURE

Create reusable components such as:

```text
components/
├── Navbar
├── MobileMenu
├── Footer
├── Hero
├── BookingBar
├── RoomCard
├── RoomGallery
├── RoomAmenities
├── RoomBookingCard
├── SectionHeading
├── ImageReveal
├── GalleryGrid
├── Lightbox
├── TestimonialCard
├── ExperienceCard
├── JournalCard
├── ContactForm
├── LocationSection
├── CTASection
├── Button
└── PageTransition
```

Keep components focused and reusable.

---

# 32. DATA ARCHITECTURE

Create a mock data directory.

Example:

```text
src/
├── data/
│   ├── rooms.ts
│   ├── gallery.ts
│   ├── experiences.ts
│   ├── journal.ts
│   ├── testimonials.ts
│   └── site.ts
```

The frontend should consume this data rather than embedding content everywhere.

This is critical because later we will replace these mock data files with Supabase queries.

---

# 33. ROUTING

Implement:

```text
/
 /rooms
 /rooms/:slug
 /gallery
 /experiences
 /journal
 /journal/:slug
 /about
 /contact
 /booking
```

Make sure every route works directly when refreshed.

Create a proper 404 route.

---

# 34. BOOKING UX

The booking CTA should be visible throughout the website.

Use:

**Book Your Stay**

as the primary conversion action.

On desktop:

Navbar CTA.

On mobile:

Sticky bottom booking button where appropriate.

Room pages:

Prominent booking CTA.

Homepage:

Hero CTA + room CTA + final CTA.

Do not make users search for the booking action.

---

# 35. MICROCOPY

Use human, hospitality-focused copy.

Avoid generic AI phrases such as:

"Unforgettable experience"

"Luxury meets comfort"

"Your dream destination"

"Where elegance meets sophistication"

"Embark on an unforgettable journey"

Write copy that sounds like an actual guesthouse brand.

Keep language simple, warm and confident.

---

# 36. IMPORTANT PLACEHOLDER RULE

Because the actual rooms and property content will eventually be managed through the admin dashboard:

Use placeholder room data now.

But design the entire system so that replacing:

```text
Room name
Price
Description
Images
Amenities
Capacity
Bed type
Room size
Availability
Featured status
```

does NOT require changing UI components.

The same applies to:

* Gallery
* Journal
* Experiences
* Reviews
* Site information

---

# 37. WHAT NOT TO BUILD IN PHASE 1

Do NOT implement:

* Supabase
* PostgreSQL
* Admin dashboard
* Admin authentication
* Customer accounts
* Real availability checking
* Payment processing
* Real booking persistence
* Email automation
* SMS
* Staff management
* Revenue management
* Room inventory management

These will be implemented in later phases.

However, design the frontend interfaces so they are ready for those systems.

---

# 38. FINAL QUALITY STANDARD

Before considering Phase 1 complete, check the entire website.

Verify:

* Every route works
* Navigation works
* Room links work
* Booking flow works visually
* Gallery lightbox works
* Mobile menu works
* Responsive layout works
* Images don't overflow
* Typography is consistent
* Buttons have hover/focus states
* Forms have validation
* 404 page works
* No console errors
* No broken images
* No placeholder lorem ipsum
* No fake business claims
* No excessive animation
* No generic AI-looking UI
* No horizontal scrolling

The final result should feel like a professionally designed boutique guesthouse website.

---

# 39. MOST IMPORTANT DESIGN INSTRUCTION

Do not rush into generating every section as a collection of cards.

Think like a professional hospitality web designer.

Use:

**Photography → Typography → Space → Story → Booking**

as the primary design hierarchy.

Use large images and editorial compositions.

Create visual rhythm by alternating:

* light sections
* dark sections
* image-heavy sections
* whitespace
* editorial text
* booking-focused sections

The website should feel intentional from top to bottom.

---

# 40. BUILD ORDER

Build in this order:

### STEP 1

Global design system

### STEP 2

Navbar + mobile navigation

### STEP 3

Footer

### STEP 4

Homepage

### STEP 5

Room data architecture

### STEP 6

Rooms listing

### STEP 7

Room detail page

### STEP 8

Gallery

### STEP 9

Experiences

### STEP 10

Journal

### STEP 11

About

### STEP 12

Contact

### STEP 13

Booking UI

### STEP 14

404

### STEP 15

Responsive refinement

### STEP 16

Accessibility + SEO

### STEP 17

Performance cleanup

### STEP 18

Final QA

Do not skip directly to a simplistic all-pages-at-once implementation.

---

# FINAL INSTRUCTION

Build the website now.

Prioritize **design quality, usability, maintainability and hospitality storytelling** over simply generating a large amount of code.

The result should look like a real boutique guesthouse brand that could confidently be shown to paying guests.

Keep the architecture clean and future-ready because later phases will add:

**Supabase → Admin Dashboard → Room Management → Booking Management → Customer Management → Content Management → Notifications → Production Deployment.**

Do not implement those systems yet.

Start with the public website and make Phase 1 exceptionally polished.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/83249af1-6905-4e58-bbf5-d12d0aa0e368).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
