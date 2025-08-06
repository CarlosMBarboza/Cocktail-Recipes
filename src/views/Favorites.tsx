import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import RecipeCard from "../components/DrinkCard"

export default function FavoritesPage() {
  const favorites = useAppStore(state => state.favorites)

  const hasFavorites = useMemo(() => favorites.length > 0, [favorites])
  return (
    <>
      <h1 className="text-4xl text-center mb-10 font-bold">Favoritos</h1>

      {hasFavorites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {favorites.map(recipe => (
            <RecipeCard
              key={recipe.idDrink}
              recipe={recipe}
            />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          Los favoritos se irán mostrando aquí
        </p>
      )}
    </>
  )
}
