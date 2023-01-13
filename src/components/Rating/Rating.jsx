import emptyStar from './emptyStar.svg'
import fullStar from './fullStar.svg'

export default function Rating({ score }) {
   const stars = [1, 2, 3, 4, 5]
   return (
      <div className="rate-comp">
         {stars.map((level) =>
            score >= level ? (
               <img
                  key={level.toString()}
                  className="star"
                  src={fullStar}
                  alt="star filled"
               />
            ) : (
               <img
                  key={level.toString()}
                  className=" star starEmpty"
                  src={emptyStar}
                  alt="star empty"
               />
            )
         )}
      </div>
   )
}
