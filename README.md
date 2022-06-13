# ☁️🔗 URL redirection using Cloudflare Workers

[![MIT License](https://img.shields.io/github/license/Astrotomic/cf-worker-redirect.svg?label=License&color=blue&style=for-the-badge)](https://github.com/Astrotomic/cf-worker-redirect/blob/master/LICENSE)
[![Offset Earth](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-green?style=for-the-badge)](https://forest.astrotomic.info)
[![Larabelles](https://img.shields.io/badge/Larabelles-%F0%9F%A6%84-lightpink?style=for-the-badge)](https://larabelles.com)

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Astrotomic/cf-worker-redirect/tests?style=flat-square&logoColor=white&logo=github&label=Tests)](https://github.com/Astrotomic/cf-worker-redirect/actions?query=workflow%3Atests)

[![Trees](https://img.shields.io/ecologi/trees/astrotomic?style=flat-square)](https://forest.astrotomic.info)
[![Carbon](https://img.shields.io/ecologi/carbon/astrotomic?style=flat-square)](https://forest.astrotomic.info)

URL redirection running at the edge with Cloudflare Workers.

## Usage

```bash
yarn install
yarn generate
```

Adjust the `redirects.json` file to your needs with all your wanted redirects.

```bash
yarn build
yarn deploy
wrangler publish
```

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Astrotomic/cf-worker-redirect)