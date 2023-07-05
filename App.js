import React, { Component } from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://smpiracy.netlify.app/" }}
      style={{ flex: 1 }}
    />
  );
}
