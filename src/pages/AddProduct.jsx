import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../Product/productThunk';
import { useNavigate } from 'react-router-dom';
import Form from '../Components/Common/Form';

const AddProduct = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    img: "",
    title: "",
    price: "",
    category: "",
    description: ""
  });

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(formData))
    navigate("/")
  }
  return (
    <div>

      {/* formdata,handleChange,handleSubmit */}
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default AddProduct