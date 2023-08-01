import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const CATEGORY_ACTION_TYPES = {
  FETCH_CATEGORIES_START: "category/FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS: "category/FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED: "category/FETCH_CATEGORIES_FAILED",
};

export const fetchCategoriesStart = () => {
  return { type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START };
};

export const fetchCategoriesSuccess = (categoriesArray) => {
  return {
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
    payload: categoriesArray,
  };
};

export const fetchCategoriesFailed = (error) => {
  return {
    type: CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
    payload: error,
  };
};

// this is a THUNK action => declare with last word Async
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categoriesArray = await getCategoriesAndDocuments("categories");
//     dispatch(fetchCategoriesSuccess(categoriesArray));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// };
