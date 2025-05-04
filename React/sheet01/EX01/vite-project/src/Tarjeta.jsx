function Tarjeta({nombre,apellido,ocupacion,imagenUrl=null}){
    return (<th>
        <tr>
            <td>{nombre}</td>
            <td>{apellido}</td>
        </tr>
        <tr>
            <td></td>
            <td>{ocupacion}</td>
        </tr>
        <tr>
            <td></td>
            <td> <img src="imagenUrl" alt="placeholder" /></td>
        </tr>
    </th>
    )
}
export default Tarjeta;