import React, { useContext } from 'react'
import { LanguageContext } from '../../context/ChangeLanguale'

function ContactPage() {
    const { t } = useContext(LanguageContext);
    return (
        <>
            <h1>
                {t.Contact}
            </h1>
        </>
    )
}

export default ContactPage