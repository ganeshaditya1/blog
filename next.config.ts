import type { NextConfig } from "next";

import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

import rehypeStarryNight from 'rehype-starry-night'

import rehypeImgSize from "rehype-img-size";

import remarkToc from 'remark-toc'

import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx';

import rehypeSlug from 'rehype-slug';

const nextConfig: NextConfig = {
  /* config options here */
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    mdxRs: false,
  }
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    rehypePlugins: [rehypeKatex, [rehypeStarryNight, ], [rehypeImgSize, { dir: 'public'}], rehypeSlug],
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter, remarkMath, remarkToc],
  },
});

export default withMDX(nextConfig);
