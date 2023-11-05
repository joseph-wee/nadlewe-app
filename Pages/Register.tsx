import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { NavigationProp } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

type RootStackParamList = {
  Search: undefined;
  Register: undefined;
};

type Props = {
  navigation: NavigationProp<RootStackParamList>;
};

const Register: React.FC<Props> = ({ navigation }) => {
  const [selectedAge, setSelectedAge] = useState();
  const [selectedGender, setSelectedGender] = useState();

  const pointColor = '#2FDBBC';

  return (
    <View style={tw`flex-1 bg-white px-4 justify-start`}>
      <Text style={tw`text-2xl font-bold mb-8 mt-4`}>회원가입</Text>
      <View style={tw`mb-4 items-center`}>
      </View>
      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 text-gray-700`}>나이</Text>
        <View style={[tw`h-10 px-4 rounded-full`, { backgroundColor: '#F4F4F4' }]}> 
        <Picker 
            selectedValue={selectedAge}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedAge(itemValue)
            }
            dropdownIconColor="#A0AEC0"
          >
            {/* 나이 선택 옵션 */}
            <Picker.Item label="" value="" />
            {[...Array(60).keys()].map(age => (
              <Picker.Item key={age} label={`${age}세`} value={age} />
            ))}
          </Picker>
          </View>
      </View>

      <View style={tw`mb-4 `}>
        <Text style={tw`mb-2 text-gray-700`}>성별</Text>
        <View style={[tw`h-10 px-4 rounded-full `, { backgroundColor: '#F4F4F4'}]}>
          <Picker
            selectedValue={selectedGender}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedGender(itemValue)
            }
            style={tw`flex-1`}
            dropdownIconColor="#A0AEC0"
          >
            {/* 성별 선택 옵션 */}
            <Picker.Item label="" value="" />
            <Picker.Item label="남자" value="male" />
            <Picker.Item label="여자" value="female" />
            <Picker.Item label="기타" value="other"/>
          </Picker>
        </View>
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 text-gray-700`}>이름</Text>
        <TextInput 
       style={[tw`h-10 px-4 rounded-full`, { backgroundColor: '#F4F4F4' }]}
 
          placeholderTextColor="#A0AEC0" 
          placeholder="홍길동"
        />

      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 text-gray-700`}>EMAIL</Text>
        <TextInput 
        style={[tw`h-10 px-4 rounded-full`, { backgroundColor: '#F4F4F4' }]}

          placeholder="john.doe@email.com"
          placeholderTextColor="#A0AEC0" 
          keyboardType="email-address"
        />
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 text-gray-700`}>휴대폰 번호</Text>
        <TextInput 
        style={[tw`h-10 px-4 rounded-full`, { backgroundColor: '#F4F4F4' }]}
        placeholder="010-1234-5678"
          placeholderTextColor="#A0AEC0" 
        />

      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`mb-2 text-gray-700`}>PASSWORD</Text>
        <TextInput 
       style={[tw`h-10 px-4 rounded-full`, { backgroundColor: '#F4F4F4' }]}

          placeholder="Password"
          placeholderTextColor="#A0AEC0" // 플레이스홀더 색상
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        style={[tw`rounded-full py-2 mb-4`, { backgroundColor: pointColor }]}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={tw`text-center text-white text-lg`}>REGISTER</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: '#2D3748',
  },
});

export default Register