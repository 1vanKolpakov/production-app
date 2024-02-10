import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classnames'
import AppLink from 'shared/ui/Applink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import { Button, ThemeButton } from 'shared/ui/Button';

interface NavbarProps {
  className?: string;

  
}

export function Navbar({className}: NavbarProps) {

  const {t} = useTranslation()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Button theme={ThemeButton.CLEAR} onClick={onToggleModal}>
        {t('Войти')}
        </Button>
        
      </div>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          <p>Внутри useEffect всегда можно вернуть функцию очистки, которая используется для удаления нежелательного поведения. Функция очистки вызывается не только перед размонтированием компонента, но и перед выполнением следующего эффекта, прочтите для деталей (на английском).</p>
        </Modal>
    </div>
  )
}

