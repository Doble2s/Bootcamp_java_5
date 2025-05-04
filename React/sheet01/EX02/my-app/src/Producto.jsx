function producto({nombre,precio,descripcion}){
    return (
        <>
        <ol>
            <li>{nombre}</li>
            <li>{precio}</li>
            <li>{descripcion}</li>
        </ol>
        </>
    )
}

export default producto;