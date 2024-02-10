import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  useEffect(() => {
    console.log('Create')
  
    return () => {
      console.log('Return')
    }
  }, [])
  const {t} = useTranslation('about')
  return (
    <div>
      <p>{t('О сайте')}</p>
    </div>
  )
}
