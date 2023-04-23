import type { MDXComponents } from 'mdx/types'
import { Heading3, Heading4, Paragraph, UnorderedList, OrderedList, ListItem, Footnote, CustomImage, } from './app/Formats'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
      // Allows customizing built-in components, e.g. to add styling.
      // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
      h3: Heading3,
      h4: Heading4,
      p: Paragraph,
      ul: UnorderedList,
      ol: OrderedList,
      li: ListItem,
      Footnote: Footnote,
      CustomImage: CustomImage,
      ...components,
    }
  }