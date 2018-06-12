import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  render() {
    return (
      <View style={{ padding: 10, marginTop: 50 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: "blue"
  },
  container: {
    flex: 1,
    backgroundColor: "#FC4C4C",
    alignItems: "center",
    justifyContent: "center"
  }
});
