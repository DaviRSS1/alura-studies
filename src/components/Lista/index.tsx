import React from 'react'
import styles from './Lista.module.scss'
import Item from './Item'
import { ITarefa } from '../../types/iTarefa'

interface PropsLista{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: PropsLista) {
    return(
        <aside className={styles.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        selecionaTarefa={selecionaTarefa}
                        {...item}
                        key={item.id}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista