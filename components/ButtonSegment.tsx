"use client"
import React, { useState } from 'react'

const ButtonSegment = ({id, show} : {id:string; show: boolean;}) => {
  const [isGrid, setGrid] = useState(show);
  const handleOnClick = () =>{
    const newGrid = !isGrid;
    setGrid(newGrid);
    return(newGrid)
  }
  return (
    <>
      <div id={`${id}-div`}>
            <button className="" id={id}>{id}</button>
      </div>
    </>
  )
}

export default ButtonSegment;
