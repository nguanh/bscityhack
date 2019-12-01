import Constants from 'expo-constants';

export function getServerUrl(suffix: string): string {
    return `${Constants.manifest.extra.serverUrl}${suffix}`;
}
