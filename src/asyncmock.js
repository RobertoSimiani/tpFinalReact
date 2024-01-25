const productos = [
    {id: "1" , nombre: "Sorrentinos" , precio: 4500 , img:"./img/sorrentinos.jpg", idCat:"1"},
    {id: "2" , nombre: "Ravioles" , precio: 4000 , img:"./img/ravioles.jpg", idCat:"1"},
    {id: "3" , nombre: "Fideos" , precio: 2500 , img:"./img/fideos.jpg", idCat:"2"},
    {id: "4" , nombre: "Fideos Integrales" , precio: 3000 , img:"./img/fideos_integrales.jpg", idCat:"2"},
    {id: "5" , nombre: "Salsa" , precio: 2000 , img:"./img/salsa.jpg", idCat:"3"}
]


export const getProductos = () => {
    return new Promise ((resolve) => {
      setTimeout(() =>{
           resolve(productos);
      }, 2000)  
    })

}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
      setTimeout( () =>{
           const producto = productos.find(prod => prod.id === id);
           resolve(producto);
      }, 2000)  
    })

}

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise (resolve => {
    setTimeout( () => {
      const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
      resolve(productosCategoria);
    }, 2000)
  })
}