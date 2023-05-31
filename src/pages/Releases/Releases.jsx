import './Releases.css'
import ReleaseComp from '@/components/ReleaseComp/ReleaseComp'
import releases from '../../release.json'

const Releases = () => {
  return (
    <div className='releases-container'>
        {releases.map(release => {
          return (
            <ReleaseComp release={release}/>
          )
        })}
    </div>
  )
}

export default Releases