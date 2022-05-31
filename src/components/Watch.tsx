import { useParams } from "react-router-dom"
import videos from '../data.json'

function Watch() {

    const { id } = useParams();
    const video = videos.find(v => v.id === id)

    if(!video) {
        return <p>No video found...</p>
    }

  return (
    <div>
        {video.title}
    </div>
  )
}

export default Watch