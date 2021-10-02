import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreator from "../store/reducers/actions-creator";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
};
