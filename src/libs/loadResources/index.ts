import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };

export default async function AppLoading() {
  const cacheImages = (images: number[]) => {
    return images.map((image) => {
      return typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts: FontType[]) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const imageAssets = cacheImages([
    require('../../../assets/images/icon.png'),
    require('../../../assets/images/splash.png')
  ]);

  const fontAssets = cacheFonts([
    {
      senBold: require('../../../assets/fonts/Sen-Bold.ttf')
    },
    {
      senExtraBold: require('../../../assets/fonts/Sen-ExtraBold.ttf')
    },
    {
      senRegular: require('../../../assets/fonts/Sen-Regular.ttf')
    }
  ]);

  return Promise.all([...imageAssets, ...fontAssets]);
}
