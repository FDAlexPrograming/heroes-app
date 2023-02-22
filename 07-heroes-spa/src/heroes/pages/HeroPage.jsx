import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo( ()=> getHeroById( id ), [ id ] ); 
  const navigate = useNavigate();

  const onBack = () =>{
    navigate(-1)
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

 
  return (
   <div className="row mt-5">
    <div className="col-4">
      <img 
        src={ `/assets/heroes/${id}.jpg` }
        alt={ hero.superhero }
        className="img-thumbnail hero-image"
        />
    </div>

    <div className="col-8">
      <h3 className="hero-name"> { hero.superhero } </h3>
      <ul className="list-group hero-info">
        <li className="list-group-item"> <b> Alter ego:  </b> { hero.alter_ego } </li>
        <li className="list-group-item"> <b> Estudio:  </b> { hero.publisher } </li>
        <li className="list-group-item"> <b> Primera aparición:  </b> { hero.first_appearance } </li>
      </ul>
      <div className="hero-characters">

      <h5 className="mt-3 "> Characters </h5>
      <p> {hero.characters} </p>
      <button 
        className="btn btn-dark"
        onClick={ onBack }
        > Volver</button>
    </div>
      </div>
   </div>
  );
};

