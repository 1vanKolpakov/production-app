import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classnames'
import { Loader } from 'shared/ui/Loader';
import { Modal } from 'shared/ui/Modal'
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
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
      <Suspense fallback={<Loader className={styles.modalLoader} />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
