import Link from 'next/link'
import AboutModal from './AboutModal'

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-gray-900 text-sm">
          <span className="w-6 h-6 rounded-md bg-[#005461] flex items-center justify-center text-white text-xs font-bold">U</span>
          UCI Perks
        </Link>
        <AboutModal />
      </div>
    </nav>
  )
}
