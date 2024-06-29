document.getElementById("enable-annotations").addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      files: ["content.js"]
    });
  });
});

document.getElementById("disable-annotations").addEventListener("click", () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      func: () => {
        document.querySelectorAll("span[title]").forEach(span => {
          const parent = span.parentNode;
          parent.replaceChild(document.createTextNode(span.innerText), span);
          parent.normalize();
        });
      }
    });
  });
});

document.getElementById("save-name").addEventListener("click", () => {
  const name = document.getElementById("annotator-name").value;
  if (name) {
    chrome.storage.sync.set({annotatorName: name}, () => {
      alert("Name saved!");
    });
  }
});
