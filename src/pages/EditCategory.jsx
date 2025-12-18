import { useParams } from 'react-router-dom'
import { FormEditCategory } from '../components/FormEditCategory'

export function EditCategory(){
    const { id } = useParams()
    return (
        <>
            <h1>Editar categoría</h1>
            <FormEditCategory id={id}/>
        </>
    )
}