document.getElementById("download-btn").addEventListener("click", function() {
    // Replace "resume.pdf" with the name of your PDF file
    var pdfFile = "https://drive.google.com/uc?export=download&id=1OFPp6o-tMCfa4_mNkmo5wey9l0qPbsf7";
  
    // Create a new anchor element to trigger the download
    var downloadLink = document.createElement("a");
  
    // Set the href attribute of the anchor element to the URL of your PDF file
    downloadLink.href = pdfFile;
  
    // Set the download attribute of the anchor element to the name of your PDF file
    downloadLink.download = pdfFile;
  
    // Trigger the click event of the anchor element to start the download
    downloadLink.click();
  });
  
  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}