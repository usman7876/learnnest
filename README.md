# LearnNest — 1-to-1 online language tutors (demo)

LearnNest is an **independent demo marketplace** for 1-to-1 online language
lessons. It is inspired by the *general idea* of a tutor marketplace — find a
tutor, compare prices, book a trial — but it copies nothing from Preply: no
Preply name, logo, text, photos, layout or tutor profiles. All design,
wording and tutor data here are original.

**Demo only:** all 24 tutors are sample profiles (invented first name + last
initial, coloured-initials avatars, sample prices / ratings / reviews). They
are not real people. There is no login, no payment and no live video lesson.
Booking, tutor-application, business-enquiry and contact forms show an
in-page confirmation and send nothing.

## What is in the site

- **Home** (`/`) — hero, search, how-it-works, 6 featured tutors, 12 language cards, pricing teaser, FAQ teaser.
- **Find tutors** (`/tutors`) — all 24 sample tutors with client-side search, language / max-price / min-rating filters, and sorting. Reads `?q=` and `?lang=` from the URL.
- **Tutor profiles** (`/tutors/<slug>`) — one page per tutor: about, specialities, languages, sample availability, price + trial price, demo booking form.
- **Pricing** (`/pricing`) — how prices work, with an example pack table labelled as an example.
- **Become a tutor** (`/become-a-tutor`) — 3 steps, requirements, sample earnings example, demo application form.
- **For business** (`/for-business`) — corporate language training, demo enquiry form.
- **How it works, FAQ (10 Q&As), About, Contact** (demo form, no email invented), **Privacy, Terms, Cookies**.
- `robots.txt` (generated) and a sitemap (via `@astrojs/sitemap`).

## Data — one source of truth

`src/data/tutors.json` is the only tutor data file: exactly 24 tutors,
12 languages × 2 tutors each (English, Spanish, French, German, Italian,
Portuguese, Arabic, Mandarin Chinese, Japanese, Korean, Urdu, Hindi).
Prices run $8–$45 per 50-minute lesson; trial price is half the lesson
price. Every tutor has `"demo": true`.

## Tech

- Astro 5, static output — no server, no database, no secrets.
- No external fonts, CDNs or scripts. System font stack only.
- Original design: indigo `#4338CA`, amber `#F59E0B`, warm off-white `#FDFCF8`.

## Run it

```bash
npm install
npm run build    # outputs dist/
npm run preview  # preview the built site locally
```

See `DEPLOY.md` for putting it live on Vercel.
