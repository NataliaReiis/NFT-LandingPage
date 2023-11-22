import ScrollToTop from "./components/ScrollToTop";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Free from "./components/Free";
import Clients from "./components/Clients";
import SuperRare from "./components/SuperRare";
import Realese from "./components/Realese";
import Like from "./components/Like";
import Signup from "./components/Signup";
import Footer from "./components/Footer";


export default function App() {
  
  return (
    <div className="container-app">
      <ScrollToTop />
      <NavBar />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Realese />
      <Like />
      <Signup />
      <Footer />
    </div>
  )
}


