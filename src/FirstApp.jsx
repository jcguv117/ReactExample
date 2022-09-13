// export const FirstApp = () => {
//     return (
//         <div>
//             <h1>Primera App</h1>
//             <p>Aplicacion de prueba</p>
//         </div>
//         );
// }

//Nota: regresa un fragmento de html (<> fragmento) sin tener que utilizar div 
const newMenssage = 'Primera App!';

const obj = {
    msg: 'Hello There!',
    person: 'Kenobi',
}

const subtitle = (a,b) => {
    return `${a}: ${b}`;
}

import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle}) => {
    console.log(title); //desestructuracion de props
    return (
        <>
            <h1>{newMenssage}</h1>
            <code>{JSON.stringify(obj)}</code>
            <h2>{subtitle(obj.person, obj.msg) }</h2>
            <p>Aplicacion de prueba</p>
            <h3>{title}</h3>
            <h3>{subTitle + 1}</h3>
        </>
        );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo "
}