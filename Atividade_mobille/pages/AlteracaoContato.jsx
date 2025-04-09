import { View, StyleSheet, Image } from "react-native";
import { Input, Button } from "react-native-elements";

export default ContatoInfo = ({ route }) => {
  const { nome, numero, avatar } = route.params || {};

  return (
    <View style={styles.container}>
        <View style={styles.form}>
            <Image 
                source={{ uri: avatar }} 
                style={styles.avatar}
            />
            <Input
                placeholder="Nome"
                value={nome}
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
                value={numero}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                placeholderTextColor="#999"
            />
            
            <View style={{ width: '100%', marginTop: 16 }}>
                <Button
                    title='Alterar'
                    buttonStyle={styles.primaryButton}
                    titleStyle={styles.primaryButtonTitle}
                />
            </View>
            
            <View style={{ width: '100%', marginTop: 8 }}>
                <Button
                    title='Excluir'
                    buttonStyle={styles.deleteButton}
                    titleStyle={styles.deleteButtonTitle}
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