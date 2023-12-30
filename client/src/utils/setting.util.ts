function settingsUrl() {
  console.log(navigator.userAgent);
  const settingUrl = "chrome://settings/content/siteDetails";
  console.log(settingUrl);
  return settingUrl;
}

export default settingsUrl;
