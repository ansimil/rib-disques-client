import Navbar from '@/components/Navbar/Navbar'
import Releases from '@/components/Releases/Releases'

export default function Home({ font }) {
  return (
    <div className={`home-container ${font}`}>
      <Navbar />
      <Releases />
    </div>
  )
}