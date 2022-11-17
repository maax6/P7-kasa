
import { Link } from "react-router-dom";
import Banner from '../../components/Banner'
import products from '../../products.json'
import '../../../src/styles/index.css'
import Thumbnails from '../../components/Thumbnails'

export default function Home() {
   return (
      <div>
        <Banner />
		<section className="home__products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Link to={`/products/${product.id}`}>
                <Thumbnails image={product.cover} title={product.title} />
              </Link>
            </article>
          );
        })}
      </section>
	  </div>
	  
   )
}
