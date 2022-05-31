import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="flex flex-column f3 ml4">
        <Link className="mb2" to={"/"}>Home</Link>
        <Link className="mb2" to={"/explore"}>Explore</Link>
        <Link to={"/profile"}>Profile</Link>
    </div>
  )
}

export default Sidebar