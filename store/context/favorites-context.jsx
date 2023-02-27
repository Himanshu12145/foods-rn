import { createContext, useState } from "react";
export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
  const [favoriteMealId, setFavoriteMealId] = useState([]);
  function addFavoriteMeal(id) {
    setFavoriteMealId((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavoriteMeal(id) {
    setFavoriteMealId((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteMealId,
    addFavorite: addFavoriteMeal,
    removeFavorite: removeFavoriteMeal,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
export default FavoriteContextProvider;
