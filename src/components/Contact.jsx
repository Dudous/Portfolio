import style from './Contact.module.css'
import { useState } from 'react'

export const Contact = () => {

    const defaultPhoneNumber = "5541999999999"

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleZap = () => {
        const {name, email, message} = formData;

        const urlZAPZAP = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Nome:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        Mensagem:%20${message}%0D%0A`

        window.open(urlZAPZAP, '_blank')

    }

    return(
        <>
            <div className={style.page} id='Contact'>
                <div className={style.principal}>
                    <h1>Contato</h1>
                </div>
                
                <div className={style.contact}>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} required />

                    <label htmlFor="message">Mensagem</label>
                    <textarea name="message" id="message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>

                    <button className={style.btnSubmit} onClick={handleZap}>Enviar mensagem</button>
                </div>
                    

            </div>
        </>  
    )
}