import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
  CATEGORY_ACTION_TYPES,
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./category-actions";

export function* fetchCategoriesAsync() {
  // yield := generator function* version of return
  // call := generator call (method, methodParameters)
  // put := generator version of dispatch

  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSage() {
  // run everythin inside & only complete when everything is done
  yield all([call(onFetchCategories)]);
}
