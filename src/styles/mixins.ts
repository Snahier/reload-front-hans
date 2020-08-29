import { FlattenSimpleInterpolation } from "styled-components"

export function screen(
  device: string,
  css: FlattenSimpleInterpolation | string
) {
  switch (device) {
    case "mobile":
      return `
        @media (max-width: 425px) {
          ${css}
        }
      `
    case "tablet":
      return `
        @media (max-width: 768px) {
          ${css}
        }
      `
    case "desktop":
      return `
        @media (min-width: 769px) {
          ${css}
        }
      `
    default:
      throw new Error("Wrong viewport selected")
  }
}
