import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './component/Header';



export default function App() {
  const  [items, setItems] = useState([]);

  const addTodo = (item) => {
    setItems([...items, item]);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={(item) => {
        addTodo(item);
      }} />

      <FlatList
          style={{ width:'85%' }}
          data={items}
          renderItem={({ item, index }) => <View style={{width:'60%',flexDirection:'row',padding:5}}>
            <Text style={{borderRadius:10,backgroundColor:'red', color:'white',textAlign:'center',width:30,height:30, fontSize:20}}>{index + 1}
            </Text>
            <Text style={{fontSize:18,paddingHorizontal:10,fontWeight:'400'}}>{item}</Text>
          </View>}
          showsVerticalScrollIndicator={false}
        />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flex: 1,
    backgroundColor: 'rgba(254,177,209,0.2)',
    alignItems: 'center',
    width: '100%',
  }
});
