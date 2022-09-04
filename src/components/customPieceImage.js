import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

const CustomPieceImage = (props) => {
    console.log("CustomPieceImage",props)
  return (
    <View
      style={styles.container}>
      <Image
        source={props.imageUrl}
        style={styles.imageStyle}
      />
    </View>
  );
};

export default CustomPieceImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:8
  },
  imageStyle: {height: 20, width: 20, padding: 10},
});
