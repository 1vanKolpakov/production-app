import React, { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classnames";
import { Portal } from "shared/ui/Portal";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
const ANIMATION_DELAY = 1000;
export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
		[styles.isClosing]: isClosing
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
				setIsClosing(false)
      }, ANIMATION_DELAY);
    }
  },[onClose]);

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if(e.key === 'Escape') {
			closeHandler()
		}
	},[closeHandler])

	useEffect(() => {
		if(isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
	
		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen])
	
  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
		<Portal>
    <div className={classNames(styles.Modal, mods, [className])}>
      <div className={styles.overlay} onClick={closeHandler}>
        <div onClick={onContentClick} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
		</Portal>
  );
};
