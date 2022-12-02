import Button from 'react-bootstrap/Button';
import "./Bpp.css";
import sayHello from "./SayHello";

function mygtukas() {
    return (  
        <>
        <Button variant="success" onClick={sayHello}>Success</Button>{' '}
        </>

    );
}

export default mygtukas;
