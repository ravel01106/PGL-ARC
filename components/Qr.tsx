import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";
import QRCode from "react-native-qrcode-svg";
import cardInfo from "../data/CardInfo";

const Qr = () => {
  const { title, qr } = cardInfo;
  return (
    <View style={styles.infoContainer}>
      <Text style={[styles.text, styles.cardTitle]}>{title}</Text>
      <View style={[styles.infoContainer, styles.QrContainerStyle]}>
        <View style={styles.QrStyle}>
          <QRCode value={qr} size={200} />
        </View>
      </View>
    </View>
  );
};

export default Qr;

const styles = StyleSheet.create({
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
