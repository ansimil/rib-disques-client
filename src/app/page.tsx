import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Releases from '@/pages/Releases/Releases'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Releases />
    </div>
  )
}
