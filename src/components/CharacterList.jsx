import { useState, useEffect } from "react";
import { Character } from "./Character";

function NavPage({ page, setPage }) {
  return (
    <header className="flex justify-between align-items-center">

      { page <= 1 ? null :<button
        className="shadow-lg shadow-black font-bold rounded-xl bg-green-600 hover:bg-green-400 p-2 duration-700 "
        onClick={() => setPage(page - 1)}
      >
        Page {page - 1}
      </button>}

      <button
        className="shadow-lg shadow-black font-bold rounded-xl bg-green-600 hover:bg-green-400 p-2 duration-700 "
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
      
    </header>
  );
}

export function CharacterList() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <div>Loading...</div>
      ) : (
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

          {characters.map((character) => (
            <div key={character.id}>
              <Character
                key={character.id}
                name={character.name}
                origin={character.origin}
                image={character.image}
              />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;