import { BooksAction, BooksActionEnum, BooksState } from "./types";

const initialState: BooksState = {
  data: [],
  isLoading: false,
  searchResult: null,
  maxReslut: 30,
  book: {},
  inputValue: "",
  category: 'all',
  sort: 'newest'
};

const booksReducer = (
  state = initialState,
  action: BooksAction
): BooksState => {
  switch (action.type) {
    case BooksActionEnum.START_SEARCH:
      return { ...state, isLoading: action.payload };
    case BooksActionEnum.START_SEARCH_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case BooksActionEnum.SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    case BooksActionEnum.SET_BOOK:
      return { ...state, book: action.payload };
    case BooksActionEnum.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case BooksActionEnum.SET_SORT:
      return {...state, sort: action.payload}
    case BooksActionEnum.SET_CATEGORY:
      return {...state, category: action.payload}
    default:
      return state;
  }
};

export default booksReducer;
