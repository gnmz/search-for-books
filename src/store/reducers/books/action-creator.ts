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
    dispatch({ type: BooksActionEnum.START_LOADING, payload: true });
        if(category === 'all'){
            try {
                const response:IResponse = await axios.get(`${API_URL}${string}&orderBy=${sort}${API_KEY}${API_MAX_RESULT}${maxResult}`)
                if(response.status === 200){
                    dispatch({ type: BooksActionEnum.START_SEARCH_SUCCESS, payload: response.data.items })
                    dispatch({ type : BooksActionEnum.SET_SEARCH_RESULT, payload: response.data.totalItems })
                }    
            } catch (error) {
                dispatch({type: BooksActionEnum.SET_LOADING_ERROR, payload: 'Произошла ошибка при загрузке'})
            }
            
        }else{
            try {
                const response:IResponse = await axios.get(`${API_URL}${string}+subject:${category}&orderBy=${sort}${API_KEY}${API_MAX_RESULT}${maxResult}`)
                if(response.status === 200){
                    dispatch({ type: BooksActionEnum.START_SEARCH_SUCCESS, payload: response.data.items })
                    dispatch({ type : BooksActionEnum.SET_SEARCH_RESULT, payload: response.data.totalItems })
                }
            } catch (error) {
                dispatch({type: BooksActionEnum.SET_LOADING_ERROR, payload: 'Произошла ошибка при загрузке'})
            }
           
    
        }
        
    
  };
};

export const getBook = (id:string) => {
    return async(dispatch: Dispatch<BooksAction>) => {
        dispatch({ type: BooksActionEnum.START_LOADING, payload: true });
        try {
            const response = await axios.get(`${BOOK_API}${id}?${API_KEY}`)
            dispatch({type:BooksActionEnum.SET_BOOK , payload: response.data })     
        } catch (error) {
            dispatch({type:BooksActionEnum.SET_LOADING_ERROR, payload: 'Произошла ошибка при загрузке'})
        }
        
    }
}

export const inputValueHandler:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
    return (dispatch: Dispatch<BooksAction>) =>{
        dispatch({type: BooksActionEnum.SET_INPUT_VALUE, payload:e.target.value})       
    }
}

export const setSearchValue = (value:string) => {
    return (dispatch: Dispatch<BooksAction>) => {
        if(value){
            dispatch({type: BooksActionEnum.SET_INPUT_VALUE, payload: value})
        }
    }
}

export const loadMore =  (startIndex:number, maxResult:number, string:string, category:string, sort:string ) => {
    return async (dispatch: Dispatch<BooksAction>) => {
        dispatch({ type: BooksActionEnum.START_LOADING, payload: true });
        if(category === 'all'){
            try {
                const response:IResponse = await axios.get(`${API_URL}${string}&orderBy=${sort}${API_KEY}&startIndex=${startIndex}${API_MAX_RESULT}${maxResult}`)
                if(response.status === 200){
                    dispatch({ type: BooksActionEnum.LOAD_MORE, payload: response.data.items })
                }else{
                    dispatch({type:BooksActionEnum.SET_LOADING_ERROR, payload: 'Произошла ошибка при загрузке'})
                }    
            } catch (error) {
                dispatch({type:BooksActionEnum.SET_LOADING_ERROR, payload: 'Произошла ошибка при загрузке'})
            }
            
        }else{
            try {
                const response:IResponse = await axios.get(`${API_URL}${string}+subject:${category}&orderBy=${sort}${API_KEY}&startIndex=${startIndex}${API_MAX_RESULT}${maxResult}`)
                if(response.status === 200){
                    dispatch({type: BooksActionEnum.LOAD_MORE, payload: response.data.items })
                }else{
                    dispatch({type:BooksActionEnum.SET_LOADING_ERROR, payload: 'Произошла ошибка при загрузке'})
                }
            } catch (error) {
                dispatch({type:BooksActionEnum.SET_LOADING_ERROR, payload: 'Произошла ошибка при загрузке'})
            }
          
    
        }

        
    }
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


export const setMaxResult = (number:number) => {
    return(dispatch: Dispatch<BooksAction>) => {
        dispatch({type: BooksActionEnum.SET_MAX_RESULT, payload: number})
    }
}

export const setStartIndex = (number:number) => {
    return (dispatch: Dispatch<BooksAction>) => {
        dispatch({type: BooksActionEnum.SET_START_INDEX, payload: number})
    }
}