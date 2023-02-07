
export const HeroItem = ( {item} ) => {

    console.log(item);
  return (
   <li className="rounded-3 list-group-item d-flex justify-content-between mt-3">
        <span 
            className={ `align-self-center` }> {item.superhero} 
        </span>

   </li>
  )
}
