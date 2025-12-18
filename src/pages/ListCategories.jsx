import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { TableCategories } from '../components/TableCategories'

export function ListCategories() {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        const categories = await fetch('http://localhost:3001/categorias')
            .then((e) => e.json())
        setCategories(categories)
    }

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar esta categoría?')) {
            await fetch(`http://localhost:3001/categorias/${id}`, {
                method: 'DELETE'
            })
            fetchCategories()
        }
    }

    const handleEdit = (category) => {
        navigate(`/edit-category/${category.id}`)
    }

    return (
        <>
            <h1>Listado de Categorías</h1>
            <Link to={'/create-category'}>
                <Button variant='primary'>Crear Categoría</Button>
            </Link>
            <Link to={'/'} className="ms-2">
                <Button variant='secondary'>Volver a Productos</Button>
            </Link>
            {
                categories.length > 0 ?
                    <TableCategories categories={categories} onEdit={handleEdit} onDelete={handleDelete} />
                    :
                    <h2>No hay categorías</h2>
            }

        </>
    )
}