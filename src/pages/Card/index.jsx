import { useParams } from 'react-router-dom'
export default function Card() {
   const { id } = useParams()

   return (
      <div>
         <h2> Fiche {id} </h2>
      </div>
	
   )
}
