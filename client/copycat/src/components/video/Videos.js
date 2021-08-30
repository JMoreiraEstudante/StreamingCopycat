import { useContext } from "react"
import Slider from "react-slick";

import Video from "./Video"
import ListContext from "../../store/list-context"
import UserContext from "../../store/user-context"
import classes from './Videos.module.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Videos = (props) => {
    const listCtx = useContext(ListContext)
    const userCtx = useContext(UserContext)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };

    //get list
    const fetchList = async (id) => {
        const res = await fetch(`http://localhost:3001/lista/${userCtx.user}`)
        const data = await res.json()
        return data
    }

    const updateList = async (video) => {
        const userList = await fetchList()
        let index = userList.video.findIndex((v) => {
            return v === video._id
        })
        if (index === -1) userList.video.push(video._id)
        else userList.video.splice(index, 1);
        const res = await fetch(`http://localhost:3001/lista/update/${userList._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userList)
        })
        const data = await res.json()
        listCtx.setList(data.video)
    }

    let list = []
    if (!listCtx.loading)
        list = listCtx.videos
    return (

        <div>
            {props.videos.length > 6
                ? <div className={classes.videosMaior6}>
                    <Slider {...settings}>
                        {props.videos.map((video) => {
                            return <Video key={video._id} video={video} list={list} updateList={updateList} />
                        })}
                    </Slider>
                </div>
                :<div className={classes.videosMenor6}>
                    {props.videos.map((video) => {
                        return <Video key={video._id} video={video} list={list} updateList={updateList} />
                    })}
                </div>
            }
        </div>
    )
}

export default Videos
