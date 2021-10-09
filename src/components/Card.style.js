import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    margin: 5, 
    borderRadius: 10,
    padding: 15,
  },
  imageView: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,   
    resizeMode: 'contain',
    padding: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: "black"
  },
  price: {
    fontSize: 16,  
  },
  stock: {
    fontWeight: 'bold',
    color: "red"
  },  
});