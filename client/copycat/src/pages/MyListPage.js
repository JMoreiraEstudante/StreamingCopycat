import { useState, useEffect, useContext } from "react"
import { FaStar } from 'react-icons/fa'

import Videos from "../components/video/Videos"
import UserContext from "../store/user-context"
import Header from "../components/ui/Header"
import Layout from "../components/ui/Layout"
import classes from "./MyListPage.module.css"

const MyListPage = () => {
    const userCtx = useContext(UserContext)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getVideos = async () => {
            const videosFromserver = await fetchVideos()
            const listFromServer = await fetchList()
            const myList = videosFromserver.filter((video) => {
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
            <Header />
            <Layout>
                <div className={classes.page}>
                    <div className={classes.favorito}>
                        <h1> <FaStar /> Minha Lista <FaStar /></h1>
                    </div>
                    <Videos videos={videos} />
                </div>
            </Layout>
        </div>
    )
}

export default MyListPage
