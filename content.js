document.addEventListener("mouseup", function () {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    const note = prompt("Add a note for the selected text:", "");
    if (note !== null && note !== "") {
      const span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      span.title = note;
      const range = window.getSelection().getRangeAt(0).cloneRange();
      range.surroundContents(span);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  }
});
