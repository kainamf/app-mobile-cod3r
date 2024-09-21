import PerguntaModel from '@/data/model/Pergunta'
import { Text, View } from 'react-native'
import Enunciado from './Enunciado'
import Opcao from './Opcao'

export interface PerguntaProps {
    pergunta: PerguntaModel
}
export default function Pergunta(props: PerguntaProps) {
    return(
        <View>
            <Enunciado enunciado={props.pergunta.enunciado} />
            <View>
                {props.pergunta.opcoes.map((opcao, indice) => (
                    <Opcao
                        key={indice}
                        indice={indice}
                        texto={opcao}
                        onPress={() => {}}
                    />
                ))}
            </View>
        </View>
    )
}