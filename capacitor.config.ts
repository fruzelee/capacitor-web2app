import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.crevado.fr.web2app',
  appName: 'web2app',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
