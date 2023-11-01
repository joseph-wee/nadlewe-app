import { RecoilEnv } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Cart, Detail, Favorite, Login, Profile, Register, Result, Search } from './Pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} options={{ title: "로그인" }} />
      <Tab.Screen name="Search" component={Search} options={{ title: "코스 생성" }} />
      <Tab.Screen name="Cart" component={Cart} options={{ title: "장바구니" }} />
      <Tab.Screen name="Favorite" component={Favorite} options={{ title: "찜 목록" }} />
      <Tab.Screen name="Profile" component={Profile} options={{ title: "마이페이지" }} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Login} options={{ title: "로그인" }} />
        <Stack.Screen name="Search" component={Search} options={{ title: "코스 생성" }} />
        <Stack.Screen name="Register" component={Register} options={{ title: "회원가입" }} />
        <Stack.Screen name="Result" component={Result} options={{ title: "검색 결과" }} />
        <Stack.Screen name="Detail" component={Detail} options={{ title: "결제" }} />
        <Stack.Screen name="PaymentEnd" component={Detail} options={{ title: "결제 완료" }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
