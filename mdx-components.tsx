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
    ...components,
  }
}