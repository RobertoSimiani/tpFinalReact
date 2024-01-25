import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"


const ItemListConteiner = () => {
  const [productos, setProductos] = useState ([]);
  const {idCategoria} = useParams();

  useEffect (() => {
    
    // Ternario para mostrar por Categoria
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
      .then(res => setProductos(res))

  }, [idCategoria])

  return (
   <div>
    <ItemList productos={productos}/>
   </div>
  )
}

export default ItemListConteiner