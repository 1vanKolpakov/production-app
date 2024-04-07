import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react"
import { classNames } from 'shared/lib/classNames/classnames'
import styles from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	type?: string;
	placeholder?:string,
	autofocus?:boolean
	onChange?: (value: string) => void;
}
export const Input = memo((props:InputProps) => {
	const {
		className,
		value,
		onChange,
		type='text',
		placeholder='',
		autofocus,
		...otherProps
	} = props

	const [isFocused, setIsFocused] = useState(false)
	const [caretPosition, setCaretPosition] = useState(0)

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}
	const inputRef = useRef<HTMLInputElement>()
	useEffect(() => {
		if(autofocus){
			setIsFocused(true)
			inputRef.current.focus()
		}
	}, [autofocus])
	


	const onBlur = () => {
		setIsFocused(false)
	}

	const onFocus = () => {
		setIsFocused(true)
	}

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart || 0)
	}
	return (
		<div className={classNames(styles.Input, {}, [className])}>
			<div className={styles.placeholder}>
				{placeholder && `${placeholder}>`}
			</div>
			<div className={styles.caretWrapper}>
			<input 
			ref={inputRef}
			className={styles.input}
			type={type} 
			value={value}
			onChange={onChangeHandler}
			onFocus={onFocus}
			onBlur={onBlur}
			onSelect={onSelect}
			{...otherProps}
			/>
			{isFocused && <span
				className={styles.caret}
				style={{left: `${caretPosition * .46}em`}}
			/>}
			</div>
			
		</div>
	)
});


