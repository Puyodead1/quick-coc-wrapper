# quick-coc-wrapper

Simple clash of clans API wrapper

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/designed-in-ms-paint.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/approved-by-george-costanza.svg)](https://forthebadge.com)
![GitHub forks](https://img.shields.io/github/forks/Puyodead1/quick-coc-wrapper?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/Puyodead1/quick-coc-wrapper?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/Puyodead1/quick-coc-wrapper?style=for-the-badge)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Puyodead1/quick-coc-wrapper?style=for-the-badge)

[![Discord Banner 2](https://discordapp.com/api/guilds/589200717277954093/widget.png?style=banner2)](https://discord.gg/tMzrSxQ)

# Information

- API Docs: https://puyodead1.github.io/quick-coc-wrapper
- NPM Package: https://www.npmjs.com/package/quick-coc-wrapper

# Example Usage

```ts
import { ClashAPI } from "quick-coc-wrapper";

const api = new ClashAPI("<clash of clans api token>");
api.fetchLeagues().then((leagues) => {
  console.log(leagues);
});
```
