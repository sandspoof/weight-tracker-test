import { ReactNode } from 'react';
import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './main.css'

import AddWeight from '../../components/add_weight'

const initialWeights = ["55", "85", "110"];

// Display the list of weights.
function weights(data: Array<string>): ReactNode {
    if (!data || Array.isArray(data) == false || data.length == 0) return <p>No weights to display</p>

    return (
        data.map((weight: string, index: number) => <p key={index}>{weight} kg</p>)
    )
}

type CardProps = {
    children: string | JSX.Element | JSX.Element[],
    onClosed?: () => void
}

const CardWrapper = ({ children, onClosed }: CardProps) => {
    const [isClosed, setIsClosed] = useState<boolean>(false);

    if (isClosed) return null;

    function onClose() {
        setIsClosed(true)
        if (onClosed) onClosed();
    }

    return (
        <div className="card">
            <span className="card-close" onClick={onClose}>x</span>
            {children}        
        </div>
    )
}

const Main = () => {
  const [allWeights, setAllWeights] = useState<Array<string>>(initialWeights)
  const [editMode, setEditMode] = useState<boolean>(false);

  function onSubmit(newValue: string) {
    if (!newValue) return;

    setAllWeights([...allWeights, newValue]);
  }

  function addNew() {
    setEditMode(true);
  }

  return (
    <>
        <h1 className="text-3xl font-bold underline">
            Weight Tracker
        </h1>
        <div className="list">
            {weights(allWeights)}
        </div>
        {!editMode && <button title="Add new weight" onClick={addNew}>Add another...</button>}
        {editMode && <CardWrapper onClosed={() => setEditMode(false)}><AddWeight onSubmit={onSubmit} /></CardWrapper>}
    </>
  )
}

export default Main
