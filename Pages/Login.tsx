<<<<<<< Updated upstream
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Search: undefined;
  Register: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const Login: React.FC<Props> = ({ navigation }) => {

  const pointColor = '#2FDBBC';
=======
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styled } from "nativewind";
>>>>>>> Stashed changes

  return (
<<<<<<< Updated upstream
    <View style={tw`flex-1 bg-white px-4 justify-start`}>
      <Text style={tw`text-2xl font-bold mb-8 mt-4`}>로그인</Text>
      <View style={tw`mb-4 items-center`}>
        <Image
          source={require('../assets/login.png')}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 text-gray-700`}>EMAIL</Text>
        <TextInput 
        style={[tw`h-10 px-4 rounded-full `, { backgroundColor: '#F4F4F4'}]}
          placeholder="john.doe@email.com"
          placeholderTextColor="#A0AEC0" 
          keyboardType="email-address"
        />
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 text-gray-700`}>PASSWORD</Text>
        <TextInput 
        style={[tw`h-10 px-4 rounded-full `, { backgroundColor: '#F4F4F4'}]} 
          placeholder="Password"
          placeholderTextColor="#A0AEC0" // 플레이스홀더 색상
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={[tw`rounded-full py-2 mb-4`, { backgroundColor: pointColor }]}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={tw`text-center text-white text-lg`}>LOGIN</Text>
      </TouchableOpacity>
      <View style={tw`flex-row justify-center`}>
        <Text style={tw`text-gray-700 mr-1`}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={{ color: pointColor }}>Register</Text>
        </TouchableOpacity>
=======
    <View className="">
      <Text className="bg-red-200">01</Text>
      <Text style={{ fontFamily: "BM-HANNAStd", fontWeight: "400" }}>
        주문내역
      </Text>
      <Text>주문내역</Text>
      <View>
        <Text>login</Text>
        <Button title="test" onPress={() => navigation.navigate("Result")} />
>>>>>>> Stashed changes
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#2D3748',
  },
});

export default Login;
