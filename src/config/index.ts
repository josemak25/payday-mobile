import Reactotron from 'reactotron-react-native';

const ENVIRONMENT_VARIABLES = {
  PAYDAY_BASE_URI: process.env.PAYDAY_BASE_URI
};

declare global {
  interface Console {
    tron: (...args: any[]) => void;
  }
}

if (__DEV__) {
  Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  //@ts-ignore
  console.tron = Reactotron.log;
}

export default ENVIRONMENT_VARIABLES;
