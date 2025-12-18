import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export function FormEditProduct({ id }) {

    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagen, setImagen] = useState('')
    const [categorias, setCategorias] = useState([])

    const navigate = useNavigate()
// Cargar datos del producto a editar y categorías para el select
    useEffect(() => {
        const fetchProduct = async () => {
            const product = await fetch(`http://localhost:3001/productos/${id}`)
                .then((e) => e.json())
            setNombre(product.nombre)
            setPrecio(product.precio)
            setCategoria(product.categoria)
            setImagen(product.imagen)
        }
        fetchProduct()

        const fetchCategorias = async () => {
            const cats = await fetch('http://localhost:3001/categorias')
                .then((e) => e.json())
            setCategorias(cats)
        }
        fetchCategorias()
    }, [id])

    const handlerActualizar = async (event) => {
        event.preventDefault();

        await fetch(`http://localhost:3001/productos/${id}`, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                precio,
                categoria,
                imagen
            })
        })

        navigate("/")
    }

    return (
        <Form onSubmit={handlerActualizar}>
            <Form.Group className='mb-3' controlId='editProduct.nombre'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='editProduct.precio'>
                <Form.Label>Precio</Form.Label>
                <Form.Control type='number' value={precio} onChange={(e) => setPrecio(e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='editProduct.categoria'>
                <Form.Label>Categoría</Form.Label>
                <Form.Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecciona una categoría</option>
                    {categorias.map(cat => (
                        <option key={cat.id} value={cat.nombre}>{cat.nombre}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='editProduct.imagen'>
                <Form.Label>Imágen</Form.Label>
                <Form.Control type='text' value={imagen} onChange={(e) => setImagen(e.target.value)} />
            </Form.Group>
            <Button type="submit">Actualizar</Button>
        </Form >
    )
}