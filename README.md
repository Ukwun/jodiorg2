# jodiorg2
Website development of a Facility Management company based in the UK

## Netlify Deployment

This project is a static Webflow export and is ready for direct Netlify hosting.

1. Push the latest `main` branch to `https://github.com/Ukwun/jodiorg2.git`.
2. In Netlify: Add new site -> Import from Git -> GitHub -> `Ukwun/jodiorg2`.
3. Build command: leave empty.
4. Publish directory: `.`
5. Deploy site.

### Automatic Deploys

After the first deploy, every push to `main` triggers an automatic Netlify redeploy.

### Contact Form

The contact form in `contact.html` is configured for Netlify Forms using:
- `method="post"`
- `data-netlify="true"`
- hidden `form-name` field
- honeypot field (`bot-field`)
