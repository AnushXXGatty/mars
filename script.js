var counter = 1;
var userClicked = false;

setInterval(function() {
    if (!userClicked) {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }
}, 5000);

for (let i = 1; i <= 4; i++) {
    document.getElementById('radio' + i).addEventListener('click', function() {
        userClicked = true; // Set flag when user clicks
    });
}
window.onscroll=()=>{
    // document.querySelector(".stars").style.transform="scale("+(500-scrollY)/500 +")";
    document.querySelector(".astroid").style.transform="scale("+(2000-scrollY)/2000 +")";
    document.querySelector(".mars").style.transform="scale("+(3000-scrollY)/3000 +")";
    document.querySelector(".saturn").style.transform="scale("+(3000-scrollY)/3000 +")";
    document.querySelector(".earth").style.transform="scale("+(3000-scrollY)/3000 +")";
    document.querySelector(".home h1").style.marginTop=scrollY/1.3+"px";
    document.querySelector(".home h1").style.opacity=(300-scrollY)/300;
}
