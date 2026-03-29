const originalFetch = window.fetch;

window.fetch = (...args) => {
  if (typeof args[0] === "string") {
    args[0] = args[0].replace("/en-US/browser.json", "/en/browser.json");
    args[0] = args[0].replace("/en-US/translation.json", "/en/translation.json");
  }
  return originalFetch(...args);
};