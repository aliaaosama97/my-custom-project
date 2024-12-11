import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h1>be spirited fearless an everyday athlete</h1>
      <h2>A certified condetioning coaches and personal trainer for over a decade. we help thousands of athlete through 1-1 personalized coaching and fitness club.</h2>
      <Link href={'/'}>go back to hame page</Link>
    </div>
    
  )
}
