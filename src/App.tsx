import React, { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
// import {AboutPageLazy} from './pages/AboutPage/AboutPage.async'
import { MainPageLazy } from './pages/MainPage/MainPage.async'
import { ThemeContext } from './theme/ThemeContext'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classnames'

export const AboutPageLazy = React.lazy(() => new Promise(resolve => {
  // @ts-ignore
  setTimeout( () => resolve(import('./pages/AboutPage/AboutPage')), 1500)
}))
// import('./pages/AboutPage/AboutPage')


export default function App() {

  // const {theme, setTheme} = useContext(ThemeContext)
  const { toggleTheme, theme } = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      
      <Link to={'/'}>Главная</Link>
      <br/>
      <Link to={'/about'}> О сайте</Link>
      <br/>
      <button onClick={toggleTheme}>Выбрать тему</button>
      <Suspense fallback={<div>ЗАГРУЗКА...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/'} element={ <MainPageLazy />}/>
        </Routes>
      </Suspense>
    </div>
  )
}
