import { Table, Button } from 'react-bootstrap'

export function TableCategories({categories, onEdit, onDelete}) {
    const header = ["#", "Nombre", "Acciones"]
    
    return (
        <>
            <Table>
                <thead>
                    <tr>
                        {header.map(e => (
                            <th key={e}>{e}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {categories.map(e => (
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.nombre}</td>
                            <td>
                                <Button variant="warning" size="sm" onClick={() => onEdit(e)}>Editar</Button>{' '}
                                <Button variant="danger" size="sm" onClick={() => onDelete(e.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}