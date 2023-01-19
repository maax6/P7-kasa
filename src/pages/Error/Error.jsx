export default function Error() {
   return (
      <div>
         <div className="errContainer">
            <div className="big404">404</div>
            <h1 className="notFound">Oups ! La page que vous demandez n'existe pas.</h1>
            <span className="return">
               <a href="/">Retourner à la page d'acceuil</a>
            </span>
         </div>
      </div>
   )
}
