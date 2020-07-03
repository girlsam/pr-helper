function buildMarkup() {
  var checkedBoxes = document.querySelectorAll('input[name="markup"]:checked');
  var markup = '';

  for (var i = 0; i < checkedBoxes.length; i++) {
    markup += markupMap[checkedBoxes[i].id] + '\n';
  }
  
  console.log(markup)
  return markup;
}

function onSubmit(event) {
  event.preventDefault();
  buildMarkup();
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');

  form.addEventListener('submit', onSubmit);
});

var markupMap = {
  whatDoesItDo: '### What does it do?',
  whatElse: '### What else do you need to know?',
  relatedTickets: '### Related Tickets',
  testCoverage: '### Test Coverage',
  communication: '### Communication',
  screenShots: '### Screenshots'
};