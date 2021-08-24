import { Route, Switch } from "react-router";
import { useContext } from "react"

import AllVideoPage from "./pages/AllVideoPage";
import SelectUserPage from "./pages/SelectUserPage";
import MyListPage from "./pages/MyListPage";
import UserContext from './store/user-context'
import {ListContextProvider} from './store/list-context'

function App() {
  const userCtx = useContext(UserContext)
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <SelectUserPage />
        </Route>
        <Route path='/video' exact>
          {userCtx.user.length === 0 
          ? <SelectUserPage /> 
          :<ListContextProvider><AllVideoPage /></ListContextProvider>}
        </Route>
        <Route path='/my-list' exact>
          {userCtx.user.length === 0 ? <SelectUserPage /> : <ListContextProvider><MyListPage /></ListContextProvider>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
