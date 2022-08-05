import { useState } from 'react'
import { Post } from './Post'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <Post author = "Edgar Fagundes"
    content = "Olá, tudo bem?"/>
  )
}

