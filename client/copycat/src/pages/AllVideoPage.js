import { useState, useEffect } from "react"

import Videos from "../components/video/Videos"
import Header from "../components/ui/Header"
import Layout from "../components/ui/Layout"
import classes from "./AllVideoPage.module.css"

const AllVideoPage = () => {
    const [videos, setVideos] = useState([])
    const [videosAcao, setVideosAcao] = useState([])
    const [videosAnimacao, setVideosAnimacao] = useState([])
    const [videosComedia, setVideosComedia] = useState([])
    const [videosPolicial, setVideosPolicial] = useState([])
    const [videosDocumentario, setVideosDocumentario] = useState([])
    const [videosDrama, setVideosDrama] = useState([])
    const [videosFiccaoCientifica, setVideosFiccaoCientifica] = useState([])
    const [videosTerror, setVideosTerror] = useState([])
    const [videosFamilia, setVideosFamilia] = useState([])
    const [videosRomance, setVideosRomance] = useState([])

    useEffect(() => {
        const getVideos = async () => {
            const videosFromserver = await fetchVideos()
            setVideos(videosFromserver)
        }

        const getVideosAcao = async () => {
            const videosFromserver = await fetchVideosAcao()
            setVideosAcao(videosFromserver)
        }

        const getVideosAnimacao = async () => {
            const videosFromserver = await fetchVideosAnimacao()
            setVideosAnimacao(videosFromserver)
        }

        const getVideosComedia = async () => {
            const videosFromserver = await fetchVideosComedia()
            setVideosComedia(videosFromserver)
        }

        const getVideosPolicial = async () => {
            const videosFromserver = await fetchVideosPolicial()
            setVideosPolicial(videosFromserver)
        }

        const getVideosDocumentario = async () => {
            const videosFromserver = await fetchVideosDocumentario()
            setVideosDocumentario(videosFromserver)
        }

        const getVideosDrama = async () => {
            const videosFromserver = await fetchVideosDrama()
            setVideosDrama(videosFromserver)
        }

        const getVideosFiccaoCientifica = async () => {
            const videosFromserver = await fetchVideosFiccaoCientifica()
            setVideosFiccaoCientifica(videosFromserver)
        }

        const getVideosTerror = async () => {
            const videosFromserver = await fetchVideosTerror()
            setVideosTerror(videosFromserver)
        }

        const getVideosFamilia = async () => {
            const videosFromserver = await fetchVideosFamilia()
            setVideosFamilia(videosFromserver)
        }

        const getVideosRomance = async () => {
            const videosFromserver = await fetchVideosRomance()
            setVideosRomance(videosFromserver)
        }

        getVideos()
        getVideosAcao()
        getVideosAnimacao()
        getVideosComedia()
        getVideosDocumentario()
        getVideosDrama()
        getVideosFamilia()
        getVideosFiccaoCientifica()
        getVideosPolicial()
        getVideosRomance()
        getVideosTerror()
    }, [])

    //get todos videos
    const fetchVideos = async () => {
        const res = await fetch('http://localhost:3001/video')
        const data = await res.json()
        return data
    }

    const fetchVideosAcao = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Acao')
        const data = await res.json()
        return data
    }

    const fetchVideosAnimacao = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Animacao')
        const data = await res.json()
        return data
    }

    const fetchVideosComedia = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Comedia')
        const data = await res.json()
        return data
    }

    const fetchVideosPolicial = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Policial')
        const data = await res.json()
        return data
    }

    const fetchVideosDocumentario = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Documentario')
        const data = await res.json()
        return data
    }

    const fetchVideosDrama = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Drama')
        const data = await res.json()
        return data
    }

    const fetchVideosFiccaoCientifica = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Ficcao Cientifica')
        const data = await res.json()
        return data
    }

    const fetchVideosTerror = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Terror')
        const data = await res.json()
        return data
    }

    const fetchVideosFamilia = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Familia')
        const data = await res.json()
        return data
    }

    const fetchVideosRomance = async () => {
        const res = await fetch('http://localhost:3001/video/categoria/Romance')
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
                <Videos videos={videosAcao} />
                <h1>Animação</h1>
                <Videos videos={videosAnimacao} />
                <h1>Comédia</h1>
                <Videos videos={videosComedia} />
                <h1>Policial</h1>
                <Videos videos={videosPolicial} />
                <h1>Documentário</h1>
                <Videos videos={videosDocumentario} />
                <h1>Drama</h1>
                <Videos videos={videosDrama} />
                <h1>Ficção Científica</h1>
                <Videos videos={videosFiccaoCientifica} />
                <h1>Terror</h1>
                <Videos videos={videosTerror} />
                <h1>Família</h1>
                <Videos videos={videosFamilia} />
                <h1>Romance</h1>
                <Videos videos={videosRomance} />
            </Layout>
        </div>
    )
}

export default AllVideoPage
