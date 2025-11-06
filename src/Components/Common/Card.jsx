import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ products, handleDelete, theme, handleProduct }) => {

  return (
    <div className={`${theme ? 'bg-stone-900' : ""}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
        {
          products.map(data => {
            return <article
              className="mt-10 w-full sm:w-96 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-200" key={data.id}>
              <img src={data.image}
                alt={data.title} className="w-full h-56 object-cover" />

              <div className={`p-5 space-y-3 ${theme?'bg-stone-200':""}`}>
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-semibold text-gray-800">{data.title}</h2>
                  <div className="text-right">
                    <p className="text-lg font-bold text-green-600">₹{data.price}</p>
                  </div>
                </div>

                <p className="inline-block text-xs font-medium bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">{data.category}</p>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{data.description}</p>

                <div className="flex items-center justify-between">
                  <div className="w-full flex items-center justify-evenly gap-3">

                    <Link to={`/view/${data.id}`}>
                      <button
                        className="inline-flex bg-blue-700 items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-white hover:bg-gray-400 hover:text-blue-700 cursor-pointer">
                        View
                      </button>
                    </Link>
                    <Link to={`/edit/${data.id}`}  >
                      <button onClick={() => handleProduct(data)} className='inline-flex bg-gray-400  items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-blue-700  hover:bg-blue-700 hover:text-white cursor-pointer'>Edit</button>
                    </Link>

                    <button onClick={() => handleDelete(data.id)} className='inline-flex bg-gray-400  items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-blue-700  hover:bg-blue-700 hover:text-white cursor-pointer'>delete</button>
                  </div>
                </div>
              </div>
            </article>
          })
        }
      </div>
    </div>
  )
}

export default Card

