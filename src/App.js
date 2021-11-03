import { useEffect, useState } from "react";
import { Route } from "react-router";
import axios from "axios";
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get("https://github.com/janbolotbatyrov/react-pizza-1/blob/master/public/db.json").then(({ data }) => { 
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
