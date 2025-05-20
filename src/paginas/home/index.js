
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Cabecalho from '../../componentes/cabecalho/index.js'
import Pesquisa from '../../componentes/barraPesquisa/index.js'
import Banner from '../../componentes/banner/index.js'
import Filmes from '../../componentes/data/filmes.js'
import CardMovies from '../../componentes/cardsFilmes/index.js';
import { ScrollView } from 'react-native-web';


export default function Home(){
    return(
        <ScrollView style={styles.container}>

      <View style={styles.containerImports}>

        <Cabecalho />

        <Pesquisa />

        <Banner />

        <View style={{ width: "90%" }}>

          <FlatList

            showsHorizontalScrollIndicator={false}

            horizontal={true}

            data={Filmes}

            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (

              <CardMovies titulo={item.nome} nota={item.nota} imagem={item.imagem} sinopse={item.sinopse} />

            )}

          />

        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  },

  containerImports: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

});