import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { KeyboardAvoidingView, ImageBackground, TextInput } from 'react-native';
import searchInput from './components/searchinput';
import { fetchLocationId } from './utils/api';
import getImage from './utils/getImage';
import{fetchWeather} from './utils/api'
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';

export default class App extends React.Component {
  constructor(props){
  super(props);
  this.setState={
    loading:false,
    error:false,
    location:'',
    weather:'',
    temperature: 0,
  };
}
componentDidMount(){
  this.handleUpdateLocation('Dubai')
}

    handleUpdateLocation = async city =>{
      if(!city) return;
      this.setState({loading:true}, async ()=> {
        try{
          const locationId = await fetchLocationId(city);
          const {location,weather,temperture} = await fetchWeather(locationId, weather, temperture);
          this.setState(
            {loading:false,
            error:false,
            location,weather,temperature,});
          
        }
        catch(e){
          this.setState({
            loading:true,
            error:true,
          });
        }
        }
  )}
  render(){
    const{loading,error,location,weather,temperature}=this.setState;
    return (
      <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <ImageBackground source = {getImages(weather)}
      style={style.imageContainer}
      imageStyle={styles.image}>
      <View style={styles.container}>
        <ActivityIndicator animating={loading} color="white" size="large"/>
        {!loading &&(
          <View>
            {!error &&(
              <View>
              <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
              <Text style={[styles.smallText, styles.textStyle]}>{weather}</Text>
              <Text style={[styles.smallText, styles.textStyle]}>{`${Math.celi(temperature) }Deg`}</Text>
              </View>
  
            )}
          </View>
        )}
        <searchInput placeHolder="serach any city" onSubmit={this.handleUpdateLocation}/>
        <StatusBar style="auto" />
  
      </View>
      </ImageBackground>
      </KeyboardAvoidingView>
      )
  }
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
