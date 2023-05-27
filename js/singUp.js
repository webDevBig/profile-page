
const stepper = new mdb.Stepper(document.getElementById('stepper-buttons'));
document.getElementById('step-2').addEventListener('click', () => {
    stepper.changeStep(1);
});

function addClass() {
    document.getElementById('generateCode').classList.remove('hide')
    document.getElementById('loader-animation').classList.add('hide')
}
document.getElementById('step-3').addEventListener('click', () => {
    stepper.changeStep(2);
    setTimeout(addClass, 3000);
});
document.getElementById('send').addEventListener('click', () => {
    document.getElementById('code-box').classList.toggle('hide');
    document.getElementById('phone-box').classList.toggle('hide')
});

var gender_btn = document.querySelectorAll('.gender-btn');
[].forEach.call(gender_btn, function (el) {
    el.onclick = function (e) {
        for (var i = 0; i < gender_btn.length; i++) {
            gender_btn[i].classList.remove('active');
        }
        el.classList.toggle('active');
    }
});

var input = document.querySelector("#phoneNumber");
var iti = window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        fetch("https://ipapi.co/json")
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                callback(data.country_code);
            })
            .catch(function () {
                callback("us");
            });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js" // just for formatting/placeholders etc
});
document.querySelector('body').addEventListener('keyup', function (event) {
    if (event.target.classList.contains('tel')) {
        var input = event.target;
        var value = input.value;
        var length = value.length;
        var inputCharacter = parseInt(value.slice(-1));
        if (!((length > 1 && inputCharacter >= 0 && inputCharacter <= 9) || (
                inputCharacter >= 0 && inputCharacter <= 9))) {
            input.value = value.substring(0, length - 1);
        }
    }
  
});

const radio = document.querySelectorAll('.radio-input');

[].forEach.call(radio, function (el) {
    el.onclick = function (e) {
        if (document.getElementById('flexRadioDefault1').checked) {
            console.log("yes");
            document.querySelector('.race-col').classList.add('hide')
        } else {
            document.querySelector('.race-col').classList.remove('hide')
        }
    }
});




