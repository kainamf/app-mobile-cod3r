import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ResultadoProps{
    pontuacao: number
    totalDePerguntas: number
    reiniciar: () => void
}

export default function Resultado(props: ResultadoProps) {
    const { pontuacao, totalDePerguntas, reiniciar } = props
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Você acertou:</Text>
            <Text style={styles.destaque}>
                {Math.round((pontuacao / totalDePerguntas) *100)}%
            </Text>
            <Pressable style={styles.botao} onPress={reiniciar} >
                <Text style={styles.textoBotao}>Reiniciar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    texto: {},
    destaque: {},
    botao: {},
    textoBotao: {}
})