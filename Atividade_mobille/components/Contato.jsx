import { StyleSheet } from "react-native"
import { Avatar, ListItem } from "react-native-elements"

export default Contato = ({ name, number }) => (
    <ListItem bottomDivider>
        <Avatar
            icon={{ name: 'person' }}
            rounded
            size="medium"
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}
        />
        <ListItem.Content>
            <ListItem.Title>{name}</ListItem.Title>
            <ListItem.Subtitle>{number}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
    </ListItem>
)

const styles = StyleSheet.create({
    containerContato: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding: '1rem',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10,
        gap: 2
    },
    contatoNome: {
        fontWeight: '600'
    },
    contatoNumero: {
        fontWeight: '500'
    }
});