import { Image, Text, View, StyleSheet, useWindowDimensions, ScrollView } from "react-native";

import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from '../constants/colors';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    const { width, height } = useWindowDimensions();

    let imageSize = 300;
    let margin = 36;

    if (width < 380) {
      imageSize = 150;
    }

    if (height < 400) {
      imageSize = 100;
      margin = 20;
    }

    const imageStyle = {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize / 2,
      margin: margin
    };

    return (
      <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image 
                    style={styles.image}
                    source={require('../assets/images/success.png')}/>
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> {' '}
                rounds to guess the number{' '}
                <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen:{
      flex: 1
    },
    rootContainer: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
       // width: deviceWidth < 380 ? 150 : 300,
      // height: deviceWidth < 380 ? 150 : 300,
      // borderRadius: deviceWidth < 380 ? 75 : 150,
      borderWidth: 3,
      borderColor: Colors.primary800,
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
    },
    summaryText: {
      fontFamily: 'open-sans',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 24,
    },
    highlight: {
      fontFamily: 'open-sans-bold',
      color: Colors.primary500,
    },
  });