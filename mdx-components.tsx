import type { MDXComponents } from 'mdx/types';

 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom component for code blocks
    pre: ({ children }) => (
      <pre className="border border-gray-400 rounded-md p-[10px] whitespace-pre-wrap mt-[10px] mb-[15px]">
        <code>{children}</code>
      </pre>
    ),

    // Add styling to headings
    h1: ({ id, children }) => (
      <h1 id={id} className="md:text-3xl text-2xl mt-[10px] mb-[10px]">
        {children}
      </h1>
    ),
    h2: ({ id, children }) => (
      <h2 id={id} className="md:text-2xl text-xl mt-[10px] mb-[10px]">
        {children}
      </h2>
    ),
    a: ({ children, href }) => (
      <a className="underline" href={href}>{children}</a>
    ),
    p: ({ children }) => (
      <p style={{ wordSpacing: '0.07em', lineHeight: '1.5em' }}> {children} </p>
    ),
    ...components,
  }
}
