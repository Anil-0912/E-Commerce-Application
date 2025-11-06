import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, fetchProducts } from '../Product/productThunk'
import { setProduct } from '../Product/productSlice'
import { useOutletContext } from 'react-router-dom'
import Card from '../Components/Common/Card'

const Home = () => {

  const { search,theme } = useOutletContext() || { search: "" };
  const { products, product, loading, error } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  console.log(products);
  
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    dispatch(fetchProducts())
  }

  const handleProduct = (data) => {
    dispatch(setProduct(data))
  }

  // const productData = products.map(data => {
  //       const searchText = Object.values(data).map(item => {
  //           return String(item)
  //       }).join(" ").toLowerCase()
  //       return { ...data, searchText: searchText }
  //   })

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredProducts);
      // const {theme}=useContext(ThemeContext)
  

return (
  <div className={`${theme?'bg-stone-600':'bg-blue-100'}`}>
    
    <Card products={filteredProducts} theme={theme} handleDelete={handleDelete} handleProduct={handleProduct} ></Card>
  </div>
)
}

export default Home

