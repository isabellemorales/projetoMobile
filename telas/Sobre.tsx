import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function Sobre() {

  //Configuraçãoo d Vídeo 
  const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player=>{ player.loop=true;player.play();});

  return (
    <ScrollView style={styles.container}>
     {/* <Text style={styles.texto}> Hello World! No APP</Text> */}
      <StatusBar style="light" />
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'/>
      <Text>
        A Imp nasceu em janeiro de 2025, com um sonho ousado e uma paixão ardente pelo universo da moda praia.Em meio à energia contagiante do verão, percebemos um espaço para criar algo único: peças que celebrassem a beleza individual, a liberdade e a confiança de cada mulher. 
        {'\n'}{'\n'}Somos mais que moda praia, somos um estilo de vida. Na Imp, acreditamos que cada peça é uma cAelebração da liberdade, da beleza natural e da confiança. 
        Um convite para expressar sua essência e brilhar em cada momento.
        {'\n'}{'\n'} Por isso, cada coleção é cuidadosamente desenhada para ser atemporal, versátil e para se adaptar à personalidade de quem a usa. Somos um convite para viver com leveza, autenticidade e confiança.
        {'\n'}{'\n'}Nosso objetivo é que cada mulher que escolha Imp se sinta à vontade para brilhar, sem pressa, sem máscaras. Apenas sendo ela mesma, com toda a confiança e liberdade que a moda pode oferecer. Confira a coleção :) 
      </Text>
       <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode='contain'/>   
       <VideoView player={player} style={styles.video} allowsPictureInPicture/>         
    </ScrollView>
  );
}

//instância do componente 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d147eff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  // texto: {
    // fontSize: 24,
    // color: '#f8f8f8ff',
    // fontFamily: 'cursive',
  
  logo: {
    width: 300,
    height: 300,
    alignSelf: 'center'
  },

  video:{
    width: 350,
    height: 275,
    alignSelf: 'center',

  }
});
