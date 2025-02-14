"use client"

import { useEffect } from "react"

const comicFontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

  .font-comic {
    font-family: 'Bangers', cursive;
    letter-spacing: 1px;
  }
`

export default function ComicFontStyle() {
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = comicFontStyle
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

