function getIsBusiness() {
    var radios = document.querySelectorAll('input[type=radio][name=business]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=business][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });

   return radioSelecionado;
}

function getProductType() {
    var radios = document.querySelectorAll('input[type=radio][name=electriciteit-or-gas]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=electriciteit-or-gas][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}

function getSmartMeter() {
    var radios = document.querySelectorAll('input[type=radio][name=smart-meter]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=smart-meter][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}

function getMyConsumption() {
    var radios = document.querySelectorAll('input[type=radio][name=my-consumption]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=my-consumption][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}

function getBusinessType() {
    var radios = document.querySelectorAll('input[type=radio][name=business-type]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=business-type][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}
function getHouseType() {
    var radios = document.querySelectorAll('input[type=radio][name=house-type]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=house-type][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}

function getPeoples() {
    var radios = document.querySelectorAll('input[type=radio][name=peoples]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=peoples][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}
