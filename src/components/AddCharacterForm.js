import { useState } from "react";

const AddCharacterForm = (props) => {
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    occupation: "",
    weapon: "",
    dept: false,
  });

  const updateValue = (target) => {
    setNewCharacter((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };
  return (
    <section>
      <form
        onSubmit={() => {
          props.createCharacter(newCharacter);
        }}
        action=""
      >
        <label htmlFor="name">Name</label>
        <input
          onChange={(event) => {
            updateValue(event.target);
          }}
          name="name"
          value={newCharacter.name}
          type="text"
        />
        <label htmlFor="occupation">Occupation</label>
        <input
          onChange={(event) => {
            updateValue(event.target);
          }}
          name="occupation"
          value={newCharacter.occupation}
          type="text"
        />
        <label htmlFor="weapon">Weapon</label>
        <input
          onChange={(event) => {
            updateValue(event.target);
          }}
          name="weapon"
          value={newCharacter.weapon}
          type="text"
        />
        <label htmlFor="dept">In dept</label>
        <input
          onChange={(event) => {
            updateValue(event.target);
          }}
          name="dept"
          value={newCharacter.dept}
          type="checkbox"
        />
      </form>
      <button className="py-2 bg-gray-400 px-4 rounded-md" type="submit">
        Create
      </button>
    </section>
  );
};

export default AddCharacterForm;
