'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex  justify-between w-full items-center text-sm mb-5">
        <h1 className='font-semibold text-xl'>Thien An</h1>
        <ul className="flex gap-6">
            <li className=' text-gray-400'><Link href="/"><span className="text-purple-400">#</span> home</Link></li>
            <li className=' text-gray-400'><Link href="/projects"><span className="text-purple-400">#</span> works</Link></li>
            <li className=' text-gray-400'><Link href="/about-me"><span className="text-purple-400">#</span> about-me</Link></li>
            <li className=' text-gray-400'><Link href="/contacts"><span className="text-purple-400">#</span> contacts</Link></li>
        </ul>
    </nav>
  );
}
