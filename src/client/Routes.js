import App from './App'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'

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
        ...AdminsListPage,
        path: '/admins'
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

