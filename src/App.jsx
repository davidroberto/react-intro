import './App.css'

function App() {

    // faux appel d'api : fetch sur le serveur pour récupérer
    // le nom de la personne connecté
    const authentifiedUser =
        {
            firstName: 'David',
            lastName: 'Robert',
            age: 35,
            job: "developper"
        }
    ;

    // faux appel d'api : fetch sur le serveur pour savoir
    // si l'utilisateur est connecté
    const isUserLoggedIn = false;

  return (
    <>
        { isUserLoggedIn ?
            <h2>{ authentifiedUser.firstName } { authentifiedUser.lastName }</h2>
        :
            <h2>Veuillez vous connecter</h2>
        }
    </>
  )
}

export default App
