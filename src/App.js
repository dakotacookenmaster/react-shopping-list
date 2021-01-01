import './App.css';
import {Switch, Route} from "react-router-dom"
import AddItem from "./components/AddItem"
import UpdateItem from "./components/UpdateItem"

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
        <Route path="/create">
          <AddItem />
        </Route>
        <Route path="/update/:id">
          <UpdateItem />
        </Route>
        <Route path="/404">
          <ShoppingList /> {/* Update Later */}
        </Route>
      </Switch>
    </div>
  )
}

export default App;
