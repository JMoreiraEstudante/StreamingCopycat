import { createContext, useState, useContext, useEffect } from "react";
import UserContext from './user-context'

const ListContext = createContext({
    videos:[],
    loading:false,
    setList:(list) =>{},    
})

export function ListContextProvider(props){
    const userCtx = useContext(UserContext)
    const [loading,setLoading]=useState(false);
    const [videoSelected, setVideoSelected] = useState([]);

    useEffect(() => {
        const getList = async () => {
            setLoading(true)
            const listFromserver = await fetchList()
            if (listFromserver !== null) setVideoSelected(listFromserver.video)
            setLoading(false)
        }
        getList()
    }, [])

    function setList(list) {
        setVideoSelected(list)
    }

    //get list
    const fetchList = async () => {
        const res = await fetch(`https://api-copycat.herokuapp.com/lista/${userCtx.user}`)
        const data = await res.json()
        return data
    }

    const context = {
        videos:videoSelected,
        loading:loading,
        setList: setList,
    }

    return (
        <ListContext.Provider value={context}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContext