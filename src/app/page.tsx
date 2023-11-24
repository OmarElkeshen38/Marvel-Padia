import CharactersCard from "@/Components/CharactersCard";
import { getCharacters } from "@/utils/api";

export default async function Home() {

  const characters = await getCharacters();
  return (
    <main>
      <div className="container text-center mt-5">
        <h1 className="text-3xl font-bold">Popular Characters Marvels</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-7">
          {characters.results.map((character) => (
            <CharactersCard key={character.id} character={character}  />
          ))}
        </div>
      </div>
    </main>
  );
}