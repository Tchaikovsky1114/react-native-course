import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput ,Button,ScrollView,FlatList} from 'react-native';


export default function App() {
  const [value,setValue] = useState('');
  const [goalList,setGoalList] = useState([]);
  const inputHandler = (enteredText) => {
   setValue(enteredText);
  }
  const addGoalHandler = () => {
    setGoalList(prev => [...prev,{text:value, id: Math.random().toString(2,8)}]);
    setValue('')
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={value} placeholder='write anything.....' onChangeText={inputHandler}/>
        <Button title='Add Text' onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
      <Text style={styles.goalTitle}>List of todos</Text>
      <FlatList
      data={goalList}
      renderItem={itemData => {  
        return (
          <View style={styles.goal}>
          <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
        )
      }}
      keyExtractor={(item,index) => {
        return item.id
      } }
      alwaysBounceVertical={false} >
      </FlatList>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding:50,
    paddingHorizontal:16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingBottom:24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom:24
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width:'70%',
    marginRight:8,
    padding:8,
    
  },
  goalsContainer: {
    flex:5
  },
  goal:{
    
    paddingVertical:8,
    margin:4,
    backgroundColor: '#138cf0',
    borderRadius:10
  },
  goalTitle:{
    fontSize:20,
    fontWeight:'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#f91',
    paddingBottom:4,
    marginBottom:8,
  },
  goalText:{
    fontSize:14,
    fontWeight: '600',
    textAlign: 'center',
    color:'white'
  }
});
//1.11.228.213
