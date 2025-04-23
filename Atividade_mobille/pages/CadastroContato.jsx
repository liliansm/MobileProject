import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

const API_URL = 'http://localhost:3000';

const CadastroContato = ({ route, navigation }) => {
  const { userId } = route.params || {};
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) {
      Alert.alert("Erro", "ID do usuário não encontrado");
      navigation.goBack();
    }
  }, [userId]);

  const salvarContato = async () => {
    if (!nome || !email || !telefone) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (!userId) {
      Alert.alert("Erro", "ID do usuário não encontrado.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`${API_URL}/usuarios/${userId}`);
      const usuario = response.data;

      const novoId = usuario.contatos?.length > 0 
        ? Math.max(...usuario.contatos.map(c => c.id)) + 1 
        : 1;

      const novoContato = { id: novoId, nome, email, telefone };

      await axios.patch(`${API_URL}/usuarios/${userId}`, {
        contatos: [...(usuario.contatos || []), novoContato]
      });

      Alert.alert("Sucesso", "Contato cadastrado com sucesso!");
      navigation.goBack();
    } catch (error) {
      console.error("Erro:", error);
      Alert.alert("Erro", "Falha ao cadastrar contato");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
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
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          placeholderTextColor="#999"
          keyboardType="phone-pad"
        />
        <View style={{ width: "100%", marginTop: 16 }}>
          <Button
            title={loading ? "Salvando..." : "Salvar"}
            buttonStyle={styles.primaryButton}
            titleStyle={styles.primaryButtonTitle}
            onPress={salvarContato}
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
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF0F5",
  },
  form: {
    width: "90%",
    maxWidth: 500,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 24,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    gap: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#FF69B4",
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  inputText: {
    color: "#333",
  },
  primaryButton: {
    backgroundColor: "#FF69B4",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 8,
  },
  primaryButtonTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CadastroContato;