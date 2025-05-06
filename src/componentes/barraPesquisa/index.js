import { TextInput, View } from "react-native";
import styles from './style.js';

export default function Pesquisa() {

    return (


        <View style={styles.containerSearch}>
            <TextInput
                style={styles.inputSearch}
                placeholder="Digite o Filme que deseja buscar"
            />
        </View>

    );
}