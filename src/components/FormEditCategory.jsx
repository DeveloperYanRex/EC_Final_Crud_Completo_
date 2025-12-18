import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export function FormEditCategory({ id }) {

    const [nombre, setNombre] = useState('')

    const navigate = useNavigate()
    // Cargar datos de la categoría a editar
    useEffect(() => {
        const fetchCategory = async () => {
            const category = await fetch(`http://localhost:3001/categorias/${id}`)
                .then((e) => e.json())
            setNombre(category.nombre)
        }
        fetchCategory()
    }, [id])
    // Manejar el envío del formulario
    const handlerActualizar = async (event) => {
        event.preventDefault();

        await fetch(`http://localhost:3001/categorias/${id}`, {

            method: "PUT",
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
        <Form onSubmit={handlerActualizar}>
            <Form.Group className='mb-3' controlId='editCategory.nombre'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Button type="submit">Actualizar</Button>
        </Form >
    )
}