import './Telefonos.css';

const Telefonos = () => {
    const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];
    
    return phones.map((phone) => {
        return <li>{phone}</li>
    });
}

export default Telefonos;