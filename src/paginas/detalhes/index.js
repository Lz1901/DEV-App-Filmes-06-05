import { View, Text, Image} from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();

    return(
        <View style={styles.container}>

            <Image style={styles.image} source={{uri:(route.params.imagem)}}/>

            <Text>Nome: {route.params.titulo}</Text>
            <Text>Nota: {route.params.nota}</Text>
            <Text>Sinopse: {route.params.sinopse}</Text>

        </View>
    )
}