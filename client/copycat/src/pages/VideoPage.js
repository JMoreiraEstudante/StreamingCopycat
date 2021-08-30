import { useContext, useState, useEffect } from "react"
import { Container } from 'react-bootstrap';

import Header from "../components/ui/Header"
import Layout from "../components/ui/Layout"
import VideoContext from "../store/video-context"
import classes from './VideoPage.module.css'

const VideoPage = (props) => {
    const videoCtx = useContext(VideoContext)
    const [video, setVideo] = useState({})

    useEffect(() => {
        const getVideo = async () => {
            const videoFromserver = await fetchVideo()
            setVideo(videoFromserver)
        }

        getVideo()
    }, [])

    //get video
    const fetchVideo = async () => {
        const res = await fetch(`http://localhost:3001/video/id/${videoCtx.video}`)
        const data = await res.json()
        return data
    }

    return (
        <div>
            <Header />
            <Layout>
                <Container className={classes.page}>
                    <h1 className={classes.center}>{video.nome}</h1>
                    <div className={classes.descricao}>
                        <img src={video.image} alt=" erro" />
                        <p>{video.descricao}</p>
                    </div>
                </Container>
            </Layout>
        </div>
    )
}

export default VideoPage
