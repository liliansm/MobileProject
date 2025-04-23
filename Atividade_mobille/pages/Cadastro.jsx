import React, {useState} from "react";
import axios from "axios";
import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from "react-native-elements"

function Cadastro ({ navigation }){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cpf, setCpf] = useState("");

    const inserirDados = () => {
        axios.post("http://localhost:3000/usuarios", { 
            nome,
            email,
            senha,
            cpf,
        })
        .then((response) => {
            Alert.alert("Sucesso!", "Cadastro realizado com sucesso.");
            navigation.goBack();
        })
        .catch((error) => {
            Alert.alert("Erro", "Falha ao cadastrar. Verifique os dados.");
            console.error(error);
        });
    };


    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.cadastroTitle}>Cadastro</Text>
                
                <Input
                    placeholder="Nome"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    value={nome}
                    onChangeText={setNome}
                />
                <Input
                    placeholder="Email"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                />
                <Input
                    placeholder="CPF"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    value={cpf}
                    onChangeText={setCpf}
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry={true}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    placeholderTextColor="#999"
                    value={senha}
                    onChangeText={setSenha}
                />

                <View style={{ width: '100%', marginTop: 16 }}>
                    <Button
                        title='Salvar'
                        buttonStyle={styles.primaryButton}
                        titleStyle={styles.primaryButtonTitle}
                        onPress={inserirDados}
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
    cadastroTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#FF69B4'
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#FF69B4',
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
        marginTop: 8
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
        fontWeight: 'bold',
        fontSize: 16
    },
    secondaryButtonTitle: {
        color: '#FF69B4',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default Cadastro;