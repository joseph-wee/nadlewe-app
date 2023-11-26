import React, { useState } from 'react';
import { View, Text,FlatList, StyleSheet,TouchableOpacity,Image,ImageSourcePropType   } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import MultiSlider from '@ptomasroos/react-native-multi-slider'; // Ensure this package is installed
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'; 


type SearchProps = {
  navigation: any; 
};
type Tag = {
  key: string;
  icon: ImageSourcePropType;
  icon2: ImageSourcePropType;
};

type SelectedTag = Tag & { id: string };
const tagsData: Tag[] = [
  { key: '식사', icon: require('../assets/icons/icon_Utensils_w.png'),icon2: require('../assets/icons/icon_Utensils_b.png') },
  { key: '카페', icon: require('../assets/icons/icon_MugHot_w.png'),icon2: require('../assets/icons/icon_MugHot_b.png')  },
  { key: '활동', icon: require('../assets/icons/icon_Running_w.png'),icon2: require('../assets/icons/icon_Running_b.png') },
  { key: '숙소', icon: require('../assets/icons/icon_Bed_w.png'),icon2: require('../assets/icons/icon_Bed_b.png') },
];

const Search: React.FC<SearchProps> = ({ navigation }) => {
  const pointColor = '#2FDBBC';

  const [priceRange, setPriceRange] = useState([1000, 50000]);
  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const Category = ['한식','양식','중식','일식','분식','기타','카페','맥주/소주','막걸리','와인','위스키','칵테일','실내','실외','게임/오락','힐링','방탈출','클래스','영화','전시','책방'];
  const FoodNum = 6;
  const DrinkNum = 6;
  const ActivityNum = 9;

  const sendToServer = async () => {
    try {
      const tagKeys = selectedTags.map(tag => tag.key);
      const response = await axios.post('https://heheds.free.beeceptor.com', {
        tagKeys,
        selectedCategory,
        priceRange,
      });
      console.log('서버 응답:', response.data);
    } catch (error) {
      console.error('서버 전송 오류:', error);
    }
  };

  // 태그 선택
  const selectTag = (tag: Tag) => {
    // 태그 선택 시 현재 시각과 랜덤 값을 조합하여 고유 ID 생성
    const newTag: SelectedTag = {
      ...tag,
      id: `${tag.key}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
    setSelectedTags((prevSelectedTags) => [...prevSelectedTags, newTag]);
  };
  // 태그 삭제
  const removeTag = (id: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.filter((tag) => tag.id !== id)
    );
  };

  // 선택 가능한 태그 렌더링
  const renderTag = ({ item }: { item: Tag }) => (
    <TouchableOpacity style={styles.tag} onPress={() => selectTag(item)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.tagText}>{item.key}</Text>
    </TouchableOpacity>
  );
  // 선택된 태그 렌더링
  const renderSelectedTag = ({ item, index }: { item: SelectedTag; index: number }) => (
    <View style={styles.selectedTag}>
      <Image source={item.icon2} style={styles.icon} />
      <TouchableOpacity onPress={() => removeTag(item.id)}>
        <Text style={styles.removeIcon}>x</Text>
      </TouchableOpacity>
    </View>
  );
  const multiSliderValuesChange = (values: number[]) => setPriceRange(values);

  //카테고리
  const handleButtonPress = (value: string) => {
    setSelectedCategory(prevActiveButtons => {
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
      ...styles.categoryTag, // 기존 categoryTag 스타일을 적용
      backgroundColor: selectedCategory.includes(value) ? '#2FDBBC' : '#ffffff', // 선택된 상태에 따라 배경색 변경
    };
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
      <Text style={tw`mb-2 text-gray-700`}>데이트장소를 순서대로 선택해주세요</Text>

      <View style={styles.container}>
        <FlatList
          data={tagsData}
          renderItem={renderTag}
          keyExtractor={(item) => item.key}
          horizontal
        />
        <FlatList
          data={selectedTags}
          renderItem={renderSelectedTag}
          keyExtractor={(item, index) => index.toString()} // 여기를 수정했습니다.
          horizontal
        />
      </View>
      <Text style={tw`mb-2 text-gray-700`}>데이트 코스 취향을 선택해주세요</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
    {Category.map((button) => (
      <TouchableOpacity
        key={button}
        style={getButtonStyle(button)}
        onPress={() => handleButtonPress(button)}
      >
        <Text>{button}</Text>
      </TouchableOpacity>
    ))}
</View>


    <TouchableOpacity
        style={[tw`rounded-full py-2 mb-4`, { backgroundColor: pointColor }]}
        onPress={sendToServer}
      >
        <Text style={tw`text-center text-white text-lg`}>CREATE CORSE</Text>
      </TouchableOpacity>
    </View>
    
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
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
  tag: {
    backgroundColor:'#2FDBBC',
    width:85,
    height: 40,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배열합니다.
    alignItems: 'center',
  },
  selectedTag: {
    width:85,
    height: 40,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배열합니다.
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'contain'
    
  },
  removeIcon: {
    marginLeft: 5,
    color: 'red',
  },
  tagText: {
    color: 'white',},
  category:{
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    alignItems: 'center'

  },
  categoryTag : {
    width:85,
    height: 40,
    margin: 4,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row', // 아이콘과 텍스트를 가로로 배열합니다.
    alignItems: 'center',
  }
});

export default Search;