'use client';

import BandcampPlayer from '../BandcampPlayer/BandcampPlayer'
import uuid from 'react-uuid';
import Link from 'next/link';
import './ReleaseComp.css';
import ColorThief from 'colorthief/dist/color-thief.mjs';
import { useEffect, useRef } from 'react';
import isDarkColor from 'is-dark-color';


const ReleaseComp = ({ release, idx, openStates, setOpenStates }) => {
    const imgRef = useRef(null)
    const bgRef = useRef(null)
    let colorThief = new ColorThief();
    
    const getTheColor = (palette) => {
        const r = palette[0]
        const g = palette[1]
        const b = palette[2]

        bgRef.current.style.backgroundColor = `rgb(${r}, ${g}, ${b}, 0.7)`
        
        if (isDarkColor(rgbToHex(r,g,b))){
            const parentEl = document.getElementById(`release${idx}`)
            parentEl.firstChild.classList.add('dark-summary')
            bgRef.current.classList.add('dark-bg')
            let btns = bgRef.current.querySelectorAll('.btn')
            btns.forEach(btn => {
                btn.classList.add('light-btn')
            })
        }
        else {
            let btns = bgRef.current.querySelectorAll('.btn')
            btns.forEach(btn => {
                btn.classList.add('dark-btn')
            })
        }
    }
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    
    useEffect(()=>{
        const palette = colorThief.getColor(imgRef.current)
        getTheColor(palette)
    },[])

    return (       
        <details
        id={`release${idx}`}
        className="release-comp-details">
            <summary 
            onClick={()=> {
                const color = colorThief.getColor(imgRef.current)
                const parentEl = document.getElementById(`release${idx}`)
                if (parentEl.open) {
                    parentEl.firstChild.style.backgroundColor = "white"
                }
                else {
                    parentEl.firstChild.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
                }
                const releaseEls = document.getElementsByClassName("release-comp-details")
                const keys = Object.keys(releaseEls)
                keys.forEach(key => {
                        if (releaseEls[key].id !== `release${idx}`){
                            releaseEls[key].open = false
                            releaseEls[key].firstChild.style.backgroundColor = "white"
                        }
                })
            }}
            className="release-comp-summary"
            >
                <div className='release-release-id release-title'>{release.releaseId}</div>
                <div className='release-artist-name release-title'>{release.artistName}</div>
                <div className='release-album-name release-title'>{release.releaseName}</div>
                <div className='release-format release-title'>{release.format}</div>
                <div className='release-year release-title'>{release.releaseYear}</div>
            </summary>
                <div ref={bgRef} className='release-comp-details-inner'>
                    <div className='release-comp-artwork-container'>
                        <img
                        ref={imgRef} 
                        className='release-artwork__img' 
                        src={release.artworkUrl} 
                        alt={`${release.releaseName}-artwork`} 
                        crossOrigin='Anonymous'    
                        />
                    </div>
                    {/* <BandcampPlayer release={release}/> */}
                    <div className='release-comp-tracklist-container'>
                        <div className='release-comp-tracklist-inner'>
                            <ol className='release-tracklist-list'>
                                {release.tracklist.map(track => {
                                    return (
                                        <li key={uuid()} className='release-tracklist-list__element'>{track.trackName}</li>
                                    )
                                })}
                            </ol>
                            <Link className='release-buy-btn btn' href={release.bandcampUrl} target="_blank" rel="noopener noreferrer">Buy</Link>
                        </div>
                        
                    </div>
                </div>
                
            
        </details>  
    )
    
}

export default ReleaseComp