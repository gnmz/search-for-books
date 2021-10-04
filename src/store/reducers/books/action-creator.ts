import axios from "axios";
import React, { Dispatch } from "react";
import { API_KEY, API_MAX_RESULT, API_URL, BOOK_API } from "../../../config";
import { BooksAction, BooksActionEnum } from "./types";

interface IResponse{
    status: number;
    data:{
        totalItems: number;
        items: []
    }
}

export const getData = (string:string, maxResult:number, category:string, sort:string ) => {
  return async (dispatch: Dispatch<BooksAction>) => {
    dispatch({ type: BooksActionEnum.START_SEARCH, payload: true });
        if(category === 'all'){
            const response:IResponse = await axios.get(`${API_URL}${string}&orderBy=${sort}${API_KEY}${API_MAX_RESULT}${maxResult}`)
            if(response.status === 200){
                dispatch({ type: BooksActionEnum.START_SEARCH_SUCCESS, payload: response.data.items })
                dispatch({ type : BooksActionEnum.SET_SEARCH_RESULT, payload: response.data.totalItems })
            }
        }else{
            const response:IResponse = await axios.get(`${API_URL}${string}+subject:${category}&orderBy=${sort}${API_KEY}${API_MAX_RESULT}${maxResult}`)
            console.log(response.data.items)
            if(response.status === 200){
                dispatch({ type: BooksActionEnum.START_SEARCH_SUCCESS, payload: response.data.items })
                dispatch({ type : BooksActionEnum.SET_SEARCH_RESULT, payload: response.data.totalItems })
            }
    
        }
        
    
  };
};

export const getBook = (id:string) => {
    return async(dispatch: Dispatch<BooksAction>) => {
        const response = await axios.get(`${BOOK_API}${id}?${API_KEY}`)
        dispatch({type:BooksActionEnum.SET_BOOK , payload: response.data }) 
    }
}

export const inputValueHandler:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
    return (dispatch: Dispatch<BooksAction>) =>{
        
        if(e.target.value === ''){
            localStorage.setItem('input', '')
            dispatch({type: BooksActionEnum.SET_INPUT_VALUE, payload:e.target.value})
        }else{
            dispatch({type: BooksActionEnum.SET_INPUT_VALUE, payload:e.target.value})
        }
        
    }
}

export const loadMore = () =>{

}


export const sortOnChage:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    return (dispatch: Dispatch<BooksAction>) => {
            dispatch({type: BooksActionEnum.SET_SORT, payload: e.target.value})
    }
}

export const categoryOnChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    return (dispatch: Dispatch<BooksAction>) =>{
        dispatch({type: BooksActionEnum.SET_CATEGORY, payload: e.target.value})
    }
}