import { View } from "react-native";
import { useState, useContext } from "react";
import { Appbar } from "react-native-paper";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/Feather";
import SwitchSelector from "react-native-switch-selector";
import { useNavigation } from "@react-navigation/native";
import { FieldContext } from "../contexts/FieldTypeContext";

export default function Header({ screenName }) {
  const { handleChange } = useContext(FieldContext);
  const [value, setValue] = useState(Number(100));
  const navigation = useNavigation();

  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "space-beetween",
          alignItems: "stretch"
        }}
      >
        <Appbar.Header style={{ backgroundColor: "#03113c" }}>
          <Icon2
            name="menu"
            size={50}
            color={"white"}
            style={{ paddingRight: 10, paddingLeft: 10 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
          <Appbar.Content
            title={screenName}
            style={{ alignItems: "center", right: "2%" }}
          />
          <Icon
            name="sign-out"
            size={40}
            color={"white"}
            onPress={() => navigation.goBack()}
          />
        </Appbar.Header>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <SwitchSelector
          initial={0}
          onPress={(value) => {
            handleChange(value);
          }}
          buttonColor="#03113c"
          style={[
            {
              height: 50,
              width: 150,
              marginTop: 10,
              left: 5
            }
          ]}
          hasPadding
          options={[
            {
              label: "",
              value: `Campo`,
              imageIcon: require("../assets/images/soccer-field.png")
            }, //images.feminino = require('./path_to/assets/img/feminino.png')
            {
              label: "",
              value: `Prancheta`,
              imageIcon: require("../assets/images/prancheta.png")
            } //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
          testID="field-switch-selector"
          accessibilityLabel="field-switch-selector"
        />
        <SwitchSelector
          initial={0}
          buttonColor="#03113c"
          style={[
            {
              height: 50,
              width: 210,
              marginTop: 10,
              right: 5
            }
          ]}
          hasPadding
          options={[
            {
              label: `Saldo: R$${value}`,
              value: `R$${value}`
            }, //images.feminino = require('./path_to/assets/img/feminino.png')
            {
              label: "Valor do Time: R$1000",
              value: 1000
            } //images.masculino = require('./path_to/assets/img/masculino.png')
          ]}
          testID="field-switch-selector"
          accessibilityLabel="field-switch-selector"
        />
      </View>
    </>
  );
}
