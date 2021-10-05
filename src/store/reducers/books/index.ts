import { BooksAction, BooksActionEnum, BooksState } from "./types";

const initialState: BooksState = {
  data: [],
  isLoading: false,
  searchResult: 0,
  startIndex: 0,
  maxResult: 30,
  book: {},
  inputValue: "",
  category: "all",
  sort: "relevance",
  error: "",
};

const booksReducer = (
  state = initialState,
  action: BooksAction
): BooksState => {
  switch (action.type) {
    case BooksActionEnum.START_LOADING:
      return { ...state, isLoading: action.payload };
    case BooksActionEnum.START_SEARCH_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case BooksActionEnum.SET_LOADING_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case BooksActionEnum.SET_SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    case BooksActionEnum.SET_BOOK:
      return { ...state, book: action.payload, isLoading: false };
    case BooksActionEnum.SET_INPUT_VALUE:
      return { ...state, inputValue: action.payload };
    case BooksActionEnum.SET_SORT:
      return { ...state, sort: action.payload };
    case BooksActionEnum.SET_CATEGORY:
      return { ...state, category: action.payload };
    case BooksActionEnum.SET_START_INDEX:
      return { ...state, startIndex: action.payload };
    case BooksActionEnum.LOAD_MORE:
      return { ...state, data: state.data.concat(action.payload), isLoading: false };
    default:
      return state;
  }
};

export default booksReducer;
