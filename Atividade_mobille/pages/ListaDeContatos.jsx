import { View, StyleSheet, Text } from "react-native"
import Contato from "../components/Contato"

export default ListaDeContatos = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.header}>Meus Contatos</Text>
        <View style={styles.listaContatosContainer}>
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Lavinia Nicole'}
                number={'+55 81 986567432'}
                navigation={navigation}
            />
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Lucas Gabriel'}
                number={'+55 81 987815675'}
                navigation={navigation}
            />
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Livia da Silva'}
                number={'+55 81 986377412'}
                navigation={navigation}
            />
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff0f5',
        width: '100%',
        height: '100%',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ff69b4',
        marginBottom: 20,
        textAlign: 'center',
    },
    listaContatosContainer: {
        width: '100%',
        borderRadius: 15,
        overflow: 'hidden',
    }
})