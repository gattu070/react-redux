import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './containers/HomeContainer';
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
