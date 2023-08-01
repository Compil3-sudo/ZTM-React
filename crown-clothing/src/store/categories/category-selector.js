import { createSelector } from "reselect";

const selectCategoryreducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoryreducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {});
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryreducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
