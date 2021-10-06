# Search for books with Google Books API.

## Функционал

✔️ Поиск по введеным в текстовое поле данным. Триггер поиска нажатие Enter или нажатие кнопки поиска.

✔️ Фильтрация поискового запроса по категорям: all (выбрано изначально), art, biography, computers, history, medical, poetry,

✔️ Сортировка поискового запроса по двум вариантам: relevance (выбран изначально) , newest.

✔️ Над блоком с карточками отображается количество найденных по запросу книг.

✔️ Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.

✔️ При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки,     название, все категории, все авторы, описание.

✔️ Адаптивная верстка 

## Реализация

Приложение создано с помощью npx create-react-app . --template typescript

Установлено доплнительно:

axios - для работы с API

react-router-dom - для маршрутизации

redux - для работы redux

react-redux - для работы react с redux

redux-thunk - для асинхронных запросов

@types/react-redux @types/react-router-dom @types/redux-thunk - типы для TypeScript

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
