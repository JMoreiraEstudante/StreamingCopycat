import {useContext } from "react"

import Video from "./Video"
import ListContext from "../../store/list-context"
import UserContext from "../../store/user-context"

const Videos = (props) => {
    const listCtx = useContext(ListContext)
    const userCtx = useContext(UserContext)

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
    if(!listCtx.loading)
        list = listCtx.videos
    return (
        <div>
            {props.videos.map((video) => {
               return <Video key={video._id} video={video} list={list} updateList={updateList}/>
            })}
        </div>
    )
}

export default Videos
