import type { Drink } from "../types";
import { useAppStore } from "../stores/useAppStore";

type DrinkCardProps = {
    drink: Drink;
};

const DrinkCard: React.FC<DrinkCardProps> = ({ drink }) => {
    const selectRecipe = useAppStore((state) => state.selectRecipe);

    return (
        <div className="border w-60 mt-10 mx-8 rounded-lg shadow-lg overflow-hidden">
            <img 
                src={drink.strDrinkThumb} 
                alt={`Imagen de ${drink.strDrink}`} 
                className="w-60 object-cover "
            />
            <div className="p-5 text-center">
                <h2 className="text-2xl font-bold truncate">{drink.strDrink}</h2>
                <button
                    type="button"
                    className="mt-5 w-full p-3 bg-orange-400 hover:bg-orange-500 text-lg font-bold text-white rounded transition duration-200"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    Ver Receta
                </button>
            </div>
        </div>
    );
};

export default DrinkCard;
