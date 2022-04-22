import { StyleSheet, text, TouchableOpacity } from 'react-native'; 
import React from 'react';  

export default Number = ({id, number, isSelected, onselected}) => {

    const handlePress = () => {
        if (!isSelected) {
            onselected(id);
        }
        
    };
    return (
        <TouchableOpacity>
        <text style={[styles.random, isSelected && styles.selected]}>{number}</text>
    </TouchableOpacity>
    )
   
    };

const styles = StyleSheet.create({
    random: {
        backgroundColor: '#999',
        width: 100,
        marginHorizontal: 15,
        marginVertical:35,
        fontSize: 35,
        textAlign: 'center',
        minHeight: 45,
    },

selected: {
        opacity: 0.3,
        }
});


