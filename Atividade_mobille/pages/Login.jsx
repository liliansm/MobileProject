import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Avatar, Input, Button } from "react-native-elements";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);

    const auth = getAuth(app);

    const fazerLogin = async () => {
        if (!email || !senha) {
            Alert.alert("Erro", "Preencha todos os campos!");
            return;
        }

        setLoading(true);
        
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;
            
            Alert.alert("Sucesso!", "Login realizado com sucesso.");
            navigation.navigate('contatos', { userId: user.uid });
            
        } catch (error) {
            let errorMessage = "Erro ao fazer login. Tente novamente.";
            
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = "E-mail inválido.";
                    break;
                case 'auth/user-disabled':
                    errorMessage = "Usuário desativado.";
                    break;
                case 'auth/user-not-found':
                    errorMessage = "Usuário não encontrado.";
                    break;
                case 'auth/wrong-password':
                    errorMessage = "Senha incorreta.";
                    break;
                default:
                    console.error("Erro no login:", error);
            }
            
            Alert.alert("Erro", errorMessage);
        } finally {
            setLoading(false);
        }
    };

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
                    value={email}
                    onChangeText={setEmail}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    leftIcon={{ type: 'material', name: 'email', color: '#FF69B4' }}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={setSenha}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    leftIcon={{ type: 'material', name: 'lock', color: '#FF69B4' }}
                />

                <View style={{ width: '100%', marginBottom: 16 }}>
                    {loading ? (
                        <ActivityIndicator size="large" color="#FF69B4" />
                    ) : (
                        <Button
                            title='Entrar'
                            onPress={fazerLogin}
                            buttonStyle={styles.primaryButton}
                            titleStyle={styles.primaryButtonTitle}
                        />
                    )}
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
    );
};

// Estilos (mantidos os mesmos)
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
    }
});

export default Login;