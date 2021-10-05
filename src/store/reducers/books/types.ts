export interface BooksState {
  data: any[];
  isLoading: boolean;
  searchResult: number;
  maxResult: number;
  startIndex: number;
  book: {};
  inputValue: string;
  category: string;
  sort: string;
  error: string;
}

export enum BooksActionEnum {
  START_LOADING = "START_LOADING",
  START_SEARCH_SUCCESS = "START_SEARCH_SUCCESS",
  SET_LOADING_ERROR = "SET_LOADING_ERROR",
  SET_SEARCH_RESULT = "SET_SEARCH_RESULT",
  SET_BOOK = "SET_BOOK",
  SET_INPUT_VALUE = "SET_INPUT_VALUE",
  SET_CATEGORY = "SET_CATEGORY",
  SET_SORT = "SET_SORT",
  SET_MAX_RESULT = "SET_MAX_RESULT",
  SET_START_INDEX = "SET_START_INDEX",
  LOAD_MORE = "LOAD_MORE",
}

export interface SetStartLoading {
  type: BooksActionEnum.START_LOADING;
  payload: boolean;
}

export interface StartSearchSuccess {
  type: BooksActionEnum.START_SEARCH_SUCCESS;
  payload: [];
}

export interface SetLoadingError {
  type: BooksActionEnum.SET_LOADING_ERROR;
  payload: string;
}

export interface SetSearchResult {
  type: BooksActionEnum.SET_SEARCH_RESULT;
  payload: number;
}

export interface SetBook {
  type: BooksActionEnum.SET_BOOK;
  payload: {};
}

export interface SetInputValue {
  type: BooksActionEnum.SET_INPUT_VALUE;
  payload: string;
}

export interface SetCategory {
  type: BooksActionEnum.SET_CATEGORY;
  payload: string;
}

export interface SetSort {
  type: BooksActionEnum.SET_SORT;
  payload: string;
}

export interface SetMaxResult {
  type: BooksActionEnum.SET_MAX_RESULT;
  payload: number;
}

export interface SetStartIndex {
  type: BooksActionEnum.SET_START_INDEX;
  payload: number;
}

export interface LoadMore {
  type: BooksActionEnum.LOAD_MORE;
  payload: any;
}

export type BooksAction =
  | SetStartLoading
  | StartSearchSuccess
  | SetSearchResult
  | SetBook
  | SetInputValue
  | SetCategory
  | SetSort
  | SetMaxResult
  | SetStartIndex
  | LoadMore
  | SetLoadingError;
