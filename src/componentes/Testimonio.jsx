import React from 'react';
import '../styleshessts/Testimonio.css';
//function {Testimonio}
export function Testimonio(props) {
    return (
        <div className="contenedor-testimonio">
            <img className='imagen-testimnio' 
            src={require(`../imagenes/testimonio-${props.imagen}`)} alt="Foto de 1" />

            <div id='contenedor-testimonio' className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} de <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">"{props.testimonio1}<b>{props.negrita}</b>{props.testimonio2}"</p>
            </div>
        </div>
    );
    
}



// (function () {
//     const Cambioclase=()=> {        
//         let contenedorPrincipal=document.getElementById('contenedor-principal');
//         let contenedorTestimonio=document.getElementById('contenedor-testimonio');
//         if (document.documentElement.clientWidth<=900) {
//             contenedorPrincipal.className="contenedor-principal-vertical";
//             contenedorTestimonio.className = "contenedor-testimonio-vertical";
    
//         }else{
//             contenedorPrincipal.className = "contenedor-principal";
//             contenedorTestimonio.className = "contenedor-testimonio";
//         };
//     }

//     window.document.addEventListener('resize' , Cambioclase)
// })();
//export default
// export default Testimonio;