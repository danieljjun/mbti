import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Instructor from "./pages/Instructor";
import Admin from "./pages/Admin";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown:false }}>
          {() => <Home user={user} />}
        </Stack.Screen>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Instructor" component={Instructor}/>
        <Stack.Screen name="Admin" component={Admin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
