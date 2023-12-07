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

function getBuildType() {
    var radios = document.querySelectorAll('input[type=radio][name=building_type]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=building_type][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}

function getHouseHoldSize() {
    var radios = document.querySelectorAll('input[type=radio][name=household_size]');
    var radioSelecionado;
    radios.forEach(function (radio) {
        if (radio.checked) {
            var inputOculto = document.querySelector('input[type=radio][name=household_size][value="' + radio.value + '"]');
            if (inputOculto) {
                radioSelecionado = inputOculto.value;
            }
            return;
        }
    });
    
   return radioSelecionado;
}
