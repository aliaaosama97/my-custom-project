import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1>new Page</h1>
      <Link href={'/'}>go back to hame page</Link>
    </div>
    
  )
}
