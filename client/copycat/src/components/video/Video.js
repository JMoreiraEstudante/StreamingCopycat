import {FaStar, FaRegStar} from 'react-icons/fa'


const Video = ({video, list, updateList}) => {
    return (
        <div>
        <h2>
            {video.nome}
            {list.includes(video._id) 
                ? <FaStar onClick={() => updateList(video)}/> 
                : <FaRegStar onClick={() => updateList(video)}/>}
        </h2>

        </div>
    )
}

export default Video
