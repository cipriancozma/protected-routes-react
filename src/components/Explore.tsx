import { Link, useSearchParams } from "react-router-dom"
import videos from "../data.json";

// const videos = [
//     {
//         id: "1",
//         title: "Learn React"
//     },
//     {
//         id: "2",
//         title: "React Router"
//     },
//     {
//         id: "3",
//         title: "Try CSS"
//     }
// ]

function Videos({ query }: { query: string | null }) {
    const filteredVideos = videos.filter(v => v.title.toLowerCase().includes(query ?? ''))

    return <div className="flex flex-column">
        {
            filteredVideos.map(v => <Link key={v.id} to={`/watch/${v.id}`}>{v.title}</Link>)
        }
    </div>
}

function Explore() {
    const [search, setSearch] = useSearchParams();

  return (
      <div>
        <input onChange={(e) => {
            const query = e.target.value;
            if(query) {
                setSearch({query})
            } else {
                setSearch({})
            }
        }} type={"text"} placeholder="Search for a video..." value={search.get('query') ?? ''} />
        <Videos query={search.get('query')} />
      </div>
  )
}

export default Explore