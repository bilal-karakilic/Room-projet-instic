
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function Header() {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Home</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
