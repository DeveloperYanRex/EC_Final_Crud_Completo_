import { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export function FormCreateCategory() {

    const [nombre, setNombre] = useState('')

    const navigate = useNavigate()

    const handlerRegistrar = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:3001/categorias', {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre
            })
        })

        navigate("/categories")
    }

    return (
        <Form onSubmit={handlerRegistrar}>
            <Form.Group className='mb-3' controlId='createCategory.nombre'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Button type="submit">Registrar</Button>
        </Form >
    )
}

//este comando para levantar el servidor de json-server: y cmabiar el puerto a 3001 
// para se puede realizar peticiones para el CRUD de categorias y productos
//se usa en la dentro carpeta backend en la terminal
//json-server --watch database.json --port 3001