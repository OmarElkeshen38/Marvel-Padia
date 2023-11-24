import { Character } from "@/types/marvels";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CharacterCardProps {
  character: Character;
}

const CharactersCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <>
      <div className="card w-full bg-base-200 shadow-xl">
        <figure>
          <Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={`${character.name} Poster`}
            width={500}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{character.name}</h2>
          <div className="card-actions justify-end mt-2">
            <Link href={`character/${character.id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharactersCard
