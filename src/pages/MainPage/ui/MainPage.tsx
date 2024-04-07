import { Counter } from 'entities/Counter';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

export default function MainPage() {

  const {t} = useTranslation('main')

  const [value, setValue] = useState('')
  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <div>
      <p>{t('Главная страница')}</p>
      <Input 
      placeholder='Введите текст'
      onChange={onChange}
      value={value}
      />
      <Counter />
    </div>
  )
}
