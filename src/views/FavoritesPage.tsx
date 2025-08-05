import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {
  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length , [favorites])

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Favoritos</h1>

      {hasFavorites ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-4 gap-4">
          {favorites.map( drink => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
              />
          ) )}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl">
          Los favoritos se mostrarán aquí
        </p>
      )}
    </>
  )
}
