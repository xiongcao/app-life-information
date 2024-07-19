import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      console.log(route.params?.post, 'route.params?.post');
    }
  }, [route.params?.post]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Create post"
        onPress={() =>
          navigation.navigate('CreatePost', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
    </View>
  );
}

function CreatePostScreen({navigation, route}) {
  const {itemId, otherParam} = route.params;
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </>
  );
}

const Stack = createNativeStackNavigator();

function RouteParams(): React.JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {props => <HomeScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CreatePost">
        {props => <CreatePostScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default RouteParams;
