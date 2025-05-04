function Textoformateado({texto}, {negrita}, {cursiva}=false)
{
    if(negrita==0){
        return (<p>
            if({negrita})<strong>
                {texto}
            if({negrita})</strong>
        </p>)}
    else{
        return (<p>
                {texto}
        </p>)   
    }
}
export default Textoformateado;