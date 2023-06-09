let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");

executeButton.addEventListener("click", function(){
	let currentInputText = inputElement.value;
	generate(currentInputText);
});

function generate(incUserInput) {
    let rating = parseFloat(incUserInput);
    if (isNaN(rating) || rating < 0.1 || rating > 10) {
        outputParagraph.innerText = "Please provide a rating between 1/10 and 10/10.";
    } else if (rating > 5) {
        outputParagraph.innerText = rating.toFixed(1) + "/10? How Wonderful. The algorithm will be happy to hear.";
    } else if (rating === 5) {
        outputParagraph.innerText = rating.toFixed(1) + "/10? We'll work on it. Maybe the algorithm just needs to understand you better.";
    } else {
        outputParagraph.innerText = rating.toFixed(1) + "/10? We will let the algorithm know immediately.";
    }
}

document.querySelector('a[href="#republicanContent"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#republicanContent').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('a[href="#progressiveContent"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#progressiveContent').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('a[href="#catContent"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#catContent').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('a[href="#dogContent"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#dogContent').scrollIntoView({
    behavior: 'smooth'
  });
});

document.querySelector('a[href="#endingContent"]').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#endingContent').scrollIntoView({
    behavior: 'smooth'
  });
});

