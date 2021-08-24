import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import Videos from "../components/video/Videos"
import UserContext from "../store/user-context"

const MyListPage = () => {
    const userCtx = useContext(UserContext)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () => {
            const videosFromserver = await fetchVideos()
            const listFromServer = await fetchList()
            const myList = videosFromserver.filter((video)=>{
                return listFromServer.video.includes(video._id)
            })
            setVideos(myList)
        }
        getVideos()
    }, [])

    //get todos videos
    const fetchVideos = async () => {
        const res = await fetch('http://localhost:3001/video')
        const data = await res.json()
        return data
    }

    //get list
    const fetchList = async (id) => {
        const res = await fetch(`http://localhost:3001/lista/${userCtx.user}`)
        const data = await res.json()
        return data
    }

    return (
        <div>
            <Link to='/video'>Videos</Link>
            <h1>Tela para visualizar a lista do usuário</h1>
            <Videos videos={videos}/>
        </div>
    )
}

export default MyListPage
