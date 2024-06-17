import PropTypes from 'prop-types';

// const personaje = {
//     nombre:'Tony',
//     apellido:'Montana',
//     alias:'Scarface'
// };

// const pintarPersonaje = () =>{
//     return(
//         <>
//         <span>{personaje.nombre} {personaje.apellido}</span> 
//         </>
//     )
// }

// const getResult = (a,b) =>{
//     return a + b;
// }

export const FirstApp = ( {title,subTitle,name} ) =>{
    // console.log(props);
    return ( 
    <>
        {/* <code>{ JSON.stringify(nombre) }</code> */}
        <h1>{title}</h1>
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
    
    );
}

FirstApp.propTypes={
    title: PropTypes.string.isRequired,
    subTitle:PropTypes.number,
}
FirstApp.defaultProps={
    title:'No hay Titulo',
    subTitle:'No hay subtitulo',
    name:'Jeremie'
}