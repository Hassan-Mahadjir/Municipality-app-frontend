import { Redirect } from 'expo-router';

export default function rootIndex() {
  return <Redirect href={'(auth)'} />;
}
