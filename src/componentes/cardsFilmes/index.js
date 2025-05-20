import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({titulo, nota, imagem, sinopse}){
    const navigation = useNavigation();

    return(

        <TouchableOpacity style={styles.Filmes} onPress={()=> navigation.navigate('Detalhes', {titulo, nota, imagem, sinopse})}>
            <Image style={styles.images} source={{uri:(imagem)}}/>
            <Text style={styles.titulo}> Nome: {titulo} </Text>

            <Text style={styles.titulo}> Nota: {nota} </Text>
        </TouchableOpacity>

    )
}