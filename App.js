import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import Book from './components/bookTile.js';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <StatusBar style="auto" />
        <Text style={styles.h1}>Bookshop</Text>
        <View style={styles.cart}>
          <Image style={styles.icon} source={require('./assets/cart.png')}/>
          <Text style={styles.number}>1</Text>
        </View>
        
      </View>

      <Book title="Book title 1" writer="by Some Random dude" summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" isbn="ISBN 978-7-2165-1860-1" btn="read"></Book>
      <Book title="Book title 2" writer="by some other dude" summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" isbn="ISBN 978-2-1425-4277-8" btn="read"></Book>
      <Book title="Book title 3" writer="by Jane Doe" summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" isbn="ISBN 978-5-9684-0436-7" btn="read"></Book>
      <Book title="Book title 4" writer="by John Doe" summary="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" isbn="ISBN 978-8-3356-4834-0" btn="read"></Book>



    </ScrollView>
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
