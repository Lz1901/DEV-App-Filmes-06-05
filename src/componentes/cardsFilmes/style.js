import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    Filmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#a42022',
        padding:'15px',
        borderRadius:'10px',
        marginBottom: '10px',
        marginRight: '20px',
        width:'150px'
    },

    titulo:{
        color: '#fff',
        fontSize:12,
        paddingTop:8
    },
    
    images:{
        width:'130px',
        height:170,
        borderRadius:8
    }
})

export default styles