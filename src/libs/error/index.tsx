import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import { Alert } from 'react-native';

type GlobalErrorProps = {
  children: React.ReactElement;
};

export default function GlobalErrorBoundary(props: GlobalErrorProps) {
  const errorHandler = (e: Error, stackTrace: string) => {
    Alert.alert(
      'Unexpected error occurred',
      `
  Something went wrong 😞😞😞 \nand we sincerely apologize for this. \nWe have reported this to our team!\n Please close the app and start again!
  `,
      [
        {
          text: 'Close',
          onPress: () => exceptionHandler(e.message)
        }
      ]
    );
  };

  const exceptionHandler = (nativeError: string) => {
    // our exception handler code here
    // E.g. reporting error using sentry
  };

  return <ErrorBoundary onError={errorHandler}>{props.children}</ErrorBoundary>;
}
