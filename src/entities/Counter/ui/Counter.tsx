import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classnames'
import { Button } from "shared/ui/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";
import styles from './Counter.module.scss'

interface CounterProps {
className?: string;
}
export const Counter = ({className}:CounterProps) => {
	const dispatch = useDispatch()
	const counterValue = useSelector(getCounterValue)
	const increment = () => {
		dispatch(counterActions.increment())

	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}
	return (
		<div className={classNames(styles.Counter, {}, [className])}>
			<h1 data-testid='title'>Value {counterValue}</h1>
			<Button data-testid='increment-btn' onClick={increment}>Increment</Button>
			<Button data-testid='decrement' onClick={decrement}>Decrement</Button>
		</div>
	)
};


