import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        height: '100%',
        alignItems: 'center'
    },

    image: {
        width: '260px',
        height: '380px',
        borderRadius: '50px',
        border: '20px solid #a42022',
        marginTop: '50px'
    },

     name: {
        marginTop: 30,
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    nota: {
        color: '#a42022', 
        fontSize: 26,
        fontWeight: '600',
        marginTop: 8,
    },

    sinopse: {
        marginTop: '30px',
        color: '#DDDDDD',
        width: '100%',
        textAlign: 'justify',
        fontSize: '16px',
        backgroundColor: '#1E1E1E',
        padding: 15,
        borderRadius: 20,
    }

});

export default styles;