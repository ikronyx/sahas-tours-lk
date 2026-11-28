# Sahas Tours website

A Next.js website for Sri Lanka tours, destinations and experiences. The public site uses typed content and can run independently of private administration.

## Run locally

Install Node.js 24.15+ in the Node 24 LTS series and npm. Extract this ZIP, open a terminal in the folder containing `package.json`, and run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a local production check, run:

```bash
npm run build
npm run typecheck
npm start
```

The project uses root-level `app/`, `components/`, `lib/` and `public/`. Public routes have their own layout under `app/(public)/`. Authentication code lives under `app/admin/`, `app/api/auth/` and `lib/admin/`.

## Change the visual theme

Open `app/globals.css` and edit the Ocean Sunset swatches at the top of `:root`. The roles immediately below control how those colors are used. For example, `--action` controls primary buttons, `--link` controls links and navigation highlights, and `--photo-scrim` controls photo overlays. Tailwind utilities such as `bg-canvas` and `text-brand-link` resolve through the `@theme inline` block. Component styling and responsive rules live in the same file.

Inter Variable is used for reading and controls. Source Serif 4 Variable is used for headings and the wordmark. Both fonts are bundled locally. After changing the theme, check text contrast, buttons, and photo overlays on mobile and desktop.

## Set the homepage hero video

Place your MP4 at `public/bg-video.mp4` before starting the dev server or deploying. The homepage requests it as `/bg-video.mp4`. A short, compressed H.264 MP4 works well for this background.

The video attempts muted autoplay and loops inline. A single translucent theme color covers the footage. The hero stays dark until the first frame is available, and can show that frame when autoplay is blocked.

To check the file locally, open `http://localhost:3000/bg-video.mp4` (use your dev server's port). If you get a 404, check that the file is in the same project's `public` folder and that the full filename is exactly `bg-video.mp4`. Restart the server after adding the file if the URL still returns 404. If the URL loads but the browser cannot play it, export as H.264 MP4 with a broadly compatible pixel format such as yuv420p. For a deployed site, include the file in the deployment and check the same path on your domain.

GSAP animates the homepage entrance, scroll reveals, and the shared public-page banners. Reduced motion disables these animations.

When updating from the previous release, stop the old dev server and run `npm ci` once to install GSAP from the updated lockfile, then run `npm run dev`. Replacing only the MP4 later requires no dependency install.

## Configure public enquiries

The proposal confirms the WhatsApp number `075 920 2936`, stored by default as `+94759202936` in `lib/site.ts`. To change it, copy `.env.example` to `.env.local` and set `SAHAS_WHATSAPP_NUMBER` to the confirmed international number. Use digits with an optional leading plus. The app removes the plus from the `wa.me` path. Set the variable to an empty value to hide the links. Invalid values also hide the links.

General calls to action prefill a brief Sri Lanka enquiry. Both actions inside a tour page prefill the name of that tour. The visitor reviews and sends the message in WhatsApp. The website stores no enquiry details. Since the public routes are prerendered, rebuild after changing the phone number or site URL. Use placeholders in shared files only and keep private admin variables on the deployment host.

## Enable private administration

The public site starts with no admin configuration. To enable the admin on a local or production Node server:

1. Put the following settings in `.env.local` locally, or use protected environment variables on the production host. Set `BETTER_AUTH_URL` to the exact origin with no trailing slash. Local HTTP is supported on loopback. Use HTTPS for production.

   ```dotenv
   BETTER_AUTH_URL=http://localhost:3000
   BETTER_AUTH_SECRET=
   ADMIN_DB_PATH=./private-data/admin.sqlite
   ```

2. Generate the secret by running the following command. Paste the resulting value into the empty secret setting using a private terminal or deployment secret manager.

   ```bash
   node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
   ```

3. Run `npm run admin:setup` in an interactive terminal under the application’s service account. The command initializes Better Auth’s SQLite schema and prompts for the first admin’s email and a unique 16–128-character password. The password is hidden while typed. Keep it in a password manager. Setup stops if an account already exists.
4. Run or restart the app and open `/admin/login`. Sign in, open `/admin`, then test **Sign out**. Use the same origin you configured. There is no registration route or recovery email flow. Retain a protected database backup and the admin credentials.

In production use an absolute, writable `ADMIN_DB_PATH` on a private persistent volume outside `public/`. Use a single Node service with persistent storage for this SQLite setup and protect the database and its backups. SSL terminates at your host or reverse proxy. The admin uses server-side session checks, a database-backed rate limiter, same-origin auth, and Secure cookies on HTTPS. Public pages do not import the auth module and remain usable without the database.

## Content and launch

- Edit tours, places, experience themes, inclusions FAQs and photo metadata in `lib/content.ts`. Approve the sample tour names, routing, duration, stops and inclusions before using them as official offerings. Pricing, availability and inclusions are subject to client confirmation.
- HTML gallery credits are in `lib/photo-credits.ts`. See [PHOTO_CREDITS.md](PHOTO_CREDITS.md) for the source and licence of each bundled photograph. Obtain client approval for the supplied logo sample and the chosen editorial photography before publishing. Replace photos and their alt text and credits together.
- Set `SITE_URL=https://sahastours.com` for production. Run `npm ci` and `npm run build`, then run `npm start` as a service behind the host or reverse proxy. Route the intended domain to the service, configure DNS and HTTPS, and redirect any alternate hostname to the canonical origin. A purely static host cannot run the admin or Next.js image optimizer.
- After deployment, check navigation, images, `/sitemap.xml`, `/robots.txt`, the HTTPS admin session, and that the WhatsApp links resolve to the correct business profile. Use a phone and desktop before announcing launch.
