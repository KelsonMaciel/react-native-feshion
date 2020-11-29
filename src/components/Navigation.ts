import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface StackNavigationProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> {
    navigation: StackNavigationProp<ParamList,  RouteName>;
    router:  RouteProp<ParamList, RouteName>;
}

export type Routes =  {
    Onboarding: undefined;
    Welcome: undefined;
    Login: undefined;
}