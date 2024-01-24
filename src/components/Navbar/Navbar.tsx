'use client';

import './Navbar.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
  const height = 25;
  const width = 25;

  return (
    <div className='navbar-container'>
        <div className='navbar-container-inner-left'>
          <img 
          className="navbar-rib-logo" 
          src="https://res.cloudinary.com/dxvof8226/image/upload/v1705831305/Trans_RIB_LOGO_vmvnqi.png"
          onClick={()=> {
            router.push('/home')
          }} 
          />
          <div className='navbar-rib-text'>
            <p>rib</p>
            <p>disques</p>
          </div>
        </div>
        <div className='navbar-container-inner-right'>
          <ul className='navbar-container-inner-right__links'>
            <li>
              <Link href="mailto:info@ribdisques.com">
                <Image src="https://res.cloudinary.com/dxvof8226/image/upload/v1699134559/7693324_telegram_social_media_logo_messenger_icon_llxvt0.png" alt="contact us" width={width} height={width}/>
              </Link>
            </li>
            <li>
              <Link title="Bandcamp" href="https://ribdisques.bandcamp.com" target="_blank">
                <Image src="https://res.cloudinary.com/dxvof8226/image/upload/v1699134559/8546910_bandcamp_icon_o1pciw.png" alt="bandcamp" width={width} height={height}/>
              </Link>
            </li>
            <li>
              <Link title="Soundcloud" href="https://soundcloud.com/user-2976049" target="_blank">
                <Image src="https://res.cloudinary.com/dxvof8226/image/upload/v1699167297/2643216_artist_music_network_share_social_icon_gucdgq.png" alt="bandcamp" width={width} height={height}/>
              </Link>
            </li>
            {/* <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li> */}
          </ul>
        </div>
    </div>
  )
}

export default Navbar