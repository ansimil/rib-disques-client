'use client';
import './BandcampPlayer.css';


const BandcampPlayer = ({release}) => {
  return (
    <div className='bandcamp-player-container'>
        <iframe className='bandcamp-iframe' src={release.embeddedPlayerUrl} seamless></iframe>
    </div>
  )
}

export default BandcampPlayer