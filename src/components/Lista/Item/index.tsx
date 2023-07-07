import { ITarefa } from '../../../types/iTarefa'
import styles from './Item.module.scss'

interface PropsItem extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item({
        tempo, 
        tarefa, 
        selecionado, 
        completado, 
        id, 
        selecionaTarefa
    }: PropsItem) {
    return (
        <li 
            className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''} ${completado ? styles.itemCompletado : ''}`} 
            onClick={() => !completado && selecionaTarefa(
            {
                tarefa,
                tempo, 
                selecionado, 
                completado, 
                id
            })}
        >
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
            {completado && <span className={styles.concluido} aria-label='tarefa completada'></span>}
        </li>
    )
}