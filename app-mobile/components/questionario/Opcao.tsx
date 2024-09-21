import { Pressable, StyleSheet, Text } from "react-native"

export interface OpcaoProps {
    indice: number
    texto: string
    onPress: () => void
}

export default function Opcao(props: OpcaoProps) {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
            <Text style={styles.texto}>
                {props.texto}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    texto: {
        color: 'white',
    },
})