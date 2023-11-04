'use client';

import './Releases.css';
import ReleaseComp from '@/components/ReleaseComp/ReleaseComp';
import releases from '../../release.json';
import uuid from 'react-uuid';

const Releases = () => {
  return (
    <div className='releases-container'>
        
        {releases.map((release, i) => {
          return (
            <ReleaseComp key={uuid()} release={release} idx={i}/>
          )
        })}
    </div>
  )
}

export default Releases