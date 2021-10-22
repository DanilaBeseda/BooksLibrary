import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { Route, Switch } from 'react-router-dom'
import { Card } from "./components/Card";
import { useEffect } from "react";
import { useActions } from "./hooks/useAction";

function App() {
  const pagination: number = 20
  const { loading } = useTypedSelector(state => state.card)
  const { error } = useTypedSelector(state => state.card)
  const { title, category, sortingMethod } = useTypedSelector(state => state.search)
  const { fetchCards, clearError } = useActions()

  useEffect(() => {
    if (title) {
      fetchCards(title, category, sortingMethod, pagination)
    }
  }, [title, category, sortingMethod])

  useEffect(() => {
    if (error) {
      alert(error)
    }
    clearError()
  }, [error])

  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/'>
          <CardList pagination={pagination} />
        </Route>
        <Route path='/:id'>
          <Card />
        </Route>
      </Switch>

      {loading ? <Loader /> : null}
    </>
  );
}

export default App;
