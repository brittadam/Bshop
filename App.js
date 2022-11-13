import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <StatusBar style="auto" />
        <Text style={styles.h1}>Bookshop</Text>
        <View style={styles.cart}>
          <Image style={styles.icon} source={require('./assets/cart.png')}/>
          <Text style={styles.number}>1</Text>
        </View>
        
      </View>

      <View style={styles.book}>
          <Text style={styles.h2}>Book title 1</Text>
          <Text style={styles.writer}>by Some Random dude</Text>
          <Text style={styles.summary}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          <View style={styles.extra}>
            <Text style={styles.isbn}>ISBN 978-7-2165-1860-1</Text>
            <Text style={styles.btn}>Read</Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    margin: 20,
  },
  header: {
    display:'flex',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flexDirection:'row',
    marginTop: 60,
    marginBottom:40,
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
  },
  h2:{
    fontSize: 25,
  },
  writer:{
    marginBottom: 20,
  },
  summary:{
    marginBottom:15,
  },
  extra:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  btn:{
      borderWidth:2,
      padding:5,
  },
  book:{
    paddingBottom:10,
    borderBottomWidth:2,
  }
});
