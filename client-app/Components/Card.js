import { Fragment, react } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const Card = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
                style={{width: 200, height: 200}}
            />
            <Text>Hello Component Card</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor:'red',
        alignItems: 'center',
    },
});

export default Card;