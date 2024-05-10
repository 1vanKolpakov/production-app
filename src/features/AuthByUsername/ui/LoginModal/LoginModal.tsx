import React from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Modal } from 'shared/ui/Modal'
import { LoginForm } from '../LoginForm/LoginForm';
import styles from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal = ({className, isOpen, onClose} : LoginModalProps) => {
  return (
    <Modal 
    className={classNames(styles.LoginModal, {}, [className])}
    onClose={onClose} 
    isOpen={isOpen}
    lazy
    >
      <LoginForm />
    </Modal>
  )
}
