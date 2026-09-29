import Constants from 'expo-constants';
import { Platform } from 'react-native';

const { major, minor, patch } = Platform.constants.reactNativeVersion;

export const appName = Constants.expoConfig?.name ?? '1stapp';
export const appVersion = Constants.expoConfig?.version ?? '1.0.0';
export const expoSdk = Constants.expoConfig?.sdkVersion ?? 'unknown';
export const reactNativeVersion = `${major}.${minor}.${patch}`;

/** Human-readable label for where the app is currently running. */
export const platformLabel = Platform.select({
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
  default: Platform.OS,
});
