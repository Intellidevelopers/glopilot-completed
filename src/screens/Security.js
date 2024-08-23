import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import SimpleLineIconsIcon from "react-native-vector-icons/SimpleLineIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from "../utils/colors";

function SecurityScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse1StackRowColumnRow}>
        <View style={styles.ellipse1StackRowColumn}>
          <View style={styles.ellipse1StackRow}>
          <View style={styles.header}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back-outline" color={colors.secondary} size={25} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Security</Text>
  </View>
          </View>
          <Text style={styles.security2}>Logging in to Glopilots</Text>
        </View>
        <View style={styles.icon4Stack}>
          <SimpleLineIconsIcon
            name="arrow-left"
            style={styles.icon4}
          ></SimpleLineIconsIcon>
          <Svg viewBox="0 0 56 56" style={styles.ellipse8}>
            <Ellipse
              stroke="rgba(240,239,239,1)"
              strokeWidth={1}
              fill="rgba(255,255,255,1)"
              cx={28}
              cy={28}
              rx={28}
              ry={28}
            ></Ellipse>
          </Svg>
        </View>
        <Text style={styles.security3}>Security</Text>
      </View>
      <TouchableOpacity>
      <View style={styles.passwordColumnRow}>
        <View style={styles.passwordColumn}>
          <Text style={styles.password}>Password</Text>
          <View style={styles.ellipse4Row}>
            <Svg viewBox="0 0 6 6" style={styles.ellipse4}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                cx={3}
                cy={3}
                rx={3}
                ry={3}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 6 6" style={styles.ellipse6}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                cx={3}
                cy={3}
                rx={3}
                ry={3}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 6 6" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                cx={3}
                cy={3}
                rx={3}
                ry={3}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 6 6" style={styles.ellipse7}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                cx={3}
                cy={3}
                rx={3}
                ry={3}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 6 6" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                cx={3}
                cy={3}
                rx={3}
                ry={3}
              ></Ellipse>
            </Svg>
            <Svg viewBox="0 0 6 6" style={styles.ellipse5}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(0,0,0,1)"
                cx={3}
                cy={3}
                rx={3}
                ry={3}
              ></Ellipse>
            </Svg>
          </View>
        </View>
        <EntypoIcon name="chevron-thin-right" style={styles.icon2}></EntypoIcon>
      </View>
      </TouchableOpacity>
      <View style={styles.rect}></View>
      <TouchableOpacity onPress={() => navigation.navigate('TwoStep')}>
      <View style={styles.password2Row}>
        <Text style={styles.password2}>2-Step verification</Text>
        <EntypoIcon name="chevron-thin-right" style={styles.icon3}></EntypoIcon>
      </View>
      <Text style={styles.off}>OFF</Text>
      </TouchableOpacity>
      <View style={styles.rect2}></View>
      <Text style={styles.text}>Connected Social Apps</Text>
      <Text style={styles.loremIpsum}>
        You’ve allowed these social apps to sign in to {"\n"}your Glopilots
        account.
      </Text>
      <View style={styles.imageRow}>
        <Image
          source={require("../assets/google.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.google}>Google</Text>
        <View style={styles.rect3}>
          <TouchableOpacity>
          <View style={styles.disconnectStack}>
            <Text style={styles.disconnect}>Disconnect</Text>
          </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.image2Row}>
        <Image
          source={require("../assets/facebook.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.google2}>Google</Text>
        <TouchableOpacity>
        <View style={styles.rect4}>
          <Text style={styles.disconnect4}>Disconnect</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.rect5}></View>
      <View style={styles.rect6}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ellipse1: {
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    position: "absolute"
  },
  icon1: {
    top: 13,
    left: 14,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 27
  },
  ellipse1Stack: {
    width: 56,
    height: 56
  },
  security: {
fontWeight: "700",
    color: "#121212",
    fontSize: 20,
    marginLeft: 76,
    marginTop: 20
  },
  ellipse1StackRow: {
    height: 56,
    flexDirection: "row"
  },
  security2: {
fontWeight: "700",
    color: "#121212",
    fontSize: 20,
    marginTop: 32
  },
  ellipse1StackRowColumn: {
    width: 206
  },
  icon4: {
    top: 13,
    left: 14,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 27
  },
  ellipse8: {
    top: 0,
    left: 0,
    width: 56,
    height: 56,
    position: "absolute"
  },
  icon4Stack: {
    width: 56,
    height: 56,
    marginLeft: 315,
    marginTop: 43
  },
  security3: {
fontWeight: "700",
    color: "#121212",
    fontSize: 20,
    marginLeft: 76,
    marginTop: 63
  },
  ellipse1StackRowColumnRow: {
    height: 112,
    flexDirection: "row",
    marginTop: 55,
    marginLeft: 19,
    marginRight: -371
  },
  password: {
fontWeight: "500",
    color: "#121212",
    fontSize: 15
  },
  ellipse4: {
    width: 6,
    height: 6
  },
  ellipse6: {
    width: 6,
    height: 6,
    marginLeft: 5
  },
  ellipse3: {
    width: 6,
    height: 6,
    marginLeft: 6
  },
  ellipse7: {
    width: 6,
    height: 6,
    marginLeft: 6
  },
  ellipse2: {
    width: 6,
    height: 6,
    marginLeft: 6
  },
  ellipse5: {
    width: 6,
    height: 6,
    marginLeft: 7
  },
  ellipse4Row: {
    height: 6,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 2,
    marginRight: 3
  },
  passwordColumn: {
    width: 71
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 21,
    marginLeft: 230,
    marginTop: 8
  },
  passwordColumnRow: {
    height: 31,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 19,
    marginRight: 13
  },
  rect: {
    width: 336,
    height: 2,
    backgroundColor: "#E6E6E6",
    marginTop: 22,
    marginLeft: 16
  },
  password2: {
fontWeight: "500",
    color: "#121212",
    fontSize: 16
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 21,
    marginLeft: 175,
    marginTop: 6
  },
  password2Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 15,
    marginRight: 13
  },
  off: {
fontWeight: "400",
    color: "#121212",
    marginLeft: 16
  },
  rect2: {
    width: 336,
    height: 2,
    backgroundColor: "#E6E6E6",
    marginTop: 27,
    marginLeft: 16
  },
  text: {
fontWeight: "700",
    color: "#121212",
    fontSize: 20,
    marginTop: 29,
    marginLeft: 15
  },
  loremIpsum: {
fontWeight: "400",
    color: "#121212",
    fontSize: 16,
    marginTop: 8,
    marginLeft: 15
  },
  image: {
    width: 28,
    height: 28
  },
  google: {
fontWeight: "400",
    color: "#121212",
    fontSize: 16,
    marginLeft: 16,
    marginTop: 6
  },
  rect3: {
    width: 93,
    height: 40,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginLeft: 132
  },
  disconnect: {
    top: 0,
    left: 0,
    position: "absolute",
fontWeight: "400",
    color: "#121212"
  },
  disconnect3: {
    top: 0,
    left: 0,
    position: "absolute",
fontWeight: "400",
    color: "#121212"
  },
  disconnectStack: {
    width: 70,
    height: 17,
    marginTop: 12,
    marginLeft: 11
  },
  imageRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 35,
    marginLeft: 15,
    marginRight: 19
  },
  image2: {
    width: 28,
    height: 28,
    marginTop: 6
  },
  google2: {
fontWeight: "400",
    color: "#121212",
    fontSize: 16,
    marginLeft: 18,
    marginTop: 10
  },
  rect4: {
    width: 93,
    height: 40,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginLeft: 125
  },
  disconnect4: {
fontWeight: "400",
    color: "#121212",
    marginTop: 12,
    marginLeft: 11
  },
  image2Row: {
    height: 40,
    flexDirection: "row",
    marginTop: 42,
    marginLeft: 19,
    marginRight: 19
  },
  rect5: {
    width: 337,
    height: 2,
    backgroundColor: "#E6E6E6",
    marginTop: -64,
    marginLeft: 15
  },
  rect6: {
    width: 336,
    height: 1,
    backgroundColor: "#E6E6E6",
    marginTop: 89,
    marginLeft: 16
  },
  header: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      backButton: {
        backgroundColor: '#fff',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E6E6E6',
      },
      headerTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 70,
      },
});

export default SecurityScreen;
