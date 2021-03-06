import { useEffect, useState } from "react";
import { Route } from "react-router";
import axios from "axios";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // https://pizza-react-1-dusky.vercel.app/
    axios.get("http://localhost:3000/db.json").then(({ data }) => { 
      setPizzas(data.pizzas)
     })
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
