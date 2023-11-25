import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const result = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      setProduct(result.data);
    };
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Producto añadido al carrito");
  };

  return (
    <div className="flex justify-center items-center p-4">
      {product && (
        <div className="flex flex-wrap md:flex-nowrap items-center">
          <img src={product.image} alt={product.title} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 mr-4" />
          <div className="text-gray-800">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="mb-4">{product.description}</p>
            <p className="mb-5"> Precio : ${product.price}</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAddToCart}
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
