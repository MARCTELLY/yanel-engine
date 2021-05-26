import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreens from "./screens/HomeScreens";
import ProductScreen from "./screens/ProductScreen";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="container">
          <Route path="/" component={HomeScreens} exact />
          <Route path="/products/:id" component={ProductScreen} exact />
        </div>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
