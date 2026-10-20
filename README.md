# House Coffee

A static coffee shop website built with HTML, CSS, and JavaScript. Images and fonts are stored in the repository, so the published site does not rely on external asset CDNs.

## Deploy with GitHub Pages

1. Push this repository to GitHub on the `main` or `master` branch.
2. In the repository, open **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. The workflow in `.github/workflows/deploy.yml` publishes the site after each push. You can also start it manually from the **Actions** tab.

The workflow assembles the root `index.html`, `style.css`, `script.js`, `images/`, and `fonts/` into a static Pages artifact.

## Local preview

Open `index.html` in a browser, or serve the repository root with any static web server.
