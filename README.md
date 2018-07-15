# Native Icons

Vector icons in react-native without the fuss and multi-step installation. Easy to use, completely customizable when you want.

## Icon sets
* [Feather](https://github.com/feathericons/feather)
* [Ionicons](https://github.com/ionic-team/ionicons)

## Installation
Choose the icon set(s) you want and install with npm:
```sh
$ npm install @native-icons/feather
$ npm install @native-icons/ionicons
```

⚠️ `react-native-svg` verions have very specific peer dependencies. If you're using [create-react-native-app](https://github.com/react-community/create-react-native-app) you have nothing to worry about. If you've ejected or arn't using expo, [check your peer dependencies](https://github.com/react-native-community/react-native-svg#notice).

## Usage
Import the icon you want and use it like normal.

```js
import React from 'react';
import { View, Text } from 'react-native';
import { Github } from '@native-icons/ionicons';

const Main = () => (
  <View>
    <Github/>
    <Text>Github is awesome<Text/>
  </View>
);
```

### Styling
Every icon set is different, and you might need to look at the source a bit, but you can customize all of the svg properties by passing them as props.

```js
import React from 'react';
import { View, Text } from 'react-native';
import { Anchor } from '@native-icons/feather';

const Main = () => (
  <View>
    <Anchor strokeWidth={4}/>
    <Text>Anchors away!<Text/>
  </View>
);
```
