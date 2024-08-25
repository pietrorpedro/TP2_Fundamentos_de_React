import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import "./style.css";

export default function App() {
  return (
    <div className="layout6">
      <Header />
      <div className="content">
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
