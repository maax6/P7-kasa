import { useParams } from 'react-router-dom'
import products from '../../assets/templates/products.json';
import Error from '../Error'
export default function Card() {
	const list = JSON.stringify(products)
	//console.log(list)
	const {id}  = useParams()
	const parsedList = JSON.parse(list)
	const selectedItem = parsedList.find(item => item.id === id) 

	//console.log(selectedItem)
	console.log(parsedList)
	if(!selectedItem){
		return <Error />
	}
	console.log(selectedItem.id)
	console.log(selectedItem.title)
	console.log(selectedItem.location)
	console.log(selectedItem.rating)
	console.log(selectedItem.tags)
	console.log(selectedItem.host)
	console.log(selectedItem.equipments)
	console.log(selectedItem.description)
	console.log(selectedItem.pictures)
	return (
		<div className='card'>
			<h1>{selectedItem.title} </h1>
			<ul className='card__tags'>
			</ul>
			</div>
	)
}