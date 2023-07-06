# Convert Website into Android App using Capacitor!

This repository provides a comprehensive guide and resources for converting a website or web application into a fully functional Android app using Capacitor, a powerful cross-platform development tool. With Capacitor, you can seamlessly integrate web technologies into native mobile applications.

## Table of Contents
- [Prerequisite](#prerequisite)
- [Step 1: Create a React Application](#step-1-create-a-react-application)
- [Step 2: Create a Build Folder for Your Application](#step-2-create-a-build-folder-for-your-application)
- [Step 3: Install Capacitor](#step-3-install-capacitor)
- [Step 4: Create Your Android Application](#step-4-create-your-android-application)
- [Bonus Section: Create a Custom Splash Screen](#bonus-section-create-a-custom-splash-screen)
- [Reference](#reference)

## Prerequisite
Before getting started, ensure that you have a production build folder of your website or web application. Most frameworks have a build command that generates this folder for you. If you're using vanilla JavaScript, make sure to organize all your assets and files within a dedicated folder.

You will also need Android Studio installed on your machine.

## Step 1: Create a React Application
If you don't have an existing project, you can create a new React application using the following commands:
```
npx create-react-app my-app
cd my-app
```
To run the React application, use the command `npm start`.

## Step 2: Create a Build Folder for Your Application
To convert your React application into an Android app, you need to create a build folder. Use the command `npm run build` to generate this folder.

## Step 3: Install Capacitor
Install the Capacitor CLI and core library by running the following command:
```
npm install @capacitor/cli @capacitor/core
npx cap init
```
During the initialization process, you will be prompted to enter the name of your application and the package ID (e.g., com.yourAppName.android). Afterward, open the `capacitor.config.ts` file located in the `webDir` folder and update the name of your build folder if it's different.

## Step 4: Create Your Android Application
To create the Android application, install and configure the Capacitor Android library with the following commands:
```
npm install @capacitor/android
npx cap add android
```
You can then open Android Studio either by running `npx cap open android` or by manually importing the `android/` directory as an Android Studio project. Once the project is ready, you can run the Android application either on an emulator or a physical Android device.

## Bonus Section: Create a Custom Splash Screen
To add a custom splash screen and icon to your Android application, install the Capacitor plugin using the following command:
```
npm install -g cordova-res
```
Organize your icon and splash screen files within a `resources/` folder in your project's root directory. Run the command `cordova-res android --skip-config --copy` to generate different-sized icons and splash screens for your app.

For a more detailed explanation and visual examples, please refer to the [article](https://blog.webdrip.in/convert-website-into-android-app-using-capacitor) associated with this repository.

## Reference
For more information and detailed steps on converting your website into an Android app using Capacitor, please visit the [Capacitor Docs](https://capacitorjs.com/docs) that inspired this repository.
