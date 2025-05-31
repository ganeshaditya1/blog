import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom component for code blocks
    pre: ({ children }) => (
      <pre className="border border-gray-400 rounded-md p-[10px] whitespace-pre-wrap mt-[10px] mb-[15px]">
        <code>{children}</code>
      </pre>
    ),

    // Add styling to headings
    h1: ({ children }) => (
      <h1 className="text-3xl mt-[10px] mb-[10px]">
        {children}
      </h1>
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