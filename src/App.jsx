import { useAuthenticator } from "@aws-amplify/ui-react";
import {
  Button,
  Heading,
  Flex,
  View,
  Grid,
  Divider,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);

export default function App() {
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Flex
      className="App"
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="70%"
      margin="0 auto"
    >
      <Heading level={1}>My Profile</Heading>
      <Divider />


      <Grid
        margin="3rem 0"
        autoFlow="column"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
      >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
        border="1px solid #ccc"
        padding="2rem"
        borderRadius="5%"
        margin="3rem 0"
      >
        <View>
	  <Heading level="3">kallussydney88@gmail.com</Heading>
          <Heading level="3">Sydney Kallus</Heading>
        </View>
      </Flex>
      </Grid>
      <Button onClick={signOut}>Sign Out</Button>
    </Flex>
  );
}
