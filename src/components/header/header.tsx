
import { NavLink, useLocation} from "react-router-dom";
import IsHome from "../isHome/IsHome";
import { useMemo } from "react";

const Header = () => {
 const {pathname}= useLocation();
 const isHome = useMemo(()=> pathname === "/", [pathname]);

  return (
    <header className={isHome ? 'bg-[url(./public/bg.jpg)] bg-center bg-cover' : 'bg-slate-800'} >
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
