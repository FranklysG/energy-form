function getIsBusiness() {
  var radios = document.querySelectorAll("input[type=radio][name=business]");
  var radioSelecionado;
  radios.forEach(function (radio) {
    if (radio.checked) {
      var inputOculto = document.querySelector(
        'input[type=radio][name=business][value="' + radio.value + '"]'
      );
      if (inputOculto) {
        radioSelecionado = inputOculto.value;
      }
      return;
    }
  });

  return radioSelecionado;
}

function getProductType() {
  var radios = document.querySelectorAll(
    "input[type=radio][name=electriciteit-or-gas]"
  );
  var radioSelecionado;
  radios.forEach(function (radio) {
    if (radio.checked) {
      var inputOculto = document.querySelector(
        'input[type=radio][name=electriciteit-or-gas][value="' +
          radio.value +
          '"]'
      );
      if (inputOculto) {
        radioSelecionado = inputOculto.value;
      }
      return;
    }
  });

  return radioSelecionado;
}

function getSmartMeter() {
  var radios = document.querySelectorAll("input[type=radio][name=smart-meter]");
  var radioSelecionado;
  radios.forEach(function (radio) {
    if (radio.checked) {
      var inputOculto = document.querySelector(
        'input[type=radio][name=smart-meter][value="' + radio.value + '"]'
      );
      if (inputOculto) {
        radioSelecionado = inputOculto.value;
      }
      return;
    }
  });

  return radioSelecionado;
}

function getMyConsumption() {
  var radios = document.querySelectorAll(
    "input[type=radio][name=my-consumption]"
  );
  var radioSelecionado;
  radios.forEach(function (radio) {
    if (radio.checked) {
      var inputOculto = document.querySelector(
        'input[type=radio][name=my-consumption][value="' + radio.value + '"]'
      );
      if (inputOculto) {
        radioSelecionado = inputOculto.value;
      }
      return;
    }
  });

  return radioSelecionado;
}

function getBuildType() {
  var radios = document.querySelectorAll(
    "input[type=radio][name=building_type]"
  );
  var radioSelecionado;
  radios.forEach(function (radio) {
    if (radio.checked) {
      var inputOculto = document.querySelector(
        'input[type=radio][name=building_type][value="' + radio.value + '"]'
      );
      if (inputOculto) {
        radioSelecionado = inputOculto.value;
      }
      return;
    }
  });

  return radioSelecionado;
}

function getHouseHoldSize() {
  var radios = document.querySelectorAll(
    "input[type=radio][name=household_size]"
  );
  var radioSelecionado;
  radios.forEach(function (radio) {
    if (radio.checked) {
      var inputOculto = document.querySelector(
        'input[type=radio][name=household_size][value="' + radio.value + '"]'
      );
      if (inputOculto) {
        radioSelecionado = inputOculto.value;
      }
      return;
    }
  });

  return radioSelecionado;
}

function getMeterType() {
  var meterTypeElement = document.querySelector("select[name=meter-type]");
  var peakRateElement = document.querySelector("input[name=peak-rate-eletric]");
  var connectionElement = document.querySelector(
    "select[name=connection-eletric]"
  );

  var data = {};

  if (meterTypeElement) {
    data.meterType = meterTypeElement.value;
  }

  if (peakRateElement) {
    data.peakRateEletric = peakRateElement.value;
  }

  if (connectionElement) {
    data.connectionEletric = connectionElement.value;
  }

  return data;
}

function getGasType() {
  var peakRateElement = document.querySelector("input[name=peak-rate-gas]");
  var connectionElement = document.querySelector("select[name=connection-gas]");

  var data = {};

  if (peakRateElement) {
    data.peakRateGas = peakRateElement.value;
  }

  if (connectionElement) {
    data.connectionGas = connectionElement.value;
  }

  return data;
}

function getCustomer() {
  const postcode = document.querySelector("input[name=postcode]");
  const housenumber = document.querySelector("input[name=housenumber]");
  const streetname = document.querySelector("input[name=streetname]");
  const city = document.querySelector("input[name=city]");
  const startdatum = document.querySelector("input[name=startdatum]");
  const company = document.querySelector("input[name=company]");
  const romNumber = document.querySelector("input[name=rom-businnes]");
  const ivaNumber = document.querySelector("input[name=iva-number]");
  const first = document.querySelector("input[name=first]");
  const last = document.querySelector("input[name=last]");
  const birthdate = document.querySelector("input[name=birthdate]");
  const email = document.querySelector("input[name=email]");
  const phone = document.querySelector("input[name=phone]");
  const iban = document.querySelector("input[name=iban]");
  const owner = document.querySelector("input[name=owner]");
  
  const businessAddress = document.querySelector(
    "select[name=business-address]"
  );
  const changeOrMoving = document.querySelector(
    "select[name=change-or-moving]"
  );
  const salutation = document.querySelector(
    "select[name=salutation]"
  );

  var data = {};
  if (postcode) {
    data.postcode = postcode.value;
  }
  if (housenumber) {
    data.housenumber = housenumber.value;
  }
  if (streetname) {
    data.streetname = streetname.value;
  }
  if (city) {
    data.city = city.value;
  }
  if (businessAddress) {
    data.businessAddress = businessAddress.value;
  }
  if (changeOrMoving) {
    data.changeOrMoving = changeOrMoving.value;
  }
  if (startdatum) {
    data.startdatum = startdatum.value;
  }
  if (salutation) {
    data.salutation = salutation.value;
  }
  if (company) {
    data.company = company.value;
  }
  if (romNumber) {
    data.romNumber = romNumber.value;
  }
  if (ivaNumber) {
    data.ivaNumber = ivaNumber.value;
  }

  return data
}
