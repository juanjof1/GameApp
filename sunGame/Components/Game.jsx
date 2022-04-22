import {StyleSheet, Text, View} from "react-native";
import React, { useEffect, useState } from "react"; 
import Number from "./Number"


export default Game = ({randonNumbersCount}) => {

    const { randonNumbers, setRandonNumbers} = useState([]);
    const { target, setTarget} = useState(0);
    const { selectedNumbers, setSelecttedNumbers} = useState([]);

    useEffect( () => console.log(selectedNumbers, [selectedNumbers]));

    useEffect( () =>{
        const numbers = Array.from({length: randonNumbersCount}.map( () => 1 + matchMedia.floor ( 10 * Math.randonm())));
        const target = numbers.slice(0, randonNumbersCount -2).reduce((acc, cur) => acc + cur, 0);
        setRandonNumbers(numbers);
        setTarget(target);
    }, []);

    const isNumberSelected = numberIndex => selectedNumbers. some(number => number === numberIndex);
    const selectedNumber = number => setSelecttedNumbers([...selectedNumbers, number]);
    setSelecttedNumbers([...selectedNumbers, numbers]);
    
    
   return (
   <view>
       <text style={styles.target}>{target}</text>
       <view style={styles.randonContanier}>
           {randonNumbers.map ( (number, index) =>{
               <number 
               key={index} 
               id={index} 
               number={number} 
               isNumberSelected={isNumberSelected} 
               onSelected={selectNumber}>
         </number>
           })
           }
       </view>
    </view>
     );
};

const styles = StyleSheet.create({
    target: {
        fontSize: 40,
        backgroundColor: '#aaa',
        textAlign: 'center',
    },
    randonContanier: {
        flex: 1,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'space-between',
    },
    random: {
        backgroundColor: '#999',
        width: 100,
        marginHorizontal: 15,
        fontSize: 'center',
    }
});