import { Text, Image } from "react-native";
import styles from './style.js'

// Vetor img
const imagens = [
    require('../../../assets/CinemarkBanner1.jpg'),
    require('../../../assets/CinemarkBanner2.jpg')
];

// Escolhe aleatóriamente uma img
const imagem = imagens[Math.floor(Math.random() * imagens.length)];

export default function Banner() {

    return (
        <>
            <Image style={styles.imageBanner} source={imagem} />

            <Text style={styles.textBanner}> Em Cartaz </Text>
        </>
    );

}