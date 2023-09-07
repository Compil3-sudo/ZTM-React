import { expectSaga, testSaga } from "redux-saga-test-plan";
import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSage,
} from "../category.saga";
import { call } from "typed-redux-saga/macro";
import { CATEGORY_ACTION_TYPES } from "../category.types";
import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../category-actions";
import { throwError } from "redux-saga-test-plan/providers";

describe("Category Sagas", () => {
  test("categoriesSage", () => {
    // basically ensures that the saga's steps occurr in the correct order
    // testSaga is just like expect
    testSaga(categoriesSage)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test("onFetchCategories", () => {
    // basically ensures that the saga's steps occurr in the correct order
    // testSaga is just like expect
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });

  test("fetchCategoriesAsync success", () => {
    // basically expect in the end the put
    // to actually receive the expected values
    // expectSaga doesn't care when call / other things happen like with testSage
    // it only matters if the call and put happen AT SOME POINT
    const mockCategoriesArray = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test("fetchCategoriesAsync failure", () => {
    const mockError = new Error("An Error occurred");

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});
