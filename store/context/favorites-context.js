import { createContext } from 'react';

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export default FavoritesContextProvider = ({ children }) => {
  const [favoriteMealIds, setfavoriteMealIds] = useState([]);

  const addFavorite = (id) => {
    setfavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavorite = (id) => {
    setfavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favoriteMealIds,
    addfavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
