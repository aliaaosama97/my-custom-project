import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <nav>
      <h1>fitness club</h1>
      <Link href={"/"}>join team</Link>
      <Link href={"/"}>free pass</Link>
    </nav>
  )
}
