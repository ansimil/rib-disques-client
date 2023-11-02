import Navbar from '@/components/Navbar/Navbar'
import Releases from '../components/Releases/Releases'

export default function Home({ font }: {font: String}) {
  return (
    <div className={`home-container ${font}`}>
      <Navbar />
      <Releases />
    </div>
  )
}
