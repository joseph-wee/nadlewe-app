import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import axios from 'axios'; 

const Result = ({ navigation,route }: any) => {
  // 임시 데이터
  const { priceRange, selectedTags,selectedCategory } = route.params;
  console.log(priceRange, selectedTags,selectedCategory); //잘 받아지는 지 확인

  const sendToServer = async () => { //axios로 서버에 전송
    try {
      const tagKeys = selectedTags.map((tag: { key: any; }) => tag.key);
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

  const [result, setResult] = useState([
    {
      courses: [
        {
          courseName: "코스이름",
          places: [
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
          ],
          coursePrice: "123456",
          courseImage: "../assets/dummyImage.png",
        },
      ],
    },
    {
      courses: [
        {
          courseName: "코스이름",
          places: [
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
          ],
          coursePrice: "총 가격",
          courseImage: "../assets/dummyImage.png",
        },
      ],
    },
    {
      courses: [
        {
          courseName: "코스이름",
          places: [
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
            {
              placeName: "장소이름",
              rate: "3.7",
              menu: "메뉴",
              menuDetail: "메뉴 상세",
              placePrice: "가격",
              placeImage: "../assets/dummyImage.png",
            },
          ],
          coursePrice: "총 가격",
          courseImage: "../assets/dummyImage.png",
        },
      ],
    },
  ]);

  /** 별점 감싸고있는 블럭 너비 계산 */
  const widthHandler = (rate: number) => {
    const quotient = rate % 1; // 몫

    return rate * 15 + quotient * 2;
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <Image
        style={{ width: "100%", height: 155, resizeMode: "cover" }}
        source={require("../assets/ad_kfc.png")}
      />
      {result.map((data: any, index1: number) => {
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
            onPress={() => navigation.navigate("Detail")}
            key={`${index1}-aaa`}
          >
            <View style={{ justifyContent: "space-between" }}>
              <View>
                {/** 코스 이름 */}
                <Text style={{ marginBottom: 20, fontFamily: "BM-HANNAStd" }}>
                  {`${data.courses[0].courseName}`}
                </Text>
                {/** 장소, 별점 리스트 */}
                {data.courses[0].places.map((el: any, index2: number) => {
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
                          style={{
                            fontFamily: "NanumGothic",
                            minWidth: 85,
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
              >{`${data.courses[0].coursePrice} 원`}</Text>
            </View>
            {/** 이미지 */}
            <Image
              source={require(`../assets/dummyImage.png`)}
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
    </View>
  );
};

export default Result;
