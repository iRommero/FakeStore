import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="bg-black p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <Link to="/" className="text-xl font-bold">
          FakeStore
        </Link>
        <div>
          <Link to="/cart">Carrito ({cart.length})</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
