import { Image, Text, View } from "react-native";

const Detail = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginBottom: 15 }}>코스 소개</Text>
      {/** 아이템 하나 */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ marginBottom: 10 }}>박지후 스시</Text>
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
          }}
        >
          <Text>2인 SET</Text>
          <Text>39,000원</Text>
        </View>
        <Text>
          스시2인세트, 샐러드, 초밥20pcs, 간장새우, 새우튀김, 뚝 배기, 우동
        </Text>
      </View>
      {/** 아래코드는 보여주기용 나중에 api연동시 삭제 */}
      <Text style={{ marginBottom: 15 }}>코스 소개</Text>
      {/** 아이템 하나 */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ marginBottom: 10 }}>박지후 스시</Text>
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
          }}
        >
          <Text>2인 SET</Text>
          <Text>39,000원</Text>
        </View>
        <Text>
          스시2인세트, 샐러드, 초밥20pcs, 간장새우, 새우튀김, 뚝 배기, 우동
        </Text>
      </View>
      <Text style={{ marginBottom: 15 }}>코스 소개</Text>
      {/** 아이템 하나 */}
      <View style={{ marginBottom: 30 }}>
        <Text style={{ marginBottom: 10 }}>박지후 스시</Text>
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
          }}
        >
          <Text>2인 SET</Text>
          <Text>39,000원</Text>
        </View>
        <Text>
          스시2인세트, 샐러드, 초밥20pcs, 간장새우, 새우튀김, 뚝 배기, 우동
        </Text>
      </View>
    </View>
  );
};

export default Detail;
