import { Text, View } from 'react-native'

export interface EnunciadoProps {
    enunciado: string
}
export default function Enunciado(props: EnunciadoProps) {
    return(
        <View>
            <Text style={{color: '#fff' }}>
                {props.enunciado}
            </Text>
        </View>
    )
}