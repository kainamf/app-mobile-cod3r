import { StyleSheet, Text, View } from "react-native";

export default function Logo({ showTitle = true, showBody = true }) {
    return (
        <View>
            {showTitle && (
                <Text style={styles.titulo}>
                    SPACE QUIZ
                </Text>
            )}
            {showBody && (
                <Text style={styles.corpo}>
                    Pergunta de outro mundo!
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    titulo: {
        fontFamily: 'SOLARSPACEDEMO-Regular',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    corpo: {
        fontFamily: 'SPACEMISSION',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
});
