import { Route, Switch } from "react-router";
import { useContext } from "react"

import AllVideoPage from "./pages/AllVideoPage";
import SelectUserPage from "./pages/SelectUserPage";
import MyListPage from "./pages/MyListPage";
import VideoPage from "./pages/VideoPage";
import Layout from "./components/ui/Layout";
import UserContext from './store/user-context'
import { ListContextProvider } from './store/list-context'
import { VideoContextProvider } from './store/video-context'

function App() {
  const userCtx = useContext(UserContext)
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Layout><SelectUserPage /></Layout>
        </Route>
        <Route path='/video' exact>
          {userCtx.user.length === 0
            ? <Layout><SelectUserPage /></Layout>
            : <VideoContextProvider><ListContextProvider> <AllVideoPage /></ListContextProvider></VideoContextProvider>}
        </Route>
        <Route path='/my-list' exact>
          {userCtx.user.length === 0 ? <Layout><SelectUserPage /></Layout> : <VideoContextProvider><ListContextProvider><MyListPage /></ListContextProvider></VideoContextProvider>}
        </Route>
        <Route path='/video-detail' exact>
          {userCtx.user.length === 0 ? <Layout><SelectUserPage /></Layout> : <VideoContextProvider><ListContextProvider><VideoPage /></ListContextProvider></VideoContextProvider>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
