import logo from '../assets/logo.svg'
import '../styles/Banner.css'

function Banner() {
		return <div className='kasa-banner'>
			<img src={logo} alt='Kasa' className='kasa-logo' /><br/>
			<ul>
				<li><a href="/">Acceuil</a></li>
				<li><a href="#">À Propos</a></li>
			</ul>
		</div>
	}
export default Banner;
