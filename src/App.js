import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Main from "./components/ItemListContainer.js"
import ItemList from "./components/ItemList.js"
import ItemListContainer from "./components/ItemListContainer.js"



const App = () => {
    return( <>        
        <Header/> 
        <ItemListContainer>
        <p>Proximamente información para inversores </p>          
        </ItemListContainer>
        <Footer/>        
        </>
        )
}

export default App

