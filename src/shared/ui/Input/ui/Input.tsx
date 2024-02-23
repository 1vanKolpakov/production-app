import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import { classNames } from "shared/lib/classNames/classnames";
import styles from "./Input.module.scss";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
	type?: string;
	placeholder?: string;
	autofocus?: boolean
}
export const Input = memo((props: InputProps) => {
  const { className, value, onChange, type='text', placeholder,autofocus , ...otherProps} = props;

	const [isFocused, setIsFocused] = useState(false)

	const [caretPosition, setCaretPosition] = useState(0)

	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if(autofocus){
			console.log(isFocused)
			setIsFocused(true)
			ref.current.focus()
		}

	}, [autofocus])
	

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
		setCaretPosition(e.target.value.length)
	}

	

	const onFocused = () => {
		setIsFocused(true)
	}

	const onBlur = () => {
		setIsFocused(false)
	}

	const onSelect = (e: any) => {
		setCaretPosition(e?.target?.selectionStart)
	}
  return (
	<div className={classNames(styles.InputWrapper, {}, [className])}>
		<div className={styles.placeholder}>
			{placeholder}
		</div>
		<div className={styles.caretWrapper}>
		<input 
		ref={ref}
		type={type}
		value={value}
		onChange={onChangeHandler}
		className={styles.input}
		onFocus={onFocused}
		onBlur={onBlur}
		onSelect={onSelect}
		{...otherProps}
		/>
		{isFocused && <span style={{left: `${caretPosition * 7}px`}} className={styles.caret} />}
		</div>
		
	</div>
	);
});
