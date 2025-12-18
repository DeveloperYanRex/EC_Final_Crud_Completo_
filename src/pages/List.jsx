import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { TableProducts } from '../components/TableProducts'

export function List() {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const products = await fetch('http://localhost:3001/productos')
            .then((e) => e.json())
        setProducts(products)
    }

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar este producto?')) {
            await fetch(`http://localhost:3001/productos/${id}`, {
                method: 'DELETE'
            })
            fetchProducts()
        }
    }

    const handleEdit = (product) => {
        navigate(`/edit/${product.id}`)
    }

    return (
        <>
            <h1>Listado de Productos</h1>
            <Link to={'/create'}>
                <Button variant='primary'>Registra Producto</Button>
            </Link>
            <Link to={'/categories'} className="ms-2">
                <Button variant='secondary'>Gestionar Categorías</Button>
            </Link>
            {
                products.length > 0 ?
                    <TableProducts products={products} onEdit={handleEdit} onDelete={handleDelete} />
                    :
                    <h2>No hay productos</h2>
            }

        </>
    )
}