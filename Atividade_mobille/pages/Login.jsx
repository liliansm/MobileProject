import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";

export default Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <View style={styles.avatar}>
                    <Avatar
                        icon={{ name: 'person', color: '#fff' }}
                        rounded
                        size="large"
                        containerStyle={{ backgroundColor: '#FF69B4' }}
                    />
                </View>
                <Input
                    placeholder="Email"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    leftIcon={{ type: 'material', name: 'email', color: '#FF69B4' }}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    leftIcon={{ type: 'material', name: 'lock', color: '#FF69B4' }}
                />

                <View style={{ width: '100%', marginBottom: 16 }}>
                    <Button
                        title='Entrar'
                        onPress={() => navigation.navigate('contatos')}
                        buttonStyle={styles.primaryButton}
                        titleStyle={styles.primaryButtonTitle}
                    />
                </View>
                <View style={{ width: '100%', marginBottom: 24 }}>
                    <Button
                        title='Cadastre-se'
                        onPress={() => navigation.navigate('cadastro')}
                        buttonStyle={styles.secondaryButton}
                        titleStyle={styles.secondaryButtonTitle}
                    />
                </View>

            </View>
        </View>
    )
}

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
    avatar: {
        marginBottom: 32
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
        elevation: 3
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#FFC0CB',
        borderRadius: 6,
        paddingHorizontal: 10,
        marginBottom: 16,
        backgroundColor: '#fff'
    },
    inputText: {
        color: '#333'
    },
    primaryButton: {
        backgroundColor: '#FF69B4',
        paddingVertical: 12,
        borderRadius: 6,
        marginTop: 16
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#FF69B4',
        paddingVertical: 12,
        borderRadius: 6
    },
    primaryButtonTitle: {
        color: 'white',
        fontWeight: 'bold'
    },
    secondaryButtonTitle: {
        color: '#FF69B4',
        fontWeight: 'bold'
    },
    forgotPassword: {
        color: '#FF69B4',
        textDecorationLine: 'underline',
        marginTop: 8
    },
    cadastroTitle: {
        fontSize: 48,
        fontWeight: '500',
        marginBottom: 64,
        color: '#FF69B4'
    },

});