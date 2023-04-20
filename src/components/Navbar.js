import Link from "next/link"
import Image from "next/image"


export default function NavBar() {
  return (
<header className="flex justify-between items-center py-6">
<Image src="https://dcnaber.github.io/dhondt-calculator-next/dhondt.jpg" className="h-8" alt="Logo" height="21" width="21" />
<nav>
  <ul className="flex space-x-4">
    <li>
      <Link href="/" className="font-medium text-gray-500 hover:text-gray-900">
        Home
      </Link>
    </li>
    <li>
      <Link href="/calculator" className="font-medium text-gray-500 hover:text-gray-900">
        Calculator
      </Link>
    </li>
    <li>
        <a href="https://github.com/dcnaber/dhondt-calculator-next" className="font-medium text-gray-500 hover:text-gray-900">
    <Image src="https://dcnaber.github.io/dhondt-calculator-next/github.svg" alt="GitHub Logo" className="h-7" height="21" width="21" />
      </a>
    </li>
  </ul>
</nav>
</header>
  )

}
