import './Navbar.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left-container'>
        <Link className='logo-icon' href="/">≡|≡</Link>
        </div>
        <div className='navbar-right-container'>
          <ul className='navbar-right__links'>
            <li><Link href="/releases">Releases</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar