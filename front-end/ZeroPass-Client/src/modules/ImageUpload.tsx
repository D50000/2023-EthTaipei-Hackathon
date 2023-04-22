import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

interface Props {
  label: string;
  onImageSelect: (image: string) => void;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  h2: {
    fontSize: 25,
  },
});

const ImageUpload = ({ label, onImageSelect }: Props) => {
  const [image, setImage] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0]?.uri ?? "";
      setImage(imageUri);
      onImageSelect(imageUri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h2}>{label}</Text>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Button title="Upload Image" onPress={pickImage} />
      )}
    </View>
  );
};

export default ImageUpload;
