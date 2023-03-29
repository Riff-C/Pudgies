import { useState, useEffect } from 'react';
import Login from './Components/Login/Login.js';
import Loading from './Components/Loading/Loading.js';
import MainMenu from './Components/MainMenu/MainMenu.js';

function App() {
  const [loading, setLoading] = useState(true)
  const [route, setRoute] = useState("")
  const [player, setPlayer] = useState(null)

  function toggleLoading () {
    let newLoading = !loading
    setLoading(newLoading);
  }

  function changePlayer(url) {
    fetch(url)
      .then(data => data.json())
      .then(newPlayer => setPlayer(newPlayer))
      .then(toggleLoading())
  }

  useEffect(() => {
    if (player) {
      toggleLoading()
      setRoute("menu");
    } else {
      toggleLoading()
      setRoute("login")
    }
  }, [])

  if (loading) {
    return <Loading />
  }

  if (route === "login") {
    return <Login changePlayer={changePlayer}/>
  }

  if (route === "menu") {
    return <MainMenu />
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;