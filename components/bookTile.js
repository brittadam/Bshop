import { StyleSheet, Text, View, Image, TouchableNativeFeedback} from 'react-native';

function btnpressed() {
  console.log("Book title 1 read");
}
function titlepressed() {
  console.log("Book title 1 pressed");
}

const Book = (props) => { 

  
  return (
    <View style={styles.container}>
      

      <View style={styles.book}>
          <TouchableNativeFeedback onPress={() => titlepressed()}>
            <Text style={styles.h2}>{props.title}</Text>
          </TouchableNativeFeedback>
          
          <Text style={styles.writer}>{props.writer}</Text>
          <Text style={styles.summary}>{props.summary}</Text>
          <View style={styles.extra}>
            <Text style={styles.isbn}>{props.isbn}</Text>
            <TouchableNativeFeedback onPress={() => btnpressed()}>
              <Text style={styles.btn}>{props.btn}</Text>
            </TouchableNativeFeedback>


            {/* <Text style={styles.writer}>by Some Random dude</Text>
          <Text style={styles.summary}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
          <View style={styles.extra}>
            <Text style={styles.isbn}>ISBN 978-7-2165-1860-1</Text>
            <Text style={styles.btn}>Read</Text> */}
          </View>
      </View>
    </View>
  );
}

export default Book;

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
