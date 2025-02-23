import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">YourBrand</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="hover:text-gray-300">
            <Facebook size={24} />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Twitter size={24} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Instagram size={24} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="hover:text-gray-300">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

