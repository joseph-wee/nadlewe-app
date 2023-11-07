import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image  } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MultiSlider from '@ptomasroos/react-native-multi-slider'; // Ensure this package is installed
import { Picker } from '@react-native-picker/picker';

type SearchProps = {
  navigation: any; // You can define a more specific type for navigation if needed
};

const Search: React.FC<SearchProps> = ({ navigation }) => {
  const pointColor = '#2FDBBC';

  const [priceRange, setPriceRange] = useState([1000, 50000]);
  const [selectedTheme, setSelectedTheme] = useState();
  const [selectedValue, setSelectedValue] = useState<number>(1);
  const [additionalPickers, setAdditionalPickers] = useState<JSX.Element[]>([]);
  const [activeButtons, setActiveButtons] = useState<string[]>([]);

  // 버튼을 렌더링하기 위한 배열
  const buttons = ['한식', '양식', '중식', '일식'];
  const handleButtonPress = (value: string) => {
    setActiveButtons(prevActiveButtons => {
      if (prevActiveButtons.includes(value)) {
        // 이미 선택된 버튼을 다시 클릭하면 선택 해제
        return prevActiveButtons.filter(button => button !== value);
      } else {
        // 선택되지 않은 버튼을 클릭하면 선택
        return [...prevActiveButtons, value];
      }
    });
  };

  // 선택된 버튼에 따라 스타일을 결정하는 함수
  const getButtonStyle = (value: string) => {
    return {
      // 기본 스타일
      padding: 10,
      margin: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      // 선택된 버튼이면 배경색을 변경
      backgroundColor: activeButtons.includes(value) ? 'blue' : 'white',
    };
  };
  const multiSliderValuesChange = (values: number[]) => setPriceRange(values);

  const createPickers = (count: number) => {
    const pickers: JSX.Element[] = [];
    for (let i = 0; i < count; i++) {
      pickers.push(
        <Picker
          key={i}
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="밥" value={1} />
          <Picker.Item label="카페" value={2} />
          <Picker.Item label="산책" value={3} />
          <Picker.Item label="숙박" value={4} />
          <Picker.Item label="기타활동" value={5} />
          {/* Add more options as needed */}
        </Picker>
      );
    }
    setAdditionalPickers(pickers);
  };


  return (
    <View style={tw`flex-1 bg-white px-4 py-4`}>
      <Text style={tw`mb-2 text-gray-700`}>선호가격대</Text>
      <MultiSlider
        values={priceRange}
        sliderLength={300}
        onValuesChange={multiSliderValuesChange}
        min={10000}
        max={200000}
        step={10000}
        allowOverlap={false}
        minMarkerOverlapDistance={10}
        snapped
        selectedStyle={styles.selectedTrack}
        unselectedStyle={styles.unselectedTrack}
        containerStyle={styles.sliderContainer}
        trackStyle={styles.track}
        touchDimensions={styles.touchDimensions}
        customMarkerLeft={() => (
          <View style={tw`h-5 w-5 rounded-full bg-blue-600`} />
        )}
        customMarkerRight={() => (
          <View style={tw`h-5 w-5 rounded-full bg-red-600`} />
        )}
      />
      <View style={tw`flex-row justify-between mt-4`}>
        <Text style={tw`text-lg`}>{`${priceRange[0].toLocaleString()} 원`}</Text>
        <Text style={tw`text-lg`}>{`${priceRange[1].toLocaleString()} 원`}</Text>
      </View>
      <View style={tw`mb-4 `}>
        <Text style={tw`mb-2 text-gray-700`}>테마</Text>
        <View style={[tw`h-10 px-4 rounded-full `, { backgroundColor: '#F4F4F4'}]}>
          <Picker
            selectedValue={selectedTheme}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedTheme(itemValue)
            }
            style={tw`flex-1`}
            dropdownIconColor="#A0AEC0"
          >
            {}
            <Picker.Item label="" value="" />
            <Picker.Item label="로맨틱" value="male" />
            <Picker.Item label="활동적" value="female" />
            <Picker.Item label="실내" value="other"/>
          </Picker>
        </View>
      </View>
      <Text style={tw`mb-2 text-gray-700`}>코스장소갯수</Text>
      <View>
      {/* Picker to select the number of additional pickers */}

      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          createPickers(itemValue);
        }}
      >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
      </Picker>

      {/* Render the additional pickers */}
      <View style={styles.pickerContainer}>
    {/* Render the additional pickers */}
    {additionalPickers.map((picker) => picker)}
  </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button}
            style={getButtonStyle(button)}
            onPress={() => handleButtonPress(button)}
          >
            <Text>{button}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={tw`mb-4 items-center`}>
        <Image
          source={require('../assets/talk.png')}
          style={{ width: 200, height: 200, resizeMode: 'contain' }}
        />
      </View>
    </View>
    <TouchableOpacity
        style={[tw`rounded-full py-2 mb-4`, { backgroundColor: pointColor }]}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={tw`text-center text-white text-lg`}>CREATE CORSE</Text>
      </TouchableOpacity>
    </View>
    
    
    
  );
};

const styles = StyleSheet.create({
  selectedTrack: {
    backgroundColor: '#2FDBBC',
  },
  unselectedTrack: {
    backgroundColor: '#CDE5E9',
  },
  sliderContainer: {
    height: 40,
  },
  track: {
    height: 10,
    borderRadius: 10,
  },
  touchDimensions: {
    height: 40,
    width: 40,
    borderRadius: 20,
    slipDisplacement: 40,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    height: 50,
    flex: 1, // 가로로 균등하게 피커들을 배분
  },
});

export default Search;