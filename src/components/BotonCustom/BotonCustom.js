import "./BotonCustom.css"

const BotonCustom = (props) => {
    
    return (
        <button onClick={props.handleClick} 
                className="custom-button">
            {props.text}
        </button>
    );
}

export default BotonCustom;