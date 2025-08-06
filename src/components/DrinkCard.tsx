import { useAppStore } from "../stores/useAppStore"
import { Drink } from "../types"

type DrinkCardProps = {
  recipe: Drink
}

export default function DrinkCard({ recipe }: DrinkCardProps) {
  const selectRecipe = useAppStore((state) => state.selectRecipe)

  return (
    <div className=" rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={recipe.strDrinkThumb}
        alt={recipe.strDrink}
        className="w-full h-42  object-cover transition-transform duration-300 hover:rotate-2"
      />
      <div className="p-5 bg-white">
        <h2 className=" text-center font-bold truncate">
          {recipe.strDrink}
        </h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-500 mt-5 w-full p-2 font-bold text-white text-lg rounded transition duration-200 ease-in-out"
          onClick={() => selectRecipe(recipe.idDrink)}
        >
          Ver Receta
        </button>
      </div>
    </div>
  )
}
