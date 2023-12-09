import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Character = {
  id: number;
  name: string;
  image: string;
};

type TCharacterContext = {
  characters: Character[];
};

const CharacterContext = createContext<TCharacterContext | null>(null);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => data.results)
      .then(setCharacters);
  }, []);
  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const context = useContext(CharacterContext);
  if (context === null) throw new Error("You done fucked up");

  return context;
};
