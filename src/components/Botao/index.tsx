import React from 'react'
import styles from './Botao.module.scss'

interface PropsBotao {
    texto: string, 
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}

function Botao({ onClick, type, texto}: PropsBotao){
    return(
        <button 
            onClick={onClick}
            type={type} 
            className={styles.botao}
        >
            {texto}
        </button>
    )
}

export default Botao
