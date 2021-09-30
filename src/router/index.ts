import React from "react";
import BookPage from "../pages/BookPage/BookPage";
import MainPage from "../pages/MainPage/MainPage";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  MAIN = "/",
  BOOKPAGE = "/:id",
}

export const routes: IRoute[] = [
  { path: RouteNames.MAIN, exact: true, component: MainPage },
  { path: RouteNames.BOOKPAGE, exact: true, component: BookPage },
];
