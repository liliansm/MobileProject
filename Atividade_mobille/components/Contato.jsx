import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

const Contato = ({ name, number, email, navigation, avatar, userId, contato }) => (
    <ListItem 
        containerStyle={styles.container}
        onPress={() => navigation.navigate('detalhesContato', { 
            userId: userId,
            contatoId: contato.id,
            contato: contato
        })}
    >
        <Avatar
            rounded
            size="medium"
            source={{ uri: avatar || 'https://i.imgur.com/0CE7jHL.png' }}
            avatarStyle={styles.avatar}
        />
        <ListItem.Content style={styles.content}>
            <ListItem.Title style={styles.contatoNome}>{name}</ListItem.Title>
            <ListItem.Subtitle style={styles.contatoNumero}>{number}</ListItem.Subtitle>
            {email && <ListItem.Subtitle style={styles.contatoEmail}>{email}</ListItem.Subtitle>}
        </ListItem.Content>
        <ListItem.Chevron color="#ff69b4" size={26} />
    </ListItem>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#ffc0cb',
        paddingVertical: 12,
    },
    avatar: {
        borderWidth: 2,
        borderColor: '#ff69b4',
    },
    content: {
        marginLeft: 15,
    },
    contatoNome: {
        fontWeight: '600',
        color: '#d6336c',
        fontSize: 18,
    },
    contatoNumero: {
        fontWeight: '500',
        color: '#ff69b4',
        fontSize: 14,
    },
    contatoEmail: {
        color: '#888',
        fontSize: 12,
        marginTop: 2,
    }
});

export default Contato;