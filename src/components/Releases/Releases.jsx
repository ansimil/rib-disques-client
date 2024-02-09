'use client';

import './Releases.css';
import ReleaseComp from '@/components/ReleaseComp/ReleaseComp';
import releases from '../../release.json';
import uuid from 'react-uuid';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Releases = () => {
  const height = 25;
  const width = 25;
  const [ openStates, setOpenStates ] = useState([])

  releases.sort((a, b)=> {
      return b.releaseNumber - a.releaseNumber
  })
  return (
    <div className='releases-container'>

        {releases.map((release, i) => {
          return (
            <ReleaseComp key={uuid()} release={release} idx={i} openStates={openStates} setOpenStates={setOpenStates}/>
          )
        })}
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
              <Link title="Soundcloud" href="https://soundcloud.com/ribdisques" target="_blank">
                <Image src="https://res.cloudinary.com/dxvof8226/image/upload/v1699167297/2643216_artist_music_network_share_social_icon_gucdgq.png" alt="bandcamp" width={width} height={height}/>
              </Link>
            </li>
            {/* <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li> */}
          </ul>
        </div>
        <div className='rib-line-logo'>
          ≡|≡
        </div>
    </div>
  )
}

export default Releases