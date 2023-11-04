import React from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NavigationProp } from '@react-navigation/native';

// Define your navigation routes in RootStackParamList
type RootStackParamList = {
  Search: undefined;  // Define the type for the 'Search' route
  Register: undefined; // Define the type for the 'Register' route
  // Define more routes if you have them
};

// Define the Props type including the navigation
type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const Login: React.FC<Props> = ({ navigation }) => {
  // The rest of your component
  return (
    <View style={tw`flex-1 bg-white justify-center px-4`}>
      <Text style={tw`text-center text-2xl font-bold mb-8`}>로그인</Text>
      
      <View style={tw`mb-4`}>
        <Text style={tw`mb-2`}>EMAIL</Text>
        <TextInput
          style={tw`border border-gray-300 rounded-md px-3 py-2`}
          placeholder="john.doe@email.com"
          keyboardType="email-address"
        />
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`mb-2`}>PASSWORD</Text>
        <TextInput
          style={tw`border border-gray-300 rounded-md px-3 py-2`}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={tw`bg-blue-500 rounded-md py-2 mb-4`}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={tw`text-center text-white text-lg`}>LOGIN</Text>
      </TouchableOpacity>
      <View style={tw`flex-row justify-center`}>
        <Text style={tw`text-gray-700 mr-1`}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={tw`text-blue-500`}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;