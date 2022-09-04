/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ImagesData, BlackIcons } from './src/Utility/Images';
import SelectDropdown from 'react-native-select-dropdown';
import CustomPieceImage from './src/components/customPieceImage';
import { Colors } from './src/Utility/Colors';

var data = [1, 2, 3, 4, 5, 6, 7, 8];

const openingMove = [
  'King Pawn Opening',
  'Queen Pawn Opening',
  'Réti Opening',
  'English Opening',
  'King Fianchetto Opening',
];

const App = navigation => {
  const [kingOpen, setKingPawn] = useState(false);
  const [queenOpen, setQueenPawn] = useState(false);
  const [retiOpen, setRetiOpen] = useState(false);
  const [engOpen, setEngOpen] = useState(false);
  const [fianOpen, setFianOpen] = useState(false);


  const renderColor = (j, i) => {
    const offSet = j % 2 === 0 ? 1 : 0;
    const backgroundColor = (i + offSet) % 2 === 0 ? Colors.black : 'white';
    return backgroundColor;
  };

  onResetPress = () => {
    console.log('I am here');
    setKingPawn(false);
    setQueenPawn(false);
    setRetiOpen(false);
    setEngOpen(false);
    setFianOpen(false);
  };

  const renderqueenOpen = (j, i) => {
    if (j == 4 && i == 3) {
      if (queenOpen) {
        return (
          <CustomPieceImage
            imageUrl={require('./src/Assets/black_extra.png')}
          />
        );;
      } else {
        return (
          <CustomPieceImage
            imageUrl={require('./src/Assets/black_extra.png')}
            checking="false"
          />
        );;
      }
    }
  };

  return (
    <View style={styles.conatiner}>
      {console.log('ImageDatya Testing render', kingOpen, queenOpen)}
      <View style={styles.mainView}>
        {data.map((_, j) => (
          <View style={styles.innerContainer}>
            {data.map((_, i) => (
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: renderColor(j, i),
                }}>
                {/* {j == 0 ? <Text>{ansPiecee[i]}</Text> : null} */}
                {console.log('ImnageData in loop', ImagesData[i])}
                {j == 0 && ImagesData[i] !== undefined ? (
                  <CustomPieceImage
                    imageUrl={ImagesData[i].imageUrl}
                    hiddenVal={queenOpen}
                  />
                ) : null}
                {j == 1 ? (
                  <CustomPieceImage
                    imageUrl={require('./src/Assets/white_extra.png')}
                  />
                ) : null}
                {j == 6 ? (
                  <CustomPieceImage
                    imageUrl={require('./src/Assets/black_extra.png')}
                  />
                ) : null}
                {j == 7 && BlackIcons[i] !== undefined ? (
                  <CustomPieceImage imageUrl={BlackIcons[i].imageUrl} />
                ) : null}
                {j == 4 && i == 4 && kingOpen ? (
                  <CustomPieceImage
                    imageUrl={require('./src/Assets/black_extra.png')}
                  />
                ) : null}

                {j == 4 && i == 3 && queenOpen ? (
                  <CustomPieceImage
                    imageUrl={require('./src/Assets/black_extra.png')}
                  />
                ) : null}

                {j == 4 && i == 2 && engOpen ? (
                  <CustomPieceImage
                    imageUrl={require('./src/Assets/black_extra.png')}
                  />
                ) : null}

                {j == 5 && i == 5 && retiOpen ? (
                  <CustomPieceImage
                    imageUrl={require('./src/Assets/black_two.png')}
                  />
                ) : null}

                {j == 5 && i == 6 && fianOpen ? (
                  <CustomPieceImage
                    imageUrl={require('./src/Assets/black_extra.png')}
                  />
                ) : null}
                {/* <Text>
                  {j} {i}
                </Text> */}
                <Text
                  style={{
                    color: 'red',
                    opacity: i == 0 ? 1 : 0,
                    marginLeft: -20,
                  }}>
                  {8 - j}
                </Text>
                {j === 7 && (
                  <Text
                    style={{ color: 'red', marginBottom: -20, marginLeft: 22 }}>
                    {String.fromCharCode(97 + i)}
                  </Text>
                )}
              </View>
            ))}
          </View>
        ))}
        <View style={styles.buttonsView}>
          <SelectDropdown
            data={openingMove}
            searchPlaceHolder={'Select Moves'}
            onSelect={(selectedItem, index) => {
              if (selectedItem == 'King Pawn Opening') {
                setKingPawn(true);
              } else if (selectedItem == 'Queen Pawn Opening') {
                setQueenPawn(true);
              } else if (selectedItem == 'Réti Opening') {
                setRetiOpen(true);
              } else if (selectedItem == 'English Opening') {
                setEngOpen(true);
              } else if (selectedItem == 'King Fianchetto Opening') {
                setFianOpen(true);
              } else {
                console.log('No Move');
              }

              console.log(selectedItem, index);
            }}
            buttonStyle={styles.dropDownStyle}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <View style={styles.buttonResetView}>
            <TouchableOpacity
              onPress={() => onResetPress()}
              style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    height: 40,
    width: 100,
    backgroundColor: 'white',
    // marginLeft: 30,
    marginTop: 30,
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  mainView: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conatiner: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  buttonsView: { marginTop: 30 },
  buttonResetView: { justifyContent: 'center', alignItems: 'center' },
  dropDownStyle: { height: 40, width: '80%' },
});
