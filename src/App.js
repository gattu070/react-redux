import HomeContainer from './containers/HomeContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import NavbarContainer from './containers/NavbarContainer';

function App() {
  return (
    <>
      <NavbarContainer />
      <HomeContainer />
    </>
  );
}

export default App;
