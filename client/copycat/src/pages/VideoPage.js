import { useContext, useState, useEffect } from "react"
import { Container, Card } from 'react-bootstrap';

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
        console.log(videoCtx)
        const res = await fetch(`https://api-copycat.herokuapp.com/video/id/${videoCtx.video}`)
        const data = await res.json()
        return data
    }

    return (
        <div>
            <Header />
            <Layout>
                <Container className={classes.page}>
                    <div className={classes.descricao}>
                        <img src={video.image} alt=" erro" />
                        <Card style={
                            {   
                                width: '40vw', 
                                minWidth: '320px',
                                backgroundColor: 'white',
                                opacity: '0.9',
                            }
                        }>
                            <Card.Body>
                                <Card.Title> <h2 style={{textAlign: 'center'}}>{video.nome}</h2></Card.Title>
                                <Card.Text>{video.descricao}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </Layout>
        </div>
    )
}

export default VideoPage
