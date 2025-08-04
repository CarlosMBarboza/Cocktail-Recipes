import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const IsHome = () => {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);
  return (
    <>
      {isHome && (
        <div className="flex items-center justify-start h-screen">
          <form className="md:w-1/2 2xl:w-1/3 bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex space-x-4 w-full">
                <div className="flex-1">
                  <label
                    htmlFor="ingredient"
                    className="block text-white text-lg font-bold"
                  >
                    Ingrediente
                  </label>
                  <input
                    id="ingredient"
                    type="text"
                    name="ingredient"
                    placeholder="Nombre o Ingredientes"
                    className="mt-2 p-2 w-full bg-white bg-opacity-50 rounded-lg focus:outline-none"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="ingredient-select"
                    className="block text-white text-lg font-bold"
                  >
                    Seleccionar
                  </label>
                  <select
                    id="ingredient-select"
                    name="ingredient"
                    className="mt-2 p-2 w-full bg-white bg-opacity-50 rounded-lg focus:outline-none"
                  >
                    <option value="">Seleccione</option>
                  </select>
                </div>
              </div>
              <input
                type="submit"
                value="Buscar Recetas"
                className="mt-4 p-2 bg-orange-500 text-white rounded-lg cursor-pointer"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default IsHome;
