import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import Card from './components/Card';
import store from './store.json';


const App = () => {
  const renderCard = ({item}) => <Card item={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="  Ara..." />   
      <FlatList  
        keyExtractor={item => item.id.toString()}
        data={store}
        renderItem={renderCard}  
        numColumns={2}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 3,
  },  
  headerText: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 35,
    color: "purple"
  },
  input: {
    borderRadius: 10,
    margin: 4,
    backgroundColor: "#F5F5F5"
  }
});

export default App
