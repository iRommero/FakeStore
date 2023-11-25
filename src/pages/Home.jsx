import { useEffect, useState } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";

const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-black">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Home</h1>
        <input 
          type="text" 
          placeholder="Buscar productos..." 
          className="px-4 py-2 border rounded"
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      {loading ? <span>Cargando...</span> : null}
      {error ? <span>Hubo un error</span> : null}
      {filteredProducts ? (
        <ul className="grid grid-cols-5 gap-4 ">
          {filteredProducts.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Home;
