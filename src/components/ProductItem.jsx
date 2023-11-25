import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const ProductItem = ({ product, isInCart }) => {
    const dispatch = useDispatch();

    const handleCartChange = () => {
        if (isInCart) {
            dispatch(removeFromCart(product.id)); 
        } else {
            dispatch(addToCart(product));
            alert("Producto añadido al carrito");
        }
    };

    return (
        <li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow hover:shadow-md transition-shadow">
            <Link to={`/product/${product.id}`} className="text-center">
                <img src={product.image} alt={product.title} className="mx-auto w-32 h-auto" />
            </Link>
            <div className="text-center">
                <span className="font-bold">{product.title}</span>
                <span className="block font-bold text-sm">${product.price}</span>
                <button
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleCartChange}
                >
                    {isInCart ? "Eliminar del carrito" : "Añadir al carrito"}
                </button>
            </div>
        </li>
    );
};

export default ProductItem;
