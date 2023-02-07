import { heroes } from "../data/heroes"
import { getHeroesByPublisher } from "../helpers"
import { HeroItem } from "./HeroItem";


export const HeroList = ({ publisher}) => {

    const heroes = getHeroesByPublisher( publisher );

  return (
   <>
        <ul className="list-group">
            {
                heroes.map (hero => (
                    <HeroItem
                        key={hero.id}
                        item={ hero }
                    />
                ))
            }

        </ul>
   
   </>
  )
}

