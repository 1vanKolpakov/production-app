import React, { ReactNode } from "react"
import { createPortal } from "react-dom";
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './Portal.module.scss'

interface PortalProps {
	children?: ReactNode;
	element?: HTMLElement;
}
export const Portal = ({children,element}:PortalProps) => {

	return createPortal(children, element = document.body)
};


