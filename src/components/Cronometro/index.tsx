import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/iTarefa'
import Botao from '../Botao'
import styles from './Cronometro.module.scss'
import Relogio from './Relogio'
import { useEffect, useState } from 'react';

interface PropsCronometro{
    selecionado: ITarefa | undefined
    finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: PropsCronometro) {
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() =>{
            if(contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }
    
    return(
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o Cronômetro</p>
            <div className={styles.relogioWrapper}>
                <Relogio tempo= {tempo}/>
            </div>
            <Botao 
                onClick={() => regressiva(tempo)}
                texto='Começar!'
            />
        </div>
    )
}