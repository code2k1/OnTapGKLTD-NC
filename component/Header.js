import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Header(props){
    const [item, setItem] = useState();
    return(
        <View style={styles.container1}>
            <TextInput value={item} onChangeText={value => setItem(value)} placeholder="Nhập tên ngôn ngữ lập trình" style={styles.input}></TextInput>
            <TouchableOpacity onPress={() => {
                props.onPress(item)
                setItem('')
            }}>
                <View style={{backgroundColor:'#ebfc6d',paddingHorizontal:20,paddingVertical:10,borderRadius:15}}>
                    <Text style={{fontSize:20,fontWeight:"bold",opacity:0.6}}>Nhập</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container1:{
        backgroundColor:'#72f296',
        borderRadius:10,
        width:350,
        alignItems:"center",
        justifyContent:"space-around",
        height:130,
        textAlign:"center"
    },
    input:{
        fontSize:16,
        width:'70%',
        backgroundColor:'#fff',
        height:50,
        borderRadius:50,
        paddingHorizontal:20

    }
})