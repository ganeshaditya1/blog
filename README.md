This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## create a new post

create a new mdx file under the directory posts. 

It needs to have this meta information header at the top:

```
---
title: "Blah"
createdAt: 2024-07-01
published: true
tags: python, php, javascript
synopsis: Horrible post.
---
```

Setting published to true will cause it to appear on the site.

Refer to the SampleFileWithAllMdxSyntax.mdx file for examples of all valid syntaxes.