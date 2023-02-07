import { heroes } from "../data/heroes"
import { getHeroesByPublisher } from "../helpers"
import { HeroItem } from "./HeroCard";


export const HeroList = ({ publisher}) => {

    const heroes = getHeroesByPublisher( publisher );

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

