import './App.css';
import {Switch, Route} from "react-router-dom"
import AddItem from "./components/AddItem"

/* Components */
import ShoppingList from "./components/ShoppingList"

function App() {
  return (
    <div style={{
      marginLeft: 20,
      marginTop: 10,
    }}>
      <Switch>
        <Route exact path="/">
          <ShoppingList />
        </Route>
        <Route path={"/create"}>
          <AddItem />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
