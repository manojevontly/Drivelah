import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {
  Text,
  View,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
  Image
} from 'react-native';


type Props = {
  title:string,
  iconSource?:React.ImageSourcePropType,
  iconStyle?: StyleProp<ImageStyle>,
  labelStyle?: StyleProp<TextStyle>,
  buttonStyle?: StyleProp<ViewStyle>;

};

const CustomButton: React.FC<Props> = (
  {
    title,
    iconSource,
    iconStyle,
    labelStyle,
    buttonStyle
  }
) => {
return (
  <View style={buttonStyle}>
    {iconSource && <Image source={iconSource} style={iconStyle} />}
    <Text style={labelStyle}>{title}</Text>
  </View>
);
}

export default CustomButton;