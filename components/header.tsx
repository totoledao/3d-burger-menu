import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Link href={"../"}>
        <Text>Voltar</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
