import { useState, useEffect } from 'react';
import Login from './Components/Login/Login.js';
import Loading from './Components/Loading/Loading.js';
import MainMenu from './Components/MainMenu/MainMenu.js';

function App() {
  const [loading, setLoading] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const [player, setPlayer] = useState(null)

  function toggleLoading () {
    let newLoading = !loading
    setLogin(newLoading);
  }

  function getPlayer (url) {
    fetch(url)
      .then(setPlayer(newPlayer))
  }

  if (loading) {
    return <Loading />
  }

  if (!player) {
    return <Login loading={loading} toggleLoading={toggleLoading}
      player={player} getPlayer={getPlayer}/>
  }

  if (mainMenu) {
    return <MainMenu />
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;