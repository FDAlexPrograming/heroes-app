import { Link } from "react-router-dom";

export const HeroCard = ( {id, superhero, publisher, alter_ego, first_appearance, characters} ) => {

  const heroImageUrl = `/assets/heroes/${ id }.jpg`;
  
  return (
   <div className="col">
      <div className="card bg-dark">
          <div className="row no-gutters p-3 card_heroes">
            <div className="col-4   ">
              <img src={ heroImageUrl } alt={ superhero } className="card-img" />
            </div>
            <div className="col-8">
                <div className="">
                  <h5 className="card-title"> { superhero } </h5>
                  <p className="card-text"> { alter_ego } </p>
                  {
                    (alter_ego !== characters) && (<p className="card-text"> { characters } </p>)
                  }
                  <p className="card-text">
                      <small className="text-md-center"> { first_appearance } </small>
                  </p>

                  <Link to={`/hero/${id}`}>
                    <button className="btn btn-dark link-info"> Ver más...</button>
                  </Link>
                </div>
            </div>
          </div>
      </div>
   </div>
  )
}
