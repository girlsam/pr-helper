chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  var textarea = document.querySelector('textarea#pull_request_body');

  if (msg.from === 'popup' && msg.subject === 'addMarkdown') {
    if (textarea) {
      textarea.value = msg.value;
    } else {
      console.error('Text area does not exist.');
    }
  } else {
    console.error('Unknown message or sender.');
  }

  return;
});
