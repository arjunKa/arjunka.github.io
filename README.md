# Portfolio Site - Arjun Kaura
Link to site: [arjunkaura.com](https://arjunkaura.com/)

Pushes to `main` build the site with Vite and deploy `dist` directly to GitHub Pages using `.github/workflows/deploy.yml`. In the repository's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** and keep **Custom domain** set to `arjunkaura.com`. A separate `gh-pages` branch is not required.

This is a repository for my latest Portfolio Website, built using React. It uses a clean and simple look while also having multiple nice-to-have features for easy user experience such as a reactive design which reponds to the screen dimensions, meaning that it is usable on mobile. This portfolio website evolves and grows constantly as I add more projects and features, so there will be much more to add.


Use Node.js 24 (see `.nvmrc`) and run `npm ci --strict-peer-deps` to install dependencies. Run `npm run dev` for local development, `npm run lint` to check the code, and `npm run build` to create the production site in `dist`. Run `npm audit` to check dependencies for known vulnerabilities; review major upgrades rather than applying `npm audit fix --force`.
