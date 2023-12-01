import { useState } from "react";
import { Image, Text, View } from "react-native";

const Detail = () => {
  // 임시 데이터
  const [detail, setDetail] = useState([
    {
      placeIndex: "123",
      placeName: "장소이름",
      menu: "메뉴이름",
      menuDetail: "메뉴상세",
      placePrice: "장소 가격",
      placeImage: "이미지",
    },
    {
      placeIndex: "123",
      placeName: "장소이름",
      menu: "메뉴이름",
      menuDetail: "메뉴상세",
      placePrice: "장소 가격",
      placeImage: "이미지",
    },
    {
      placeIndex: "123",
      placeName: "장소이름",
      menu: "메뉴이름",
      menuDetail: "메뉴상세",
      placePrice: "장소 가격",
      placeImage: "이미지",
    },
  ]);
  return (
    <View style={{ backgroundColor: "white" }}>
      <Image
        style={{ width: "100%", height: 155, resizeMode: "cover" }}
        source={require("../assets/ad_kfc.png")}
      />
      <View style={{ padding: 20 }}>
        <Text
          style={{ marginBottom: 15, fontFamily: "BM-HANNAStd", fontSize: 16 }}
        >
          코스 소개
        </Text>
        {/** 아이템 하나 */}
        {detail.map((el: any, index: number) => {
          return (
            <View style={{ marginBottom: 30 }} key={`${index}-ccc`}>
              <Text
                style={{ marginBottom: 10, fontFamily: "BM-HANNAStd" }}
              >{`${el.placeName}`}</Text>
              <Image
                source={require("../assets/food.png")}
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
                <Text
                  style={{ fontFamily: "NanumGothic" }}
                >{`${el.menu}`}</Text>
                <Text
                  style={{ fontFamily: "NanumGothic" }}
                >{`${el.placePrice} 원`}</Text>
              </View>
              <Text
                style={{ fontFamily: "NanumGothic", minHeight: 23 }}
              >{`${el.menuDetail}`}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Detail;
