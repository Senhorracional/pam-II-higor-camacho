import React from "react";
import {Text, View, ScrollView, StyleSheet, Image} from "react-native";
import { Link } from "expo-router";
  const styles = StyleSheet.create({
    image: {  
      width: 210,
      height: 320,
      resizeMode: 'stretch',
      flexDirection: 'column'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#A3ADB5',
      alignItems: 'center'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: -320,
    marginLeft: 10,
    color: '#F5F1EB'
  },
  images: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    marginLeft: 10,
    backgroundColor: '#F5F1EB',
    padding: 10,
    
  }
  });

  const DisplayAnImageWithStyle = () => {
    return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Próximos Filmes:</Text>
      </View>
        <ScrollView style={styles.images}>
          <View>
            <Link href={"https://pt.wikipedia.org/wiki/Goodfellas"}>
            <Image 
                style={
                  styles.image
                   }
                source={{
                    uri: 'https://veja.abril.com.br/wp-content/uploads/2016/11/cartaz-do-filme.jpg?quality=70&strip=all%201386957'
                }}
                />
            </Link>    
          </View>
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/A_Lista_de_Schindler"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://br.web.img2.acsta.net/pictures/19/04/10/19/44/2904073.jpg'
                }}/>
          </Link>
          </View>
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Django_Unchained"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://a-static.mlcdn.com.br/450x450/poster-cartaz-django-livre-e-pop-arte-poster/poparteskins2/15938531222/e6bd396052e7bd2bb940cae0cd6d18fc.jpeg'
                }}/>
          </Link>
          </View>
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Blade_Runner_2049"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Era_uma_Vez_em..._Hollywood"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://br.web.img3.acsta.net/pictures/19/08/06/21/50/5749668.jpg'
                }}/>
          </Link>
          </View>  
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Interstellar"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://images.squarespace-cdn.com/content/v1/58b866f417bffc4dc469acab/1600748704866-I46WK7H3IX9W985PBHXJ/critica+interestelar+Christopher+nolan'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/O_Grande_Gatsby_(2013)"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/pt/2/26/TheGreatGatsby2012Poster.jpg'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Pulp_Fiction"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://m.media-amazon.com/images/I/61I5eZI9HJL._AC_UF894,1000_QL80_.jpg'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/O_Irland%C3%AAs"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/pt/d/da/The_Irishman_p%C3%B4ster.png'
                }}/>
          </Link>
          </View> 
        </ScrollView> 
    </View>    
    );
}
export default DisplayAnImageWithStyle
