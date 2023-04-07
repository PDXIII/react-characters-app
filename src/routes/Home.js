import { Link } from "react-router-dom";

const Home = (props) => {
  const renderCharacterList = () => {
    return props.characters.map((characterDetails, index) => {
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
    });
  };

  return (
    <section>
      {props.characters ? renderCharacterList() : <p>… loading!</p>}
    </section>
  );
};

export default Home;
