import ItemList from "./ItemList"

const ItemListContainer = (props) => {
  return (
    <>
    <main>
      {props.children}     
    <ItemList/>
      </main>
      </>
  )
  
}

export default ItemListContainer
