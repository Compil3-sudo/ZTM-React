import { createSelector } from "reselect";

import { CategoriesState } from "./category-reducer";
import { CategoryMap } from "./category.types";

const selectCategoryreducer = (state): CategoriesState => state.categories;

export const selectCategories = createSelector(
  [selectCategoryreducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    return categories.reduce((accumulator, category) => {
      const { title, items } = category;
      accumulator[title.toLowerCase()] = items;
      return accumulator;
    }, {} as CategoryMap);
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryreducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
