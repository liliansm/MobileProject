import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

const API_URL = 'http://localhost:3000';

const AlteracaoContato = ({ route, navigation }) => {
  const { userId, contatoId, contato } = route.params || {};
  const [nome, setNome] = useState(contato?.nome || "");
  const [email, setEmail] = useState(contato?.email || "");
  const [telefone, setTelefone] = useState(contato?.telefone || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId || !contatoId) {
      Alert.alert("Erro", "Dados incompletos para edição");
      navigation.goBack();
    }
  }, [userId, contatoId]);

  const alterarContato = async () => {
    if (!nome || !email || !telefone) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    setLoading(true);

    try {
    
      const response = await axios.get(`${API_URL}/usuarios/${userId}`);
      const usuario = response.data;

      if (usuario && usuario.contatos) {

        const contatosAtualizados = usuario.contatos.map(c => 
          c.id === contatoId ? { ...c, nome, email, telefone } : c
        );

        await axios.put(`${API_URL}/usuarios/${userId}`, {
          ...usuario,
          contatos: contatosAtualizados
        });

        Alert.alert("Sucesso", "Contato atualizado com sucesso!");
        navigation.goBack();
      }
    } catch (error) {
      console.error("Erro ao atualizar contato:", error);
      Alert.alert("Erro", "Não foi possível atualizar o contato");
    } finally {
      setLoading(false);
    }
  };

  const excluirContato = async () => {
    setLoading(true);
    
    try {
      const response = await axios.get(`${API_URL}/usuarios/${userId}`);
      const usuario = response.data;

      if (usuario && usuario.contatos) {
        const contatosAtualizados = usuario.contatos.filter(c => c.id !== contatoId);

        await axios.put(`${API_URL}/usuarios/${userId}`, {
          ...usuario,
          contatos: contatosAtualizados
        });

        Alert.alert("Sucesso", "Contato excluído com sucesso!");
        navigation.goBack();
      }
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
      Alert.alert("Erro", "Não foi possível excluir o contato");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image 
          source={{ uri: 'https://i.imgur.com/0CE7jHL.png' }} 
          style={styles.avatar}
        />
        <Input
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          placeholderTextColor="#999"
        />
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          placeholderTextColor="#999"
        />
        <Input
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          placeholderTextColor="#999"
        />
        
        <View style={{ width: '100%', marginTop: 16 }}>
          <Button
            title={loading ? 'Salvando...' : 'Salvar Alterações'}
            buttonStyle={styles.primaryButton}
            titleStyle={styles.primaryButtonTitle}
            onPress={alterarContato}
            disabled={loading}
          />
        </View>
        
        <View style={{ width: '100%', marginTop: 8 }}>
          <Button
            title={loading ? 'Excluindo...' : 'Excluir Contato'}
            buttonStyle={styles.deleteButton}
            titleStyle={styles.deleteButtonTitle}
            onPress={excluirContato}
            disabled={loading}
          />
        </View>
      </View>
    </View>
  );
};

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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20
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
    borderRadius: 6
  },
  primaryButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  deleteButton: {
    backgroundColor: '#FF3A30',
    paddingVertical: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D32F2F'
  },
  deleteButtonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default AlteracaoContato;