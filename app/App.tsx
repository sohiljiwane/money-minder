import { SafeAreaView } from "react-native-safe-area-context";
import Login from "../src/screens/Login";

const App: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </>
  );
};
