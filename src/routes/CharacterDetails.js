import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const CharacterDetails = (props) => {
  const { characterId } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    loadData();
  }, [characterId]);

  const loadData = () => {
    axios
      .get(process.env.REACT_APP_APIURL + "characters/" + characterId)
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((e) => console.error(e));
  };

  const deleteCharacter = () => {
    axios
      .delete(process.env.REACT_APP_APIURL + "characters/" + details.id)
      .then((response) => {
        console.log(response);
        props.loadData();
        navigate("/");
      })
      .catch((e) => console.error(e));
  };

  const renderDetails = () => {
    return (
      <div key={details.id}>
        <h2>{details.name}</h2>
        <p>
          Occupation: {details.occupation} <br />
          Weapon: {details.weapon}
        </p>
        <button
          className="py-2 bg-gray-400 px-4 rounded-md"
          onClick={deleteCharacter}
        >
          Delete
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Details of Character .... {characterId}</h1>
      {details ? renderDetails() : <p>loading …</p>}
      <Link to="/">Back</Link>
    </div>
  );
};

export default CharacterDetails;
