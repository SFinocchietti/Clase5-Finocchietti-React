import NavBar from "./NavBar.js"
import Nav from "./CartWidget.js"

const Header = () => {
    return (
        <header className="header">
        <h1 className="header__titulo"> Tu inversión online </h1>
        <Nav/>
         <NavBar/>
        </header>
    )
}

export default Header