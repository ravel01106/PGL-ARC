import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import FrontCard from "../components/FrontCard";
import { cardInfoContext } from "../context/CardContext";
import QRCode from "react-native-qrcode-svg";

const QrScreen = () => {
  const { title, qr } = React.useContext(cardInfoContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <FrontCard />
        <View style={styles.infoContainer}>
          <Text style={[styles.text, styles.cardTitle]}>{title}</Text>
          <View style={[styles.infoContainer, styles.QrContainerStyle]}>
            <View style={styles.QrStyle}>
              <QRCode value={qr} size={200} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QrScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: 350,
    height: 550,
    backgroundColor: appColors.secundary,
    borderRadius: 20,
  },
  infoContainer: {
    marginVertical: "7%",
  },
  text: {
    fontSize: 19,
    color: appColors.letter,
    paddingHorizontal: "5%",
    paddingVertical: "3%",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  QrContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  QrStyle: {
    borderWidth: 8,
    borderColor: "white",
  },
});
