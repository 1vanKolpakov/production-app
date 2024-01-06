import { AboutPageLazy } from 'pages/AboutPage'
import { MainPageLazy } from 'pages/MainPage'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export default function AppRouter() {
  // console.log('lalalla',Object.values(routeConfig).map(route => route.element))

  return (
    <Suspense fallback={<div>ЗАГРУЗКА...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
