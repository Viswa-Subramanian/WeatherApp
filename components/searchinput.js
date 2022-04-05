import react from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet,View ,TextInput} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-web';
export default class searchInput extends React.Components{
    static proptype={
        onSubmit: PropTypes.func.isRequired,
        placeHolder:PropTypes.string,

    };
    static defaultProps ={
        placeholder: "",

    };
    state = {
        text: "",
    };

    handleChangeText = text =>
    {
        this.setState({text});
    }
    handleSubmitEditing =() =>
    {
        const {onSubmit} = this.props;
        const {text} = this.state;
        if(!text) return;
        onsubmit(text);
        this.setState({text: ''});

    }
    render(){
        const {placeHolder} =this.props;
        const {text} = this.state;
        return(
            <View styles={styles.container}>
            <TextInput autocorrect={false} 
                placeHolder ="Search any place"
                style={style.textInput}
                clearButtonMode="always"
                onChangeText={this.handleChangeText} 
                onSubmitEditing={this.handleSubmitEditing}   
                />
            </View>);
            }
}
const styles = StyleSheet.create({
    container:{
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
      TextInput:
        {
            flex:1,
            color:'white',

        }

})