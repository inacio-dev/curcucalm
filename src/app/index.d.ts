declare module '*.png'

export declare global {
  interface Window {
    dataLayer: Record<string, any>[]
  }
}
