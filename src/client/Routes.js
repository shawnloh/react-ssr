import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        // component: HomePage.component,
        ...HomePage,
        exact: true,
      },
      {
        // loadData,
        // component: UsersList,
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      }
    ]
  }
]

