function Cart() {
	const burgerPrice = 27
	const mushroomsPrice = 25
	const salmonPrice = 55
	return (<div>
		<h2>Addition</h2>
		<ul>
		<li> Burger : {burgerPrice}€</li>
			<li>Champignons : {mushroomsPrice}€</li>
			<li>Saumon : {salmonPrice}€</li>
		</ul>
			Total : {burgerPrice + mushroomsPrice + salmonPrice }€
			</div>)
	}

export default Cart