import './App.css';
import Header from './Components/Navbar';
import Slider from './Components/Slider';
import Welcome from './Components/Welcome';
import Currentevents from './Components/Currentevents';
import Footer from './Components/Footer';
import Credit from './Components/Credit';
import Quote from './Components/Quote';
import Arti from './Components/Arti';
function App() {
  return (
    <>
    <Header />
    <Slider/>
    <Welcome/>
    <Currentevents/>
    <Arti/>
    <Quote/>
    <Footer/>
    <Credit/>
    </>
  );
}

export default App;
