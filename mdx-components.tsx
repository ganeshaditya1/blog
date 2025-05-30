import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom component for code blocks
    pre: ({ children }) => (
      <div className="bg-gray-100 rounded-md border border-gray-200">
      <pre style={{ padding: '10px' }}>
        <code>{children}</code>
      </pre>
      </div>
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