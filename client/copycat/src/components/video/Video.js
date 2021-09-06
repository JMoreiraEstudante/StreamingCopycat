import { useContext } from "react"
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import VideoContext from '../../store/video-context'
import classes from './Video.module.css'

const Video = ({ video, list, updateList }) => {
    const videoCtx = useContext(VideoContext)

    function toggleVideoSelected() {
        videoCtx.videoPick(video._id)
    }

    return (
        <div className={classes.video}>
            <Link to='/video-detail'>
                <img className={classes.videoImg} src={video.image} alt=" erro" onClick={toggleVideoSelected} />
            </Link>
            {list.includes(video._id)
                ? <FaStar onClick={() => updateList(video)} />
                : <FaRegStar onClick={() => updateList(video)} />}
        </div>
    )
}

export default Video
