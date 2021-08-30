import { useContext } from "react"
import {FaStar, FaRegStar} from 'react-icons/fa'
import { Link } from 'react-router-dom'

import VideoContext from '../../store/video-context'
import classes from './Video.module.css'

const Video = ({video, list, updateList}) => {
    const videoCtx = useContext(VideoContext)

    function toggleVideoSelected() {
        videoCtx.videoPick(video._id)
    }

    return (
        <Link className={classes.video} to='/video-detail' onClick={toggleVideoSelected}>
            <img src={video.image} alt=" erro" />
            {list.includes(video._id) 
                ? <FaStar onClick={() => updateList(video)}/> 
                : <FaRegStar onClick={() => updateList(video)}/>}
        </Link>
    )
}

export default Video
