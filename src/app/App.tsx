import React, { Suspense, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classnames'
import  AppRouter from 'app/providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import UserImg from "shared/assets/icons/user-32-32.png"


export default function App() {

  const { toggleTheme, theme } = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
      {/* <UserImg /> */}
    </div>
  )
}
