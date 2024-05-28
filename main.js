import './style.css'


document.querySelector('#app').innerHTML = `
    <div id="drop-zone">
        <p>Drag & Drop Image Here</p>
        <div id="image-preview"></div>
        <div id="image-background"></div>
    </div>
`

document.addEventListener("DOMContentLoaded", function() {
  const dropZone = document.getElementById("drop-zone");
  const imagePreview = document.getElementById("image-preview");
  const imageBackground = document.getElementById("image-background");

  dropZone.addEventListener("dragover", function(e) {
      e.preventDefault();
      dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", function() {
      dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", function(e) {
      e.preventDefault();
      dropZone.classList.remove("dragover");

      const files = e.dataTransfer.files;
      if (files.length > 0) {
          const file = files[0];
          if (file.type.startsWith("image/")) {
              const reader = new FileReader();
              reader.onload = function(event) {
                  imagePreview.innerHTML = `<img src="${event.target.result}" alt="Dropped Image">`;
                  imageBackground.style.backgroundImage = `url(${event.target.result})`;
                  
              };
              reader.readAsDataURL(file);
          } else {
              alert("Please drop an image file.");
          }
      }
  });
});
