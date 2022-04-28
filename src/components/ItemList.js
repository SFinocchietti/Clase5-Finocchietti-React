import { useEffect, useState } from "react"


const productosIniciales = [
    {
        id:1,
        nombre: "Producto 1",
        precio: 100
    },
    {
        id:2,
        nombre: "Producto 2",
        precio: 200
    },
    {
        id:3,
        nombre: "Producto 3",
        precio: 300
    }
]
const ItemList = () => {
    const [productos,setProductos] = useState([])

    useEffect(()=>{

      const promesa = new Promise ((res)=>{
        res(productosDeBaseDeDatos)
      }
      )

      .then((contenido)=>{
        console.log("Salio todo bien")
      }
      )
      .catch((error)=>{
        console.log("Salio todo mal")
      })

        console.log("Pido productos")

        setTimeout(()=>{
            console.log("Recibo productos")
            console.log(productosIniciales)  
            setProductos(productosIniciales)
        },2000)       
    },[])  
return(
    <>
    <ul>
     {productos.map((producto) => {
        console.log(producto)
         return <li key={producto.id}>{producto.nombre}</li>
     })}
    </ul>
    </>
)
}

export default ItemList



































/*import ReactDOM from "react-dom";
import { useState } from "react";

const rootElement = document.getElementeById("root");

const App = (props) => {

    const[ contador, setContador ] = useState(0);

    const handleClick = () => {
        setContador (contador + 1);
    } 
    
    const handleClickReset = () => {
        setContador(0)
    }
    
    return (
    <div>
        <p>Monto minimo para invertir</p>
        <h1>{contador}</h1>
        <button onClick={handleClick}>
    Invertir
        </button>
        <button onClick={handleClickReset}>
    Invertir menos
        </button>
    </div>
    
    );

}
ReactDOM.render(<App/>, rootElement); /***************VER ESTE CAMPO*******************/
