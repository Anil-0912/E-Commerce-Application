import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../Product/productThunk';
import { useNavigate } from 'react-router-dom';
import Form from '../Components/Common/Form';

const AddProduct = () => {

  const theme=useSelector(state=>state.theme.dark)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    image: "",
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
    <div
      className={`min-h-screen w-full transition-colors duration-500
    ${theme
          ? "bg-gradient-to-b from-[#0e0f14] via-[#0b0c10] to-[#08090c]"
          : "bg-neutral-50"
        }
  `}
    >
      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Form Surface */}
      <div
        className={`max-w-3xl mx-auto w-full px-6 py-10 rounded-3xl
      transform transition-all duration-500 ease-out
      animate-[fadeUp_0.6s_ease-out]
      ${theme
            ? "bg-[#141417] border border-[#1f1f24]"
            : "bg-white border border-neutral-200 shadow-sm"
          }
    `}
      >
        <Form
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>

  )
}

export default AddProduct