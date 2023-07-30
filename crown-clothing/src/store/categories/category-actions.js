export const CATEGORY_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

export const setCategoriesMap = (categoriesMap) => {
  // create Action
  return {
    type: CATEGORY_ACTION_TYPES.SET_CATEGORIES_MAP,
    payload: categoriesMap,
  };
};
