declare module '*.html' {
  const content: string
  export default content
}

declare module '*.vue' {
  import type { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module '*?raw' {
  const str: string
  export default str
}
