// Components/Search.js
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator} from 'react-native'
// import films from '../Helpers/filmData'
import FilmItem from './filmItem'
class Search extends React.Component {
  //initialiser le state avec  un tableau de films vide
  //state permet d'afficher les donnees un film et de modifier le component
  constructor(props) {
   super(props)
   this.state = {
     films: [],
     isLoading: false // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
     }
   this.searchedText= ""
   this.state = { films: [] }
  }


  _loadFilms() {
  console.log(this.state.isLoading) //log pour verifier qu on a bien du texte du TextInput
  // console.log(data): permet d'afficher les donnees de l API dans le terminal
  if (this.searchedText.length > 0) {
    this.setState({
      isLoading: true
    }) //lancement de chargement
    getFilmsFromApiWithSearchedText(this.searchedText).then(data => { // Seulement si le texte recherché n'est pas vide
      // forceUpdate permet de forcer un component à se rendre à nouveau
      //setState : reccupere les modif des donnees et indique a react que le component a besoin d'etre re-rendu avec ces nouvelles données.
      this.setState({
        films: data.results,
        isLoading: false //arrêt de chargement
      })
    })
  }
}
_displayLoading() {
      if (this.state.isLoading) {
        return (
          <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
            {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
          </View>
        )
      }
    }

    //recupere les donnees saisi ds la zone de texte
    _searchTextInputChanged(text) {
            this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
        }
  render() {
    console.log("RENDER")
    return (
      <View style={styles.main_container}>
        <TextInput
        style={styles.textinput} placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          //valider avec le touche entrer du clavier
          onSubmitEditing={() => this._loadFilms()}
        />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}

          keyExtractor={(item) => item.id.toString()}
           //afficher les lignes de filmData en utilisant  la fonction du fchier filmItem.js
           //on utilise une props film qui utilise les donnees de filmData.js
           //props permet de faire passer des information d'un component a un autre
          renderItem={({item}) => <FilmItem film={item}/>}
        />
        {this._displayLoading()}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 45,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Search
