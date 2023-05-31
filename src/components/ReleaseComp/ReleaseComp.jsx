import BandcampPlayer from '../BandcampPlayer/BandcampPlayer'
import './ReleaseComp.css'

const ReleaseComp = ({release}) => {
    return (       
        <details className="release-comp-details">
            <summary className="release-comp-summary">
                <div className='release-artist-name release-title'>{release.artistName}</div>
                <div className='release-album-name release-title'>{release.releaseName}</div>
                <div className='release-format release-title'>{release.format}</div>
                <div className='release-year release-title'>{release.releaseYear}</div>
            </summary>
                <div className='release-comp-details-inner'>
                    <BandcampPlayer release={release}/>
                    <div>
                        <ul className='release-tracklist-list'>
                            {release.tracklist.map(track => {
                                return (
                                    <li className='release-tracklist-list__element'>{track.trackName}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                
            
        </details>  
    )
    
}

export default ReleaseComp