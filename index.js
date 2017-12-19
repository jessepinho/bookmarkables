(function() {
  const fileInput = document.getElementById('file');
  const reader = new FileReader();
  fileInput.onchange = () => reader.readAsText(fileInput.files[0]);
  reader.onload = () => document.getElementById('code').innerHTML = reader.result;
})();
