var headerBtns = [];
var aboutUs = document.getElementById("aboutUs");
headerBtns.push(aboutUs);
var services = document.getElementById("services");
headerBtns.push(services);
var solutions = document.getElementById("solutions");
headerBtns.push(solutions);
var support = document.getElementById("support");
headerBtns.push(support);
var contact = document.getElementById("contact");
headerBtns.push(contact);

var headerTxts = [];
var aboutText = document.getElementById("aboutText");
headerTxts.push(aboutText);
var serviceText = document.getElementById("serviceText");
headerTxts.push(serviceText);
var solutionsText = document.getElementById("solutionsText");
headerTxts.push(solutionsText);
var supportText = document.getElementById("supportText");
headerTxts.push(supportText);
var contactText = document.getElementById("contactText");
headerTxts.push(contactText);

selectItem(headerBtns.length);
/*for (var i = 0; i < headerBtns.length; i++) {
    headerBtns[i].addEventListener("click", selectItem);
}
*/
function selectItem(event) {
    for (var i = 0; i < headerBtns.length; i++) {
        if (i == event) {
            headerBtns[i].style.backgroundColor = "rgba(214,214,216,200)";
            headerBtns[i].style.color = "rgba(0,0,0,255)";
        } else {
            headerBtns[i].style.backgroundColor = "rgba(0,0,0,0)";
            headerBtns[i].style.color = "rgba(255,255,255,255)";
        }
    }
}

document.getElementById("myBtn").style.display = "none";
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var missionTxt = document.getElementById("missionTxt");
var missionHeading = document.getElementById("missionHeading");
var missionContent = document.getElementById("missionContent");

var selectText = true;
setInterval(changeText, 6000);

function changeText() {


    jQuery(function($) {
        $("#missionHeading").fadeOut(1000);
        $("#missionContent").fadeOut(1000, function() {
            if (selectText) {
                missionHeading.innerHTML = "Our Vision";
                missionContent.innerHTML = "To perform for our customers the highest level of quality construction services at fair and market competitive prices. To ensure the longevity of our company through repeat and referral business achieved by customer satisfaction in all areas including timeliness, attention to detail and service-minded attitude.";
                selectText = false;
                jQuery(function($) {
                    $("#missionHeading").fadeIn(1000);
                    $("#missionContent").fadeIn(1000);
                });
            } else {
                missionHeading.innerHTML = "Our Mission";
                missionContent.innerHTML = "To perform for our customers the highest level of quality construction services at fair and market competitive prices. To ensure the longevity of our company through repeat and referral business achieved by customer satisfaction in all areas including timeliness, attention to detail and service-minded attitude.";
                selectText = true;
                jQuery(function($) {
                    $("#missionHeading").fadeIn(1000);
                    $("#missionContent").fadeIn(1000);
                });
            }
        });

    });



}