import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";
import { NavigationProp } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import likeList from "../likeData";

const Profile = ({navigation,route}: any) => {
  // 예시
  const widthHandler = (rate: number) => {
    const quotient = Math.floor(rate / 1); // 몫

    return rate * 15 + quotient * 2;
  };
  const sendToDetail = async (index: number) => {
    navigation.navigate("Detail", like[index]);
  };

  const orderData = Array.from({ length: 20 }, (_, i) => `주문 #${i + 1}`);
  const pointColor = "#2FDBBC";

  // 데이터 구조가 복잡하게 되어 있습니다. 혹시나 백엔드 쪽이 완성할 수도 있을 것 같아서 api 응답값 데이터 구조를 그대로 사용해서 그렇습니다.
  // 장소에 대한 리스트는 like[?].places 에 들어있습니다.
  // ? 에는 like 배열의 index로 0,1,2...이 들어갑니다.
  // recoil 전역상태 관리 라이브러리를 통해서 아래처럼 전역 상태 관리를 할 수 있습니다. 상세 페이지에서 좋아요를 누르면 아래 like에 값이 추가 됩니다.
  const [like, setLike] = useRecoilState(likeList);

  // 제가 결과 페이지에 구현한 UI를 안쓰실수도 있지만 만약 쓴다면 라인 153~262 복붙하고 맨 처음의 result -> like로 바꾸고 139 라인 widthHandler 함수도 세팅하면 됩니다.

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.profileSection}>
          <Image
            source={require("../assets/man.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>홍길동</Text>
          <Text style={styles.profileDescription}>27세, 남자</Text>
        </View>

        <View style={styles.sectionContainer}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={require("../assets/icons/Heart.png")}
              style={styles.icon}
            />

            <Text style={styles.sectionTitle}>내가 좋아요한 코스</Text>
          </View>
          

          <ScrollView style={{ backgroundColor: "white", flexGrow: 1 }}>
      
      {like &&
        like.map((data: any, index1: number) => {
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                padding: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomColor: "#FFFFFF",
                borderBottomWidth: 1,
              }}
              onPress={() => sendToDetail(index1)}
              key={`${index1}-aaa`}
            >
              <View style={{ justifyContent: "space-between" }}>
                <View>
                  {/** 코스 이름 */}
                  <Text
                    numberOfLines={1}
                    style={{ marginBottom: 20, fontFamily: "BM-HANNAStd" }}
                  >
                    {`${data.courseName}`}
                  </Text>
                  {/** 장소, 별점 리스트 */}
                  {data.places.map((el: any, index2: number) => {
                    return (
                      <View
                        style={{ flexDirection: "row", marginBottom: 7 }}
                        key={`${index2}-bbb`}
                      >
                        <View
                          style={{
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            numberOfLines={1}
                            style={{
                              fontFamily: "NanumGothic",
                              width: 100,

                              fontSize: 12,
                              flex: 1,
                            }}
                          >
                            {`${el.placeName}`}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            gap: 2,

                            overflow: "hidden",
                            width: widthHandler(el.rate),
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={require("../assets/star.png")}
                            style={{ width: 15, height: 15 }}
                          />
                          <Image
                            source={require("../assets/star.png")}
                            style={{ width: 15, height: 15 }}
                          />
                          <Image
                            source={require("../assets/star.png")}
                            style={{ width: 15, height: 15 }}
                          />
                          <Image
                            source={require("../assets/star.png")}
                            style={{ width: 15, height: 15 }}
                          />
                          <Image
                            source={require("../assets/star.png")}
                            style={{ width: 15, height: 15 }}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
                <Text
                  style={{
                    marginTop: 15,
                    fontFamily: "NanumGothic",
                    fontWeight: "700",
                    height: 20,
                  }}
                >{`${data.coursePrice.toLocaleString("ko-KR")} 원`}</Text>
              </View>
              {/** 이미지 */}
              {/**result[0].courses[0].courseImage */}
              <Image
                source={{ uri: `${data.courseImage}` }}
                style={{
                  width: 150,
                  minHeight: 150,
                  height: "100%",
                  borderRadius: 20,
                  resizeMode: "cover",
                }}
              />
            </TouchableOpacity>
          );
        })}
    </ScrollView>
    
        </View>
        
      </View>
      <TouchableOpacity
          style={[tw`rounded-full py-2 mb-4`, { backgroundColor: pointColor }]}
          onPress={() => console.log("로그아웃")}
        >
          <Text style={tw`text-center text-white text-lg`}>LOGOUT</Text>
        </TouchableOpacity>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileSection: {
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "bold",
  },
  profileDescription: {
    fontSize: 16,
    color: "gray",
  },
  sectionContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  orderBox: {
    width: 100, // 박스의 가로 길이
    height: 100, // 박스의 세로 길이
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10, // 박스 사이의 간격
    backgroundColor: "#f0f0f0", // 박스 배경색
    borderRadius: 10, // 박스 모서리 둥글기
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 5,
    resizeMode: "contain",
  },
});

export default Profile;
