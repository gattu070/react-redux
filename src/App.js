import './App.css';
import HomeContainer from './containers/HomeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <HomeContainer />
    </>
  );
}

export default App;
