import { Text, Image, Button, View } from "react-native";

import styles from './styles';

export default function Filme(props){
    return(
        <View style={styles.container}>
            <View style={styles.vImg}>
                <Image style={styles.img} source={{uri: props.filme.poster}}/>
            </View>
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{props.filme.attributes.titulo}</Text>
                <Text style={styles.sinopse}>{props.filme.attributes.sinopse}</Text>
                <Button style={styles.button}
                title="comprar" 
                color='#E86A33'
                padding='100px'
                borderRadius='80px'            
                />
            </View>
        </View>
    );
}