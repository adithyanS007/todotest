'use client'
import React, { useState } from "react";

const Home = () => {
  const [director, setDirector] = useState("");
  const [movie, setMovie] = useState("");
  const [addToDo, setAddToDo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (director.trim() === "" || movie.trim() === "") return;

    const newEntry = { director, movie };
    setAddToDo([...addToDo, newEntry]);
    setDirector('');
    setMovie('');
  };

  const handleDelete = (index) => {
    const newAddToDo = [...addToDo];
    newAddToDo.splice(index, 1);
    setAddToDo(newAddToDo);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-5">
        Directors and Movies
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center mt-10 gap-2">
          <input
            type="text"
            placeholder="Enter Director Name"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            placeholder="Enter Movie Name"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="bg-green-400 w-[70px] rounded p-2"
          >
            Add
          </button>
        </div>
      </form>

      <ul className="mt-5 flex flex-col items-center">
        {addToDo.map((item, index) => (
          <li key={index} className="flex items-center gap-3 mb-2">
            <span className="font-semibold">{item.director}</span> - <span>{item.movie}</span>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-400 px-2 rounded text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
