import * as React from "react";
import { Text, StyleSheet, View,TextInput } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { useState } from "react";
import TwitterTextView from 'react-native-twitter-textview';
type  VideoDescriptionType = {
  name:string;
}
const RenderedDescription = (props:VideoDescriptionType ) => {

  const [value, onChangeText] = useState('');

  const placeholder = "Set your " + props.name + " description here";

  return (
    <View style={styles.RenderedDescription}>
      <Text style={styles.title} >{props.name} fdescription</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <TextInput style={styles.title1} 
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        multiline
        // numberOfLines={4}
        />
      </View>
      <Text style={styles.title}>Preview description</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <TwitterTextView
         style={styles.title1}
        // hashtagStyle={styles.hashtagStyle}
        // mentionStyle={styles.mentionStyle}
        // linkStyle={styles.linkStyle}
        // emailStyle={styles.emailStyle}
      >
        {value}
      </TwitterTextView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.bodyBody17_size,
    lineHeight: 23,
    fontWeight: "600",
    // fontFamily: FontFamily.capsCaps310SemiBold,
    color: Color.iOSSystemLabelsLightPrimary,
    textAlign: "left",
    paddingLeft: Padding.p_base,
    letterSpacing: 0,
    paddingTop: 10,
  },
  groupChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: "#939393",
    borderWidth: 1,
    position: "absolute",
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
  },
  title1: {
    width: "100%",

    fontSize: FontSize.size_mini,
    lineHeight: 20,
    // fontFamily: FontFamily.paragraphP313,
    color: Color.iOSSystemLabelsLightPrimary,
    textAlign: "left",
    position: "absolute",
    letterSpacing: 0,
  },
  rectangleParent: {
    height: 122,
    marginTop: 9,
    alignSelf: "stretch",
  },
  RenderedDescription: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    marginTop: 10,
    backgroundColor: Color.iOSSystemBackgroundsLightPrimary,
    alignSelf: "stretch",
  },
});

export default RenderedDescription;
