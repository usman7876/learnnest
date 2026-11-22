# Deploying LearnNest

LearnNest is a static Astro site. There are no secrets, no database and no
server to configure.

## 1. Build it

```bash
cd ~/workspace/learnnest
npm install
npm run build
```

The build outputs the whole site into `dist/`. Check it contains
`index.html`, `tutors/index.html`, 24 pages under `tutors/<slug>/`,
`pricing`, `become-a-tutor`, `for-business`, `how-it-works`, `faq`,
`about`, `contact`, `privacy-policy`, `terms`, `cookies-policy`,
`robots.txt` and `sitemap-index.xml`.

## 2. Put the code on GitHub

Create a new repository (for example `learnnest`) and push this folder to
it. Do not add any secrets — there are none to add.

## 3. Import it in Vercel

1. In the Vercel dashboard: **Add New → Project → Import** the GitHub
   repository.
2. Framework preset: **Astro** (Vercel detects it automatically).
3. Build command: `npm run build`. Output directory: `dist`.
4. No environment variables are needed.
5. Deploy. Vercel will give you a free `*.vercel.app` address first.

## 4. Custom domain (later, optional)

Buy a domain at a registrar, then in Vercel go to the project →
**Settings → Domains** and add it. Then change the one line in
`astro.config.mjs` (`site: 'https://learnnest.vercel.app'`) to the new
domain and redeploy, so canonical URLs and the sitemap use the new address.

## Notes

- The site URL lives in exactly one place: `astro.config.mjs`.
- `robots.txt` is generated from that URL, so it updates itself.
- Nothing on this site takes a payment or stores a form submission.
  Adding real accounts, payments or a live video classroom is a separate,
  later step — it is not part of this static demo.
