import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem(){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://pbs.twimg.com/profile_images/1281790025324273670/-imlyqfu_400x400.jpg" alt="Vagabondz"/>
            <div>
                <strong>Vagabonds</strong>
                <span>Quimica</span>
            </div>
        </header>
        <p>
            Gosto de explodir coisas e matar monstros na pandemia do the last of us
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar contato
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;