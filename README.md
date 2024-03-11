# movies-explorer-frontend

Репозиторий для фронтенд-части приложения с интерфейсом на React



## Приложение Movies Explorer

Приложение Movies Explorer - сервис с поиском фильмов и сохранением их в личном кабинете. Учебный проект с базой фильмов фестиваля BeatFilm.

Дипломный проект GeekBrains по специальности "Frontend программист".

### Структура приложения

Полностью приложение состоит из двух частей:

1. [movies-explorer (бэкенд-часть)](https://github.com/Newet7/gb-movies-explorer-api)
2. movies-explorer (фронтенд-часть) ⬅ _этот репозиторий_

## Демо

На GitHub Pages:
[`newet7.github.io/gb-movies-explorer-api`]

### Используемые API
- собственное API для регистрации/авторизации и хранения сохраненных фильмов:
  `---`
- публичное API для получения коллекции фильмов BeatFilm `----`

## Функциональность

- Адаптивная, семантическая верстка
- Лендинг с описанием работы, а также с информацией обо мне и ссылками на другие работы из портфолио
- Отдельная страница с приложением по поиску и сохранению фильмов
- Регистрация/авторизация пользователей
- Поиск фильмов по ключевому слову
- Постепенный вывод результатов поиска на экран при клике на копнку «Ещё»
- Сохранение/удаление фильмов из результов поиска
- Просмотр и удаление фильмов из сохраненных в личном кабинете
- Редактирование информации о пользователе
- Валидация форм перед отправкой на сервер
- Прелоадеры с анимацией во время запросов к серверу

## Стек технологий

- HTML5, CSS3, БЭМ
  - JSX
  - normalize.css
  - @media, @keyframes, transition
- React
  - Create React App
  - React Router 6
  - Валидация форм с помощью кастомных хуков
  - React Context
  - Защищенные роуты
- Работа с API: публичное и собственное
- Local Storage: хранение JWT-токена и параметров поиска

## Статус разработки

✅ _Готово_
