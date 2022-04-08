import {StyleSheet, Text, View} from "react-native";
import React from "react"; 

export default Game = ({randonNumbers}) => {
    // const target = 10 + Math.floor [ 40 +Match.randonm ()] // 10...50

    const numbers = Array.from({length: randonNumbers -2}.map( () => 1 + matchMedia.floor ( 10 * Math.randonm())));
    const target = numbers.slice(0, randonNumbers -2).reduce((acc, cur) => acc + cur, 0);

    
    return (<view>
        <text style={styles.target}>{target}</text>
        <view style={styles.randonContanier}>
        {numbers.map((number, index) =>
        <text key={index} style={styles.random}>{number}</text>
        )}
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