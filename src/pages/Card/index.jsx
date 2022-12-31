import { useParams } from 'react-router-dom'
import products from '../../assets/templates/products.json';
import Error from '../Error'
import Tags from '../../components/Tags'
//import rating from '../../components/Rating'
export default function Card() {
	const list = JSON.stringify(products)
	//console.log(list)
	const {id}  = useParams()
	const parsedList = JSON.parse(list)
	const selectedItem = parsedList.find(item => item.id === id) 

	//console.log(selectedItem)
	//console.log(parsedList)
	if(!selectedItem){
		return <Error />
	}
	console.log(selectedItem.host)
	return (
		<div className='card'>
			<h1 className='card__title'>{selectedItem.title} </h1>
			<h2 className='card__location'>{selectedItem.location}</h2>
			<div className='card__tags'>
				{selectedItem.tags.map((tag, index) => (
					<Tags key={index} getTag={tag} />
					))}
			</div>
			<div className="card__owner">
			</div>
			<div className="owner" >

			{/*selectedItem.host*/}
			</div>
		</div>
	)
}


//console.log(selectedItem.id)
//console.log(selectedItem.rating)
//console.log(selectedItem.tags)
//console.log(selectedItem.equipments)
//console.log(selectedItem.description)
//console.log(selectedItem.pictures)