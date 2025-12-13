import React, { useContext } from 'react'
import { LanguageContext } from '../../context/ChangeLanguale'

function StatisticPage() {
  const { t } = useContext(LanguageContext);
  return (
    <div>{t.Statistic}</div>
  )
}

export default StatisticPage