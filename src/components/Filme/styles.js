import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#41644A',
        width: '90%',
        borderRadius: 20,
        margin: 20,
        padding: 20
    },

    conteudo: {
        flex: 1,
    },

    vImg: {
        backgroundColor: 'black',
        height: '100%',
        width: '40%',
        marginRight: 15,
        padding: 5
    },

    img: {
        width: '100%',
        height: '100%'
    },

    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },

    sinopse: {
        fontSize: 15,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#263A29'
    },


});

export default styles;