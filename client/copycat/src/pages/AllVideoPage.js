import { useContext, useState, useEffect } from "react"

import UserContext from '../store/user-context'
import Videos from "../components/video/Videos"
import { Link } from "react-router-dom"

const AllVideoPage = () => {
    const userCtx = useContext(UserContext)
    const [videos, setVideos] = useState([])
    const [user, setUser] = useState({})
    

    useEffect(() => {
        const getVideos = async () => {
            const videosFromserver = await fetchVideos()
            setVideos(videosFromserver)
        }

        const getUser = async () => {
            const userFromServer = await fetchUser()
            setUser(userFromServer)
        }

        getUser()
        getVideos()
    }, [])

    //get todos videos
    const fetchVideos = async () => {
        const res = await fetch('http://localhost:3001/video')
        const data = await res.json()
        return data
    }

    //get user
    const fetchUser = async () => {
        const res = await fetch(`http://localhost:3001/usuario/${userCtx.user}`)
        const data = await res.json()
        return data
    }

    return (
        <div>
            <p>{user.nome}</p>
            <Link to='/my-list'>Minha Lista</Link>
            <h1>Tela para visualizar todos os videos separados por categoria</h1>
            <Videos videos={videos}/>
        </div>
    )
}

export default AllVideoPage
