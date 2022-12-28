import { useParams } from 'react-router-dom'
import products from '../../assets/templates/products.json';

export default function Card() {
	const list = JSON.stringify(products)
	// console.log(list)
	const {id}  = useParams()
	const parsedList = JSON.parse(list)
	const selectedItem = parsedList.find(item => item.id === id) 
	console.log(selectedItem)
	// console.log(this.selectedItem.location)
	console.log(parsedList)
	// console.log(this.selectedItem.id)
	return (
		<div>
			<h2> Fiche Logement {id} </h2>
		</div>
	)
}
