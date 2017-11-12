export const MUTATE_FAVORITE_RESORTS = 'MUTATE_FAVORITE_RESORTS';

/* action creator */
const mutateFavoriteResortsSuccess = (resortShortName, favorite) => ({
  type: MUTATE_FAVORITE_RESORTS,
  payload: {
    resortShortName,
    favorite,
  },
});

/* will be hanled by redux thunk */
export const mutateFavoriteResorts = (resortShortName, favorite) => (dispatch) => {
  dispatch(mutateFavoriteResortsSuccess(resortShortName, favorite));
};
