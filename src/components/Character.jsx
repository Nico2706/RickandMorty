export function Character(character) {
    return (
      <div className="text-center shadow-md shadow-gray-500 rounded-xl bg-white ">
        <h3 className="text-3xl font-mono text-green-900">{character.name}</h3>
        <img src={character.image} alt={character.name} className="rounded-full" />
        <p className="font-mono text-md text-green-900">{`Origin: ${character.origin && character.origin.name}`}</p>
      </div>
    );
  }
  export default Character;