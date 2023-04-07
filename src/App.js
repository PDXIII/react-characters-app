import axios from "axios";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Home from "./routes/Home";
import CharacterDetails from "./routes/CharacterDetails";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(process.env.REACT_APP_APIURL + "characters/")
      .then((response) => {
        console.log(response.data);
        setCharacters(response.data);
      })
      .catch((e) => console.error(e));
  };

  const renderCharacterList = () => {
    return (
      <section>
        {characters.map((characterDetails, index) => {
          return (
            <div key={index}>
              <h2>{characterDetails.name}</h2>
              <p>
                Occupation: {characterDetails.occupation} <br />
                Weapon: {characterDetails.weapon}
              </p>
              <Link
                className="py-2 bg-gray-400 px-4 rounded-md"
                to={`/characters/${characterDetails.id}`}
              >
                More details
              </Link>
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <div className="App">
      <Header />
      {/* <Route path="/" element={<Home characters={characters} />} /> */}

      <Routes>
        <Route
          path="/"
          element={characters ? renderCharacterList() : <p>loading....</p>}
        />
        <Route
          path="/characters/:characterId"
          element={<CharacterDetails loadData={loadData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
