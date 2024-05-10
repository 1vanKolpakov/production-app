import React, { Suspense, useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classnames'
import  AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export default function App() {

  const { toggleTheme, theme } = useTheme()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="loading">
        
        <Navbar />
        
        <div className="inner-container">
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
