import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { KeyboardAvoidingView, ImageBackground, TextInput } from 'react-native';
import searchInput from './components/searchinput';
import getImage from './utils/getImage';

export default function App() {
  return (

    handleUpdateLocation = async city =>{
      if(!city) return;
      this.setState({loading:true}, async ()=> {
        try{
          const locationId = await fetchLocationId(city);
          const {location,weather,temperture} = await fetchWeather(locationId, weather, temperture)
        }
        catch(e){
          console.log("error");
        }
      })
      
    });
    
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
    <ImageBackground source = {getImages(weather)}
    style={style.imageContainer}
    imageStyle={styles.image}>
    <View style={styles.container}>
      <Text style={[style.textStyle, styles.largeText]}>Sanghai</Text>
      <Text style={[style.textStyle, styles.smallText]}>Cloudy</Text>
      <Text style={[style.textStyle, styles.largeText]}>23</Text>
      <searchInput placeHolder="serach any city" onSubmit={this.handleUpdateLocation}/>
      <StatusBar style="auto" />

    </View>
    </ImageBackground>
    </KeyboardAvoidingView>

}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle:{
    textAlign:'center',
    fontFamily:'Roboto',
  },

  largeText:{
    fontSize:45,
  },
  smallText:{
    fontSize:25,
  }, 
  textInput:{
    backgroundColor:'blue',
    color:'black',
    height:45,
    width:300,
    matginTop:25,
    marginHorizontal:20,
    paddingHorizontal:10,
    alignSelf:'center',
    borderRadius:5,
  },

  imagecontainer:{
    flex:1,
  },

  image:
  {
    flex:1,
    width: null,
    height: null,
    resizeMode:'cover'
  },


});
