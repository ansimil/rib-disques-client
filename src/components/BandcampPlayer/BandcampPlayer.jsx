'use client';
import './BandcampPlayer.css';


const BandcampPlayer = ({release}) => {
  return (
    <div className='bandcamp-player-container'>
        <iframe style={{"border": "0", "width": "400px", "height": "208px"}} src={release.embeddedPlayerUrl} seamless><a href={release.bandcampUrl}>Rib Release</a></iframe>
    </div>
  )
}

export default BandcampPlayer