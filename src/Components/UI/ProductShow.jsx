import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Api } from "../constantService/axiosInstance";
import Card from "../Common/Card";

const ProductShow = () => {
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const theme = useSelector((state) => state.theme.dark);

    const { query, category } = useSelector((s) => s.search);

    useEffect(() => {
        fetchProduct();
    }, []);

    async function fetchProduct() {
        const res = await Api.get("http://localhost:2000/products");
        setProducts(res.data);
        setFiltered(res.data); // initial = all
    }

    useEffect(() => {
        let result = products;

        if (query) {
            result = result.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
        }

        if (category && category !== "all") {
            result = result.filter(
                (item) => item.category.toLowerCase() === category.toLowerCase()
            );
        }

        setFiltered(result);
    }, [query, category, products]);


    return (
       <div
  className={`min-h-screen w-full transition-colors duration-500
    ${
      theme
        ? "bg-gradient-to-b from-[#0e0f14] via-[#0b0c10] to-[#08090c]"
        : "bg-neutral-50"
    }
  `}
>
  {/* Spacer for fixed navbar */}
  <div className="h-20" />

  {/* Animated Content Surface */}
  <div
    className={`max-w-7xl mx-auto w-full px-4 py-12 rounded-3xl
      transform transition-all duration-500 ease-out
      animate-[fadeUp_0.6s_ease-out]
      ${
        theme
          ? "bg-[#141417] border border-[#1f1f24]"
          : "bg-white border border-neutral-200 shadow-sm"
      }
    `}
  >
    <Card products={filtered} />
  </div>
</div>



    );
};

export default ProductShow;
