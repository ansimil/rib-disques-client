'use client';

import BandcampPlayer from '../BandcampPlayer/BandcampPlayer'
import uuid from 'react-uuid';
import Link from 'next/link';
// import { getAverageColor } from 'fast-average-color-node';
import { useRef } from 'react';
import './ReleaseComp.css'



const ReleaseComp = ({ release, idx }) => {
    // let fac = new fastColor();
    const ref = useRef(null)
    // async function printAverageColor() {
    //     const color = await getAverageColor(release.artworkUrl);
    //     console.log(color);
    // };
    
    // printAverageColor();
    // const container = ref.current;

    // fac.getColorAsync(release.artworkUrl)
    // .then(color => {
    //     if (container) {
    //         container.style.backgroundColor = color.rgba;
    //         container.style.color = color.isDark ? '#fff' : '#000';
    //     }
        
    // })
    // .catch(e => {
    //     console.log(e);
    // });

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
                <div className='release-comp-details-inner' ref={ref}>
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