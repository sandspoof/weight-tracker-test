import React, { useState } from "react";

import "./add_weight.css";

import { ErrorAlert } from "../PageAlert/pageAlert";

const AddWeight = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setInputValue(value);
  }

  function onUpdate(value: string) {
    if (!value) {
      setError("No weight specified!");
      return;
    }

    onSubmit(value);
    setError("");
    setInputValue("");
  }

  return (
    <div className="add-weight">
      <h3 className="heading">Add a new weight here</h3>
      <div className="inline-input">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => onChange(e)}
          placeholder="Type here..."
        />
        <button
          className="button-primary"
          title="Add"
          onClick={() => onUpdate(inputValue)}
        >
          Add
        </button>
      </div>
      {error && <ErrorAlert message={error} />}
    </div>
  );
};

export default AddWeight;
