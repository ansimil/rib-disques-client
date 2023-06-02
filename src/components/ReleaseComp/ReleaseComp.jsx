'use client';

import BandcampPlayer from '../BandcampPlayer/BandcampPlayer'
import uuid from 'react-uuid';
import Link from 'next/link';
import './ReleaseComp.css'

const ReleaseComp = ({ release, idx }) => {
    return (       
        <details
        id={`release${idx}`}
        className="release-comp-details">
            <summary 
            onClick={()=> {
                const releaseEls = document.getElementsByClassName("release-comp-details")
                const keys = Object.keys(releaseEls)
                keys.forEach(key => {
                        if (releaseEls[key].id !== `release${idx}`){
                            releaseEls[key].open = false
                        }
                })
            }}
            className="release-comp-summary"
            >
                <div className='release-artist-name release-title'>{release.artistName}</div>
                <div className='release-album-name release-title'>{release.releaseName}</div>
                <div className='release-format release-title'>{release.format}</div>
                <div className='release-year release-title'>{release.releaseYear}</div>
            </summary>
                <div className='release-comp-details-inner'>
                    <div className='release-comp-artwork-container'>
                        <img className='release-artwork__img' src={release.artworkUrl} alt={`${release.releaseName}-artwork`} />
                    </div>
                    <BandcampPlayer release={release}/>
                    <div className='release-comp-tracklist-container'>
                        <div className='release-comp-tracklist-inner'>
                            <ol className='release-tracklist-list'>
                                {release.tracklist.map(track => {
                                    return (
                                        <li key={uuid()} className='release-tracklist-list__element'>{track.trackName}</li>
                                    )
                                })}
                            </ol>
                            <Link className='release-buy-btn' href={release.bandcampUrl} target="_blank" rel="noopener noreferrer">Buy</Link>
                        </div>
                        
                    </div>
                </div>
                
            
        </details>  
    )
    
}

export default ReleaseComp