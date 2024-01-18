import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return <View style = {styles.background}>
    <Feather name = "search" style = {styles.iconStyle}/>
        <TextInput style = {styles.inputStyle}
        autoCorrect={false}
        placeholder="Search"
        value = {term}
        onChangeText = {onTermChange}
        onEndEditing = {onTermSubmit}/>
    </View>
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'lightgrey',
        height:50,
        margin:15,
        borderRadius:5,
        flexDirection:'row'
    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }

});

export default SearchBar;