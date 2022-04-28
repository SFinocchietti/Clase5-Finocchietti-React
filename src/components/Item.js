const Item = (props) => {
    return (
      <main>
      <p>Recomendaciones de acciones</p>
      <button>VER</button>
        {props.children}
        </main>
    )
  }

export default Item
