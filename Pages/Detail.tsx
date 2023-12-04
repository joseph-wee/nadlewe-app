import { useEffect, useState } from "react";
import { Image, Text, View, ScrollView } from "react-native";

const Detail = ({ route }: any) => {
  useEffect(() => {
    console.log(route.params.courses[0].places);
  }, []);
  // 임시 데이터
  const [detail, setDetail] = useState(route.params.courses[0].places);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        style={{ width: "100%", height: 95, resizeMode: "cover" }}
        source={require("../assets/ad_burger.png")}
      />
      <View style={{ padding: 20 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              marginBottom: 15,
              fontFamily: "BM-HANNAStd",
              fontSize: 16,
              marginRight: 5,
            }}
          >
            코스 소개
          </Text>
          <Image
            style={{
              width: 20,
              height: 20,
              position: "absolute",
              right: 0,
              top: -2,
            }}
            source={require("../assets/icons/Heart.png")}
          />
        </View>
        {/** 아이템 하나 */}
        {detail.map((el: any, index: number) => {
          return (
            <View style={{ marginBottom: 30 }} key={`${index}-ccc`}>
              <Text
                style={{ marginBottom: 10, fontFamily: "BM-HANNAStd" }}
              >{`${el.placeName}`}</Text>

              <Image
                source={{ uri: `${el.placeImage}` }}
                style={{
                  marginBottom: 20,
                  width: "100%",
                  height: 230,
                  borderRadius: 20,
                }}
              />

              <View
                style={{
                  marginBottom: 12,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  minHeight: 23,
                }}
              >
                <Text style={{ fontFamily: "NanumGothic" }}>
                  {el.menu && `${el.menu}`}
                </Text>
                <Text style={{ fontFamily: "NanumGothic" }}>
                  {el.placePrice &&
                    el.placePrice !== -1 &&
                    `${el.placePrice.toLocaleString("ko-KR")} 원`}
                </Text>
              </View>
              {/* <Text
                style={{ fontFamily: "NanumGothic", minHeight: 23 }}
              >{`${el.menuDetail}`}</Text> */}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Detail;
