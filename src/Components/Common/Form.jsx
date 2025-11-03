import React from 'react'

const Form = ({formData,handleChange,handleSubmit}) => {
  return (
    <div>
        <form className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg" onSubmit={handleSubmit} >
        <h2 className="text-2xl font-bold mb-4 text-center">Add New Product</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Product Title</label>
          <input type="text" placeholder="Enter product title" name='title' value={formData.title} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Image URL</label>
          <input type="text" placeholder="Enter image URL" name='img' value={formData.image} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Price (₹)</label>
          <input type="number" placeholder="Enter price" name='price' value={formData.price} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Category</label>
          <select className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.category} name='category' onChange={handleChange}>
            <option value="">Select a category</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Books</option>
            <option>Sports</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Description</label>
          <textarea placeholder="Enter product description" name='description' value={formData.description} className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form