import { useParams } from 'react-router-dom'
import { FormEditProduct } from '../components/FormEditProduct'

export function Edit(){
    const { id } = useParams()
    return (
        <>
            <h1>Editar producto</h1>
            <FormEditProduct id={id}/>
        </>
    )
}