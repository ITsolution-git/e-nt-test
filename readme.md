# Getting Started 

## Making Project work 
To get the project to work, you would need to create `.env`, obtain environment variables and paste them in your `.env` file 


Installation Instructions 

[Go to Facebook Docs to see Installation Instruction](https://facebook.github.io/react-native/docs/getting-started)
 In general 
 
 ```
 cd entreClientWithoutExpo
 brew install watchman
 npm install -g react-native-cli
 ```
 
 To intialize and get repo working 
 
 ```
 cd entreClientWithoutExpo
 npm install 
 cd ios 
 pod install 
 react-native run-ios
 ```

## Folder Structure 



## Rules for the Project 


## Errors 

### “:CFBundleIdentifier”
1. If your recieve `Print: Entry, “:CFBundleIdentifier”, Does Not Exist` when doing react-native run-ios 
see if you `GoogleService-Info.plist` in the correct location (or if exsist. 

You can get `GoogleService-Info.plist` from fb project.

2. https://stackoverflow.com/questions/37461703/print-entry-cfbundleidentifier-does-not-exist



