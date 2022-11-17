import { useParams } from 'react-router-dom'

export default function AccomodationSheet() {
   const { id } = useParams()

   return (
      <div>
         <h2> Fiche {id} </h2>
      </div>
   )
}
