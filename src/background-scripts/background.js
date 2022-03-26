browser.runtime.onInstalled.addListener(initialize);
window.current_window_ids = [-1];

//アドオンがインストールされたときに実行（初期化）
function initialize() {
  //storage.localの設定
  browser.storage.local.set({}).catch((e) => {
    console.error(`Failed : ${e.message}`);
  });
}

browser.browserAction.onClicked.addListener(() => {
  if (window.current_window_ids.length > 0) {
    removeWindow();
    return;
  }

  let createData = {
    type: "detached_panel",
    url: "/src/window/panel.html",
    width: 250,
    height: 100,
  };
  let creating = browser.windows.create(createData);
  creating
    .then((created_window) => {
      window.current_window_ids.push(created_window.id);
      console.log(window.current_window_ids);
    })
    .catch((e) => {
      console.error(`Failed : ${e.message}`);
    });
});

async function removeWindow() {
  const all_window = await browser.windows.getAll();
  for (let i = 0; i < all_window.length; i++) {
    for (let j = 0; j < window.current_window_ids.length; j++) {
      if (all_window[i].id === window.current_window_ids[j]) {
        await browser.windows.remove(all_window[i].id);
      }
    }
  }
  window.current_window_ids.length = 0;
}
