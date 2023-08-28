import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const windowWidth = Dimensions.get('window').width;
const imageWidth = (windowWidth - 40) / 3; // Adjust padding and margins accordingly

function PhotoSelectScreen() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Additional initialization or setup if needed
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      maxSelectedAssets: 30,
      aspect: [9, 16],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const newImages = result.assets.map(asset => asset.uri);
      setImages([...images, ...newImages].slice(0, 30));
    }
  };

  const renderItem = ({ item, index }) => (
    <Image source={{ uri: item }} style={{ width: imageWidth, height: imageWidth, margin: 5 }} />
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={pickImage} style={{ width: 200, height: 50, backgroundColor: 'blue', justifyContent: 'center', borderRadius: 20, marginTop: 50, marginBottom: 20 }}>
        <Text style={{ color: 'white', textAlign: "center", fontSize: 30 }}>Select Photos</Text>
      </TouchableOpacity>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
      />
    </View>
  );
}

export default PhotoSelectScreen;
