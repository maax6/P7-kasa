import { Link } from 'react-router-dom'
import products from '../../assets/templates/products.json'
import Thumbnails from '../Thumbnails/Thumbnails'

export default function Displayproducts() {
   return (
      <section className="home__products">
		 {products.map((product) => {
            return (
               <article key={product.id} className="articles">
                  <Link to={`/products/${product.id}`}>
                     <Thumbnails image={product.cover} title={product.title} />
                  </Link>
               </article>
            )
         })}
      </section>
   )
}
