function onSubmit(event) {
  console.log('Submitted!' + event.timeStamp);
  event.preventDefault();
}

document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form');

  form.addEventListener('submit', onSubmit);
});