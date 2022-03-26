let button = document.getElementById("left");

button.addEventListener(
  "click",
  function () {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "left",
      });
    });
  },
  false
);
