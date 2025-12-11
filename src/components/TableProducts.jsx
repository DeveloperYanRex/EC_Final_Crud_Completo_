import { Table } from 'react-bootstrap'

export function TableProducts({products}) {
    const header = ["#", "Nombre", "Precio", "Categoria", "Imagen"]
    
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
                    {products.map(e => (
                        <tr key={e._id}>
                            <td>{e._id}</td>
                            <td>{e.nombre}</td>
                            <td>{e.precio}</td>
                            <td>{e.categoria}</td>
                            <td><img src={e.imagen} alt="" width={50} /> </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}