# doc-utils

## dev

```bash
npm i -g pnpm

cd ..
git clone https://github.com/windicss/docs.git
cd docs
```

replace package.json

```diff
- "@windicss/vitepress-theme": "*",
+ "@windicss/vitepress-theme": "link:../doc-utils/packages/vitepress-theme",
```

```bash
# reinstall deps
pnpm install
# run dev server
pnpm dev
```
