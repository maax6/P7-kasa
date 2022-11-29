import logo from '../../assets/logo.svg'

export default function Logo() {
   return (
      <div className="logo__container">
         <img src={logo} alt="Kasa" className="logo" />
      </div>
   )
}
