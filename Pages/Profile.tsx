import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet , TouchableOpacity } from 'react-native';
import { FlatList,GestureHandlerRootView  } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import { NavigationProp } from '@react-navigation/native';

const Profile = () => {
  // 예시
  const orderData = Array.from({ length: 20 }, (_, i) => `주문 #${i + 1}`);
  const pointColor = '#2FDBBC';
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image source={require('../assets/man.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>홍길동</Text>
          <Text style={styles.profileDescription}>27세, 남자</Text>
        </View>

        <View style={styles.sectionContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <Image source={require('../assets/icons/clock.png')} style={styles.icon} />
  <Text style={styles.sectionTitle}>주문내역</Text>
</View>
          <FlatList
            horizontal
            data={orderData}
            renderItem={({ item }) => <View style={styles.orderBox}></View>}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.sectionContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/icons/Heart.png')} style={styles.icon} />
        
          <Text style={styles.sectionTitle}>내가 좋아요한 코스</Text>
          </View>
          <FlatList
            horizontal
            data={orderData}
            renderItem={({ item }) => <View style={styles.orderBox}></View>}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity
        style={[tw`rounded-full py-2 mb-4`, { backgroundColor: pointColor }]}
        onPress={() => console.log("로그아웃")}
      >
        <Text style={tw`text-center text-white text-lg`}>LOGOUT</Text>
      </TouchableOpacity>
      </View>
      
    </GestureHandlerRootView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // 원형 이미지를 만듭니다.
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileDescription: {
    fontSize: 16,
    color: 'gray',
  },
  sectionContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderBox: {
    width: 100, // 박스의 가로 길이
    height: 100, // 박스의 세로 길이
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10, // 박스 사이의 간격
    backgroundColor: '#f0f0f0', // 박스 배경색
    borderRadius: 10, // 박스 모서리 둥글기
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: 'contain'
    
  },
});

export default Profile;
