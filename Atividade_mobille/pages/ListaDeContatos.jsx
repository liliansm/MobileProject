import { View, StyleSheet } from "react-native";
import Contato from "../components/Contato";
import { Avatar, ListItem } from "react-native-elements";

export default ListaDeContatos = ({ navigation }) => (
    <View style={styles.container}>
        <View style={styles.listaContatosContainer}>
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Carlos'}
                number={'865478900'}
                onPress={() => navigation.navigate('detalhesContato', { 
                    nome: 'Carlos', 
                    numero: '865478900',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                })}
                containerStyle={styles.contatoItem}
                titleStyle={styles.contatoNome}
                subtitleStyle={styles.contatoNumero}
                chevron={{ color: '#FF69B4' }}
            />
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Denise'}
                number={'87645342'}
                onPress={() => navigation.navigate('contatoInfo', { 
                    nome: 'Denise', 
                    numero: '87645342',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                })}
                containerStyle={styles.contatoItem}
                titleStyle={styles.contatoNome}
                subtitleStyle={styles.contatoNumero}
                chevron={{ color: '#FF69B4' }}
            />
            <Contato
                avatar={'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}
                name={'Lilian'}
                number={'89878652'}
                onPress={() => navigation.navigate('contatoInfo', { 
                    nome: 'Lilian', 
                    numero: '89878652',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                })}
                containerStyle={styles.contatoItem}
                titleStyle={styles.contatoNome}
                subtitleStyle={styles.contatoNumero}
                chevron={{ color: '#FF69B4' }}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF0F5'
    },
    listaContatosContainer: {
        width: '100%',
        maxWidth: 500,
        marginHorizontal: 'auto',
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        overflow: 'hidden'
    },
    contatoItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#FFC0CB',
        paddingVertical: 15,
        backgroundColor: 'white'
    },
    contatoNome: {
        color: '#FF69B4',
        fontWeight: 'bold',
        fontSize: 16
    },
    contatoNumero: {
        color: '#888',
        fontSize: 14
    }
});