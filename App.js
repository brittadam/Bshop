import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={styles.h1}>Bookshop</Text>
      <View style={styles.cart}>
        <Image style={styles.icon} source={require('./assets/cart.png')}/>
        <Text style={styles.number}>1</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display:'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flexDirection:'row',
    marginTop: 60,
    margin: 20,
  },
  h1:{
    fontSize: 40,
   
  },
  icon:{
    maxHeight:40,
    width:40,
    marginLeft:50,
  },
  number:{
    fontSize: 20, 
    marginTop: 20,
  },
  cart:{
    display:'flex',
    flexDirection:'row',
  }
});
