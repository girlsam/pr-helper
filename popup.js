function buildMarkdown() {
  var checkedBoxes = document.querySelectorAll('input[name="markdown"]:checked');
  var markdown = '';
  
  for (var i = 0; i < checkedBoxes.length; i++) {
    markdown += markdownMap[checkedBoxes[i].id] + '\n \n';
  }
  
  return markdown;
}

function sendMessage() {
  chrome.tabs.query({ active: true }, function(tabs) {
    return chrome.tabs.sendMessage(
      tabs[0].id, // id of current tab
      {
        from: 'popup',
        subject: 'addMarkdown',
        value: buildMarkdown()
      });
  });
}

function onSubmit(event) {
  event.preventDefault();
  sendMessage();
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');
  form.addEventListener('submit', onSubmit);
});

var markdownMap = {
  whatDoesItDo: '### What does it do?',
  whatElse: '### What else do you need to know?',
  relatedTickets: '### Related Tickets',
  testCoverage: '### Test Coverage',
  communication: '### Communication',
  screenShots: '### Screenshots'
};
