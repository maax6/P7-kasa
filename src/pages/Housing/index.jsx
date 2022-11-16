import { useParams } from 'react-router-dom'

export default function Housing() {
   const { id } = useParams()

   return (
      <div>
         <h2> FIche {id} </h2>
      </div>
   )
}
