import { createContext, useState } from "react";

const VideoContext = createContext({
    video: '',
    videoPick: (id) => {}    
})

export function VideoContextProvider(props){
    const [videoSelected, setVideoSelected] = useState([]);

    function videoPick(id) {
        setVideoSelected(id)
    }

    const context = {
        video: videoSelected,
        videoPick: videoPick,
    }

    return (
        <VideoContext.Provider value={context}>
            {props.children}
        </VideoContext.Provider>
    )
}

export default VideoContext