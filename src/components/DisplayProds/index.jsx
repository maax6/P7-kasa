import { Link } from 'react-router-dom'
import products from '../../products.json'
import Thumbnails from '../../components/Thumbnails'
export default function Displayproducts() {
   return (
      <section className="home__products">
         {products.map((product) => {
            return (
               <article key={product.id}>
                  <Link to={`/products/${product.id}`}>
                     <Thumbnails image={product.cover} title={product.title} />
                  </Link>
               </article>
            )
         })}
      </section>
   )
}
