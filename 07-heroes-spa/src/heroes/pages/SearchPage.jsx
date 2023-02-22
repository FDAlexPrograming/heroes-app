import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers';
export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search);
  const heroes = getHeroesByName(q);
  console.log(heroes);
  const { searchText, onInputChange } = useForm(
    {
      searchText: q
    }
  );


  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>SearchPage</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <form onSubmit={ onSearchSubmit }> 
            <input 
              type="text"
              placeholder="Buscar un heroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-outline-success mt-3 ">
              Buscar
            </button>
          
          </form>
        </div>

        <div className="col-7">
          <h4>Resultado de la busqueda</h4>
          {
            ( q === '')
            ? <div className="alert alert-success">Los resultado de la busqueda apareceran aqui</div>
            : (heroes.length === 0) && <div className="alert alert-danger">No se encontro el heroe <b> "{ q }" </b></div>
            
            
          }

          {
            heroes.map (hero => (
              <div className="col m-3">
                <HeroCard
                    key={hero.id}
                    { ...hero }
                />
              </div>
            ))
          }
  
        </div>
      </div>
     

    </>
  )
}
