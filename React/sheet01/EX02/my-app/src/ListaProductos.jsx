import Producto from "./producto";

function ListaProductos(){
    const dataproducto =[
        <Producto nombre="banano" precio="5.00" descripcion="fruta freca"/>,
        <Producto nombre="fresa" precio="2.00" descripcion="fruta freca"/>,
        <Producto nombre="jugo" precio="10.00" descripcion="con vitamina"/>,
        <Producto nombre="balon" precio="50.00" descripcion="la pelota"/>,];
    const resultadoProducto = dataproducto.map((nombre)=>{return (nombre);});
    return resultadoProducto;
}
export default ListaProductos;