import React, { useEffect, useState } from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import { Button } from "shared/ui/Button";
import styles from './BugButton.module.scss'

interface BugButtonProps {
className?: string;
}

// тест для вызова ошибки
const BugButton = ({className}:BugButtonProps) => {
  const [error, setError] = useState(false)

  const switchErr = () => {
    setError(true)
  }

  useEffect(() => {
    if(error) {
      throw new Error()
    }
  
    
  }, [error])
  
  return (
    <Button onClick={switchErr}>
      Вызвать ошибку
    </Button>
  )
};

export default BugButton;
