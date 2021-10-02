export interface BooksState {
  data: [];
  isLoading: boolean;
  searchResult: number | null;
  maxReslut: number;
  book: {};
  inputValue: string;
}

export enum BooksActionEnum {
  START_SEARCH = "START_SEARCH",
  START_SEARCH_SUCCESS = "START_SEARCH_SUCCESS",
  SET_SEARCH_RESULT = "SET_SEARCH_RESULT",
  SET_BOOK = "SET_BOOK",
  SET_INPUT_VALUE = "SET_INPUT_VALUE"
}

export interface StartSearch {
  type: BooksActionEnum.START_SEARCH;
  payload: boolean;
}

export interface StartSearchSuccess {
  type: BooksActionEnum.START_SEARCH_SUCCESS;
  payload: [];
}

export interface SetSearchResult {
  type: BooksActionEnum.SET_SEARCH_RESULT;
  payload: number | null;
}

export interface SetBook {
  type: BooksActionEnum.SET_BOOK;
  payload: {};
}

export interface SetInputValue {
  type: BooksActionEnum.SET_INPUT_VALUE;
  payload: string;
}

export type BooksAction =
  | StartSearch
  | StartSearchSuccess
  | SetSearchResult
  | SetBook
  | SetInputValue
  ;
