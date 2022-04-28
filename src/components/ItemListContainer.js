import Item from "./Item"




const Greeting = (props) => {
  return (
    <>
    <main>
      {props.children}
      <Item/>
    
      </main>
      </>
  )
  
}

export default Greeting
