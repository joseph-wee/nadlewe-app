import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import axios from "axios";
import { dummyData } from "../dummyData";

const Result = ({ navigation, route }: any) => {
  // 임시 데이터
  const { priceRange, selectedTags, selectedCategory } = route.params;
  // console.log(priceRange); //잘 받아지는 지 확인
  // console.log(selectedTags); //잘 받아지는 지 확인
  // console.log(selectedCategory); //잘 받아지는 지 확인

  const sendToServer = async () => {
    //axios로 서버에 전송
    try {
      const tagKeys = selectedTags.map((tag: { key: any }) => tag.key);
      const response = await axios.post("https://heheds.free.beeceptor.com", {
        tagKeys,
        selectedCategory,
        priceRange,
      });
      console.log("서버 응답:", response.data);
    } catch (error) {
      console.error("서버 전송 오류:", error);
    }
  };

  const [result, setResult] = useState<any>([]);

  const test1 = [
    { icon: 3, icon2: 4, id: "식사_1701704202842_dk78jlalk", key: "식사" },
    { icon: 5, icon2: 6, id: "카페_1701704203734_uwh40lneh", key: "카페" },
    { icon: 7, icon2: 8, id: "활동_1701704204401_kuncguout", key: "활동" },
  ];

  /** 정보 받아서 무작위 코스 생성 */
  const createCourse = () => {
    const minPrice = priceRange[0]; // 최저가격
    const maxPrice = priceRange[1]; // 최대가격
    const tags = selectedTags.map((el: any) => {
      // 태그들
      return el.key;
    });

    const eat = ["한식", "양식", "중식", "일식", "분식", "기타"];
    const drink = ["카페", "맥주/소주", "막걸리", "와인", "위스키", "칵테일"];
    const act = [
      "실내",
      "실외",
      "게임/오락",
      "힐링",
      "방탈출",
      "클래스",
      "영화",
      "전시",
      "책방",
    ];

    const filteringData = dummyData.filter((x) => {
      if (x.placePrice === "") {
        return true;
      }
      if (Number(x.placePrice) <= maxPrice) return true;
    });

    let courses = [];

    for (let i = 0; i < 5; i++) {
      let temp: any = [];
      let sum = 0;
      for (const el of tags) {
        if (el === "식사") {
          let place = dummyData.filter((x) => {
            return eat.indexOf(x.category) !== -1;
          });

          let random = Math.floor(Math.random() * place.length);

          temp.push(place[random]);
          Number(place[random].placePrice) &&
            Number(place[random].placePrice) !== -1 &&
            (sum += Number(place[random].placePrice));
        }
        if (el === "카페") {
          let place = dummyData.filter((x) => {
            return drink.indexOf(x.category) !== -1;
          });

          let random = Math.floor(Math.random() * place.length);

          temp.push(place[random]);
          Number(place[random].placePrice) &&
            Number(place[random].placePrice) !== -1 &&
            (sum += Number(place[random].placePrice));
        }
        if (el === "활동") {
          let place = dummyData.filter((x) => {
            return act.indexOf(x.category) !== -1;
          });

          let random = Math.floor(Math.random() * place.length);

          temp.push(place[random]);
          Number(place[random].placePrice) &&
            Number(place[random].placePrice) !== -1 &&
            (sum += Number(place[random].placePrice));
        }
      }

      if (sum > maxPrice) {
        i--;
      }
      if (sum <= maxPrice && temp[0].placeName) {
        courses.push({
          courses: [
            {
              courseName: temp[0].placeName,
              places: temp,
              coursePrice: sum,
              courseImage: temp[0].placeImage,
            },
          ],
        });
      }
    }
    setResult([...courses]);
  };

  /** 임시 코스 생성 */
  useEffect(() => {
    createCourse();
  }, []);

  /** 디테일로 데이터 보내기 */
  const sendToDetail = async (index: number) => {
    navigation.navigate("Detail", result[index]);
  };

  /** 별점 감싸고있는 블럭 너비 계산 */
  const widthHandler = (rate: number) => {
    const quotient = Math.floor(rate / 1); // 몫

    return rate * 15 + quotient * 2;
  };

  return (
    <ScrollView style={{ backgroundColor: "white", flexGrow: 1 }}>
      {/** 광고 */}
      <Image
        style={{ width: "100%", height: 95, resizeMode: "cover" }}
        source={require("../assets/ad_burger.png")}
      />
      {result &&
        result.map((data: any, index1: number) => {
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
                >{`${data.courses[0].coursePrice.toLocaleString(
                  "ko-KR"
                )} 원`}</Text>
              </View>
              {/** 이미지 */}
              {/**result[0].courses[0].courseImage */}
              <Image
                source={{ uri: `${data.courses[0].courseImage}` }}
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
  );
};

export default Result;
