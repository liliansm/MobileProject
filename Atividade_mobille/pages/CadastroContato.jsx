import { View, Text, StyleSheet } from "react-native"
import { Input, Button } from "react-native-elements"

export default CadastroContato = () => (
    <View style={styles.container}>
        <View style={styles.form}>
            <Input
                placeholder="Nome"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                placeholderTextColor="#999"
            />
            <Input
                placeholder="Email"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                placeholderTextColor="#999"
            />
            <Input
                placeholder="Telefone"
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                placeholderTextColor="#999"
            />
            <View style={{ width: '100%', marginTop: 16 }}>
                <Button
                    title='Salvar'
                    buttonStyle={styles.primaryButton}
                    titleStyle={styles.primaryButtonTitle}
                />
            </View>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF0F5'
    },
    form: {
        width: '90%',
        maxWidth: 500,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 24,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        gap: 16
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#FF69B4',
        borderRadius: 6,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    inputText: {
        color: '#333'
    },
    primaryButton: {
        backgroundColor: '#FF69B4',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 8
    },
    primaryButtonTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});