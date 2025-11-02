import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editProduct } from '../Product/productThunk'
import Form from '../Components/Common/Form'

const EditProduct = () => {

    const { product, loading, error } = useSelector(state => state.products)
    const { id } = useParams()
    const navigate = useNavigate()
    console.log(product);

    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        id: product.id,
        img: product.img,
        title:product.title,
        price: product.price,
        category:product.category,
        description: product.description
    }) 
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editProduct(formData, id))
        navigate("/")
    }

    return (
        <div>
            <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    )
}

export default EditProduct