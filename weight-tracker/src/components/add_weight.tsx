import React, { useState } from "react";

const AddWeight = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
    const [inputValue, setInputValue] = useState<string>('');

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setInputValue(value);
    }

    function onUpdate(value: string) {
        onSubmit(value);
        setInputValue('');
    }

    return (
        <>
            <label>Add a new weight here</label>
            <input type="number" value={inputValue} onChange={(e) => onChange(e)} placeholder="Type here..."/>
            <button title="Add" onClick={() => onUpdate(inputValue)}>Add</button>
        </>
    )
}

export default AddWeight;