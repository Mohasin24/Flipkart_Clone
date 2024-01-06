import Header from "./components/header/Header";
import Home from "./components/home/Home";
import DataContextProvider from "./context/DataContext";

function App() {

  return (
    <DataContextProvider>
      <Header />
      <Home />
    </DataContextProvider>
  );
}

export default App;
