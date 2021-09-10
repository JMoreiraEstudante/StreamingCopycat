import { Route, Switch } from "react-router";
import { useContext } from "react"

import AllVideoPage from "./pages/AllVideoPage";
import SelectUserPage from "./pages/SelectUserPage";
import MyListPage from "./pages/MyListPage";
import VideoPage from "./pages/VideoPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/ui/Layout";
import UserContext from './store/user-context'
import { LoginContextProvider } from './store/login-context'
import { ListContextProvider } from './store/list-context'
import { VideoContextProvider } from './store/video-context'

function App() {
  const userCtx = useContext(UserContext)
  return (
    <div>
      <Switch>
        <LoginContextProvider>
        <VideoContextProvider>
          <Route path='/' exact>
            <Layout><LoginPage /></Layout>
          </Route>
          <Route path='/conta' exact>
            <Layout><SelectUserPage /></Layout>
          </Route>
          <Route path='/video' exact>
            {userCtx.user.length === 0
              ? <Layout><LoginPage /></Layout>
              : <ListContextProvider> <AllVideoPage /></ListContextProvider>}
          </Route>
          <Route path='/my-list' exact>
            {userCtx.user.length === 0 ? <Layout><LoginPage /></Layout> : <ListContextProvider><MyListPage /></ListContextProvider>}
          </Route>
          <Route path='/video-detail' exact>
            {userCtx.user.length === 0 ? <Layout><LoginPage /></Layout> : <ListContextProvider><VideoPage /></ListContextProvider>}
          </Route>
        </VideoContextProvider>
        </LoginContextProvider>
      </Switch>
    </div>
  );
}

export default App;
