import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import categories from './categories.json';
import Task from './Task.json';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
   const info = categories[0];
   const data = Task[0];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView  showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
        <Text style={styles.headerText}>Hello, Devs</Text>
        <Text style={styles.headerSubText}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/download.png')} style={styles.userIcon}/>
      </View>
      <View style={styles.searchbarContainer}>
      <View style={styles.searchbar}>
        <Feather name="search" size={24} color="black" />
        <TextInput placeholder='Search' style={styles.searchText}/>
      </View>
      <View style={styles.slider}>
        <FontAwesome5 name="sliders-h" size={27} color="white" />
      </View>
      </View>
      

      <View style={styles.categories}>
        <Text style={styles.categoryHeader}>Categories</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        contentContainerStyle={{gap: 10}}
        renderItem={({item}) => (
          <View style={styles.categoriesContainer}>
            <Text style={styles.categoryName}>{item.categoryName}</Text>
            <Text style={styles.categoryTask}>{item.categoryTask}</Text>
            <Image source={{uri: item.categoryImage}} style={styles.categoryImage} />
          </View>
        )}
        />
      </View>

      <View>
        <Text style={styles.taskHeader}>Ongoing Tasks</Text>
        <FlatList
        data={Task}
        contentContainerStyle={{gap: 10}}
        renderItem={({item}) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskName}>{item.taskName}</Text>
          </View>
        )}
        />
      </View>
    </View>
      </ScrollView>
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  headerSubText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 450
  },
  userIcon: {
    width: 65,
    height: 65,
    borderRadius: 35,
    backgroundColor: '#fff'
  },
  searchbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 20,
    height: 49,
    width: 290,
  },
  searchText: {
    fontSize: 16,
    paddingHorizontal: 10,
    flex: 1,
    height: '100%'
  },
  slider: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    height: 50
  },
  categoryHeader:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 40
  },
  categoriesContainer:{
    alignItems: 'flexstart',
    padding: 15,
    backgroundColor: '#fff',
    width: 250,
    height: 250,
    borderRadius: 10,
    marginLeft: 30,
    Top: 249,
    backgroundColor: '#FFFFFF',
  },
  categoryName:{
    fontSize: 20,
    fontWeight: 500,
    color: '#000000',
    alignItems: 'flex-start',
    
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    marginLeft: 35,
    justifyContent: 'center',
    alignContent: 'center'
  },
  taskContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 50,
    borderRadius: 10,
    marginLeft: 30,
    marginRight: 30
  },
  taskName: {
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 'bold',
  },
  taskHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    marginLeft: 40
  }

});

