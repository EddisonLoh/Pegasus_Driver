import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.driver',
  appName: 'myDriver',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Keyboard: {
      resize: 'none'
    },
    CapacitorHttp: {
      enabled: true
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1033966813085-4477o29hblf4oo90hpdml1omd0ahs429.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    },
    BackgroundGeolocation: {
      stationaryRadius: 50,
      distanceFilter: 50,
      desiredAccuracy: 10,
      debug: true,
      notificationTitle: 'Background tracking',
      notificationText: 'enabled',
      notificationIconColor: '#FEDD1E',
      notificationIconLarge: 'mappointer_large',
      notificationIconSmall: 'mappointer_small',
      startOnBoot: true,
      stopOnTerminate: false,
      locationProvider: 1,
      interval: 60000,
      fastestInterval: 5000,
      activitiesInterval: 10000,
      stopOnStillActivity: false
    }
  },
  android: {
    allowMixedContent: true
  }
};

export default config;