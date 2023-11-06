'use client';

import './Releases.css';
import ReleaseComp from '@/components/ReleaseComp/ReleaseComp';
import releases from '../../release.json';
import uuid from 'react-uuid';
import { useEffect, useState } from 'react';
import Speech from 'react-speech';

const Releases = () => {
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
        <div className='rib-line-logo'>
          ≡|≡
        </div>
    </div>
  )
}

export default Releases