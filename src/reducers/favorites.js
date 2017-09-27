const initialState = {
  favoriteResorts: [],
};

export const MUTATE_FAVORITE_RESORTS = 'MUTATE_FAVORITE_RESORTS';

const favorites = (state = initialState, action) => {
  if (action.type === MUTATE_FAVORITE_RESORTS) {
    if (!action.payload.favorite) {
      const filteredFavoriteResorts = state.favoriteResorts.filter(
        item =>
          item !== action.payload.resortShortName,
      );
      const newState = {
        ...state,
        favoriteResorts: filteredFavoriteResorts,
      };
      return newState;
    }

    const newState = {
      ...state,
      favoriteResorts: [action.payload.resortShortName, ...state.favoriteResorts],
    };
    return newState;
  }

  return state;
};


export default favorites;
