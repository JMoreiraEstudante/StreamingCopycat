import { useState, useEffect, useDebugValue } from "react"

import Videos from "../components/video/Videos"
import Header from "../components/ui/Header"
import Layout from "../components/ui/Layout"
import classes from "./AllVideoPage.module.css"

//custom hook para display de video com um genero especifico
function useDisplayVideo(genero){
    const [videoGenero, setVideoGenero] = useState([])

    useEffect(() => {
        const getVideosGenero = async () => {
            const videosFromserver = await fetchVideosGenero()
            setVideoGenero(videosFromserver)
        }
        getVideosGenero()
    }, [])

    const fetchVideosGenero = async () => {
        const res = await fetch(`https://api-copycat.herokuapp.com/video/categoria/${genero}`)
        const data = await res.json()
        return data
    }

    useDebugValue(videoGenero ?? 'loading...')

    return videoGenero
}

const AllVideoPage = () => {
    const [videos, setVideos] = useState([])
        useEffect(() => {
        const getVideos = async () => {
            const videosFromserver = await fetchVideos()
            setVideos(videosFromserver)
        }

        getVideos()
    }, [])

    //get todos videos
    const fetchVideos = async () => {
        const res = await fetch('https://api-copycat.herokuapp.com/video')
        const data = await res.json()
        return data
    }

    return (
        <div className={classes.page}>
            <Header />
            <Layout>
                <h1>Todos</h1>
                <Videos videos={videos} />
                <h1>Ação</h1>
                <Videos videos={useDisplayVideo('Acao')} />
                <h1>Animação</h1>
                <Videos videos={useDisplayVideo('Animacao')} />
                <h1>Comédia</h1>
                <Videos videos={useDisplayVideo('Comedia')} />
                <h1>Policial</h1>
                <Videos videos={useDisplayVideo('Policial')} />
                <h1>Documentário</h1>
                <Videos videos={useDisplayVideo('Documentario')} />
                <h1>Drama</h1>
                <Videos videos={useDisplayVideo('Drama')} />
                <h1>Ficção Científica</h1>
                <Videos videos={useDisplayVideo('Ficcao Cientifica')} />
                <h1>Terror</h1>
                <Videos videos={useDisplayVideo('Terror')} />
                <h1>Família</h1>
                <Videos videos={useDisplayVideo('Familia')} />
                <h1>Romance</h1>
                <Videos videos={useDisplayVideo('Romance')} />
            </Layout>
        </div>
    )
}

export default AllVideoPage
