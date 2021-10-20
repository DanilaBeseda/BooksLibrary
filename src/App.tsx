import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { useTypedSelector } from "./hooks/useTypedSelector";


function App() {
  const { loading } = useTypedSelector(state => state.card)

  return (
    <>
      <Header />
      <CardList />
      {loading ? <Loader /> : null}
    </>
  );
}

export default App;
