import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Result = ({ navigation }: any) => {
  const [v, SetV] = useState(0);

  return (
    <View style={{ paddingTop: 10 }}>
      <View style={{ paddingLeft: 20, width: "100%", height: 40 }}>
        여기에 광고 이미지
      </View>
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
      >
        <View style={{ justifyContent: "space-between" }}>
          <View>
            {/** title */}
            <Text style={{ marginBottom: 10 }}>남산타워</Text>
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
          </View>
          <Text>123,456원</Text>
        </View>
        {/** image */}
        <Image
          source={require("../assets/dummyImage.png")}
          style={{ width: 150, height: 150, borderRadius: 20 }}
        />
      </TouchableOpacity>
      {/** ----------- 여기 아래 복붙한거 -------- */}
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
      >
        <View style={{ justifyContent: "space-between" }}>
          <View>
            {/** title */}
            <Text style={{ marginBottom: 10 }}>남산타워</Text>
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
          </View>
          <Text>123,456원</Text>
        </View>
        <Image
          source={require("../assets/dummyImage.png")}
          style={{ width: 150, height: 150 }}
        />
      </TouchableOpacity>
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
      >
        <View style={{ justifyContent: "space-between" }}>
          <View>
            {/** title */}
            <Text style={{ marginBottom: 10 }}>남산타워</Text>
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
          </View>
          <Text>123,456원</Text>
        </View>
        <Image
          source={require("../assets/dummyImage.png")}
          style={{ width: 150, height: 150 }}
        />
      </TouchableOpacity>
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
      >
        <View style={{ justifyContent: "space-between" }}>
          <View>
            {/** title */}
            <Text style={{ marginBottom: 10 }}>남산타워</Text>
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
          </View>
          <Text>123,456원</Text>
        </View>
        <Image
          source={require("../assets/dummyImage.png")}
          style={{ width: 150, height: 150 }}
        />
      </TouchableOpacity>
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
      >
        <View style={{ justifyContent: "space-between" }}>
          <View>
            {/** title */}
            <Text style={{ marginBottom: 10 }}>남산타워</Text>
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
          </View>
          <Text>123,456원</Text>
        </View>
        <Image
          source={require("../assets/dummyImage.png")}
          style={{ width: 150, height: 150 }}
        />
      </TouchableOpacity>
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
      >
        <View style={{ justifyContent: "space-between" }}>
          <View>
            {/** title */}
            <Text style={{ marginBottom: 10 }}>남산타워</Text>
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
            {/** place */}
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text style={{ minWidth: 85, marginBottom: 5 }}>박지후 스시</Text>
              <View
                style={{ flexDirection: "row", gap: 2, overflow: "hidden" }}
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
          </View>
          <Text>123,456원</Text>
        </View>
        <Image
          source={require("../assets/dummyImage.png")}
          style={{ width: 150, height: 150 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Result;
