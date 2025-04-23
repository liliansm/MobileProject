import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, ActivityIndicator, Alert } from "react-native";
import Contato from "../components/Contato";
import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const ListaDeContatos = ({ route, navigation }) => {
    const [contatos, setContatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userId } = route.params || {};

    useEffect(() => {
        if (!userId) {
            Alert.alert("Erro", "ID do usuário não encontrado");
            return;
        }

        const fetchContatos = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/usuarios/${userId}`);
                console.log("Dados do usuário:", response.data);

                if (response.data.contatos) {
                    setContatos(response.data.contatos);
                } else {
                    setContatos([]);
                }
            } catch (error) {
                console.error("Erro detalhado:", error.response?.data || error.message);
                Alert.alert("Erro", "Não foi possível carregar os contatos");
            } finally {
                setLoading(false);
            }
        };

        fetchContatos();
    }, [userId]);


    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#FF69B4" />
                <Text>Carregando contatos...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Meus Contatos</Text>
            <FlatList
                data={contatos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Contato
                        name={item.nome}
                        number={item.telefone}
                        email={item.email}
                        navigation={navigation}  
                        userId={userId}          
                        contato={item}           
                        avatar={item.avatar} 
                    />
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>Nenhum contato encontrado</Text>
                }
            />
        </View>
    );
};

export default ListaDeContatos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff0f5',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ff69b4',
        marginBottom: 20,
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff0f5',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#999',
        marginTop: 20,
    }
});
