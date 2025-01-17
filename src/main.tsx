import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./styles/base.scss"
import { createBrowserRouter, RouterProvider } from 'react-router'
import { LoginPage } from './pages/LoginPage/LoginPage.tsx'
import { MainPage } from './pages/MainPage/MainPage.tsx'
import { ProfilePage } from './pages/ProfilePage/ProfilePage.tsx'
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage.tsx'

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/registration",
    element: <RegistrationPage />
  },
  {
    path: "/main",
    element: <MainPage />
  },
  {
    path: "/profile",
    element: <ProfilePage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerConfig}/>
  </React.StrictMode>,
)
