import { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./main.css";

import AddWeight from "../../components/AddWeight/add_weight";
import CardWrapper from "../../components/CardWrapper/cardWrapper";

const initialWeights = ["55", "85", "110"];

// Display the list of weights.
function weights(data: Array<string>): ReactNode {
  if (!data || Array.isArray(data) == false || data.length == 0)
    return <p>No weights to display</p>;

  return data.map((weight: string, index: number) => (
    <p key={index}>{weight} kg</p>
  ));
}

const Main = () => {
  const navigate = useNavigate();
  const [allWeights, setAllWeights] = useState<Array<string>>(initialWeights);
  const [editMode, setEditMode] = useState<boolean>(false);

  function isLoggedIn() {
    const response = sessionStorage.getItem("authenticated");

    if (!response || !JSON.parse(response)) navigate("/login");
  }

  function onSubmit(newValue: string) {
    if (!newValue) return;

    setAllWeights([...allWeights, newValue]);
  }

  function addNew() {
    setEditMode(true);
  }

  useEffect(() => {
    isLoggedIn();
  });

  return (
    <>
      <div className="card">
        <h1 className="heading">Weight Tracker</h1>
        <div className="list">{weights(allWeights)}</div>
      </div>
      {!editMode && (
        <button
          className="button-primary"
          title="Add new weight"
          onClick={addNew}
        >
          Add another...
        </button>
      )}
      {editMode && (
        <CardWrapper onClosed={() => setEditMode(false)}>
          <AddWeight onSubmit={onSubmit} />
        </CardWrapper>
      )}
    </>
  );
};

export default Main;
