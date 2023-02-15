import './Mensaje.css';

const Mensaje = (props) => {
    return (
        <div className='message'>Hola {props.name}!</div>
    );
}

export default Mensaje;