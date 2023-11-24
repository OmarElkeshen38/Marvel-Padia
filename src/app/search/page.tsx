'use client';

import CharactersCard from '@/Components/CharactersCard';
import LoadingBars from '@/Components/LoadingBars';
import { Character } from '@/types/marvels';
import { searchCharacter } from '@/utils/api';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

const SearchPage: FC = () => {

    const searchParams = useSearchParams();
    const querySearch = searchParams.get('query');
    const [characters, setCharacters] = useState<Character[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    console.log(characters);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await searchCharacter(querySearch);
                setCharacters(data.results);
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };
        if (querySearch) {
            fetchData();
        }
    }, [querySearch])

  return (
    <>
      <div className="container text-center mt-6">
        <h2 className="text-3xl font-bold">
          Search for <span>&quot;{querySearch}&quot;</span>
        </h2>
        {isLoading ? (
          <div className='mt-10'>
            <LoadingBars />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mt-7">
            {characters.map((character) => (
              <CharactersCard key={character.id} character={character} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchPage
