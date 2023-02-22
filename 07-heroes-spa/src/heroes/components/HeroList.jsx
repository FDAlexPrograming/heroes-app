import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers"
import { HeroItem } from "./HeroCard";


export const HeroList = ({ publisher}) => {

    const heroes = useMemo( ()=> getHeroesByPublisher( publisher ), [ publisher ] );  // eseMemo memoriza valores, useCallback memoriza funciones 

  return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map (hero => (
                    <HeroItem
                        key={hero.id}
                        { ...hero }
                    />
                ))
            }

        </div>
  )
}

