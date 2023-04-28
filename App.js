import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import Filme from './src/components/Filme';

export default function App() {
  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        setFilmes(objeto.data)
      });
  },[])

  return (
    <View style={styles.container}>
      {filmes.length > 0 ? filmes.map(filme => <Filme filme={filme}/>) : <Text>Carregando...</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E3DB',
    alignItems: 'center',
    justifyContent: 'center'
  },
});