import React from 'react'

const BandcampPlayer = () => {
  return (
    <div className='bandcamp-player-container'>
        <iframe style={{"border": "0", "width": "400px", "height": "208px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1598737731/size=large/bgcol=ffffff/linkcol=333333/artwork=small/transparent=true/" seamless><a href="https://ribdisques.bandcamp.com/album/rib-disques-no-1">Rib Disques No. 1 by Rib Disque Band</a></iframe>
    </div>
  )
}

export default BandcampPlayer