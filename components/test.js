import React from 'react'
//importet API stylesheet de react native
//importer les compnnts react native
import{StyleSheet, View, Button, TextInput} from 'react-native'


class Search extends React.Component {
    render = function () {
        return (
            // Ici on rend à l'écran les éléments graphiques de notre component custom Search
      <View style={{ flex: 1, marginTop: 22, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
        <View style={{ flex: 1, height: 70, width: 70, backgroundColor: 'red' }}></View>
        <View style={{ flex: 1, height: 50, width: 50, backgroundColor: 'green' }}></View>
        <View style={{ flex: 3, height: 50, width: 50, backgroundColor: 'blue' }}></View>
        <TextInput style={styles.textinput,styles.bouton } placeholder='Titre du film'/>
        <Button style={styles.bouton} title='Rechercher' onPress={() => {}}/>
      </View>
        )
    }
}
//////creer une constante style qui utilise l'api stylesheet
const styles = StyleSheet.create ( {
  textinput1: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  bouton: {
    backgroundColor: '#707171',
  }
})
  //render : retourne un element graphique
  export default Search
