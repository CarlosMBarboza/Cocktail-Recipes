
import { NavLink} from "react-router-dom";
import IsHome from "../isHome/IsHome";

const Header = () => {
 

  return (
    <header >
      <div className="mx-auto container px-5 py-5">
        <div className="flex justify-between items-center ">
          <div>
            <img className="w-16 ml-24" src="/public/logo.svg" alt="logotipo" />
          </div>

          <nav className="flex gap-4 mr-24">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-bold" : "text-white font-bold"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive ? "text-orange-500 font-bold" : "text-white font-bold"
              }
            >
              Favoritos
            </NavLink>
          </nav>
          
        </div>
        <IsHome/>
      </div>
    </header>
  );
};

export default Header;
