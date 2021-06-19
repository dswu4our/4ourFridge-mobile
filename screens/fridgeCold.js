import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  FlatList
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EggImage from '../assets/egg.jpeg';
import axios from 'axios';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {API_URL} from '../config/constants.js';
import { State } from 'react-native-gesture-handler';

export default function FridgeCold ({ isSelectBtn }) {

  const [ingredients, setIngredients] = React.useState([]);
  React.useEffect(()=>{
    axios.get(`${API_URL}/fridgecold`).then((result)=>{
      setIngredients(result.data.ingredients);
      console.log(ingredients);
    }).catch((error)=>{
      console.error(error);
    })
  }, []);

  const [selectedIngredients, setSelectedIngredients] = React.useState([]);
  const [select, setSelect] = React.useState([]);

  const renderIngredients = ({ item, index }) => {
    const { name, slug, imgUrl, dday, id } = item;
    const isSelected = selectedIngredients.filter((i) => i === slug).length > 0;

    return (
      <TouchableOpacity
        onPress={() => {
          if (isSelected) {
            setSelectedIngredients((prev) => prev.filter((i) => i !== slug));
            isSelectBtn({flag: false, add : -1, id:index});
          } else {
            setSelectedIngredients(prev => [...prev, slug])
            setSelect(idd => [...idd, id]);
            console.log("selectedIng: ", select);
            isSelectBtn({flag: true, add : 1, id: index}, select);

          }
          console.log(index);
        }}>
          <View style={[styles.ingredientsCard, isSelected && { backgroundColor: 'gray'}]}>
            <View>
              <Image 
                style={styles.ingredientsImage} 
                source={{
                  uri: `${imgUrl}`
                }} 
                resizeMode={"contain"}/>
            </View>
            <View style={styles.ingredientsContents}>
              <Text style={styles.ingredientsFont} key={name}>{name}</Text>
              <Text style={styles.ingredientsFont} key={dday}>{dday}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  };

  return (
    <View>

        <View style={styles.ingredientsList} >
          <FlatList
            data={ingredients}
            renderItem={renderIngredients}
            isSelectBtn={isSelectBtn}
            numColumns={2}
            scrollEnabled={true}
          />
        </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  ingredientsCard: {
    marginTop: 40,
    marginLeft: 40,
    width: 150,
    borderColor: "#191919",
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: -3
    },
    shadowOpacity: 0.3,
    shadowRadius: 6
  },
  ingredientsImage: {
    width: "100%",
    height: 130,
  },
  ingredientsContents: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ingredientsFont: {
    fontSize: 20,
  },
  ingredientsList: {
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap'
  }
});