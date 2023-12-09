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
  const salutation = document.querySelector("select[name=salutation]");

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
  if (first) {
    data.first = first.value;
  }
  if (last) {
    data.last = last.value;
  }
  if (email) {
    data.email = email.value;
  }
  if (birthdate) {
    data.birthdate = birthdate.value;
  }
  if (phone) {
    data.phone = phone.value;
  }
  if (iban) {
    data.iban = iban.value;
  }
  if (owner) {
    data.owner = owner.value;
  }
  if (company) {
    data.company = company.value;
  }

  return data;
}

function putCustomer() {
  window.onload = function () {
    document.querySelector("td[name=first-address]").innerHTML =
      form.streetname + ", " + form.romNumber;
    document.querySelector("td[name=last-address]").innerHTML =
      form.postcode + ", " + form.city;
    document.querySelector("td[name=ean]").innerHTML = form.ean;
    document.querySelector("td[name=startdatum]").innerHTML = form.startdatum;
    document.querySelector("td[name=changeOrMoving]").innerHTML = form.owner;

    document.querySelector("td[name=first]").innerHTML =
      form.first + " " + form.last;
    document.querySelector("td[name=birthdate]").innerHTML = form.birthdate;
    document.querySelector("td[name=email]").innerHTML = form.email;
    document.querySelector("td[name=phone]").innerHTML = form.phone;
    document.querySelector("td[name=iban]").innerHTML = form.iban;
    document.querySelector("td[name=owner]").innerHTML = form.owner;
  };
}

function putPeakRateCustomer(e) {

  let totalStoorm = document.querySelector("label[name=total-stoorm]");
  totalStoorm.classList.remove('bg-slate-200')
  totalStoorm.classList.remove('animate-pulse')
  totalStoorm.innerHTML = '0,00'

  if(e.name === 'peak-rate-eletric'){

    const connectionEletricSelect = document.querySelector(
      'select[name="connection-eletric"]'
    );
    if (connectionEletricSelect) {
      const currentIndex = connectionEletricSelect.selectedIndex;
      if (currentIndex < connectionEletricSelect.options.length - 1) {
        connectionEletricSelect.selectedIndex = currentIndex + 1;
        const event = new Event("change");
        connectionEletricSelect.dispatchEvent(event);
      }
    }
  

    const eletricLabels = document.querySelectorAll("label[name=peak-rate-eletric]");
    eletricLabels.forEach((label) => {
      label.innerHTML = e.value
    })
    const purchase_surcharge_electricity = document.querySelector(
      "label[name=purchase_surcharge_electricity]"
    ).textContent;
    
    const purchase_fee_return_delivery_electricity = document.querySelector(
      "label[name=purchase_fee_return_delivery_electricity]"
    ).textContent;

    if(purchase_surcharge_electricity !== '0,00'){
      document.querySelector("td[name=eletric-total-price-buy]").innerHTML = '€ '+(e.value * purchase_surcharge_electricity).toFixed(2)
      document.querySelector("td[name=eletric-total-tax-buy]").innerHTML = '€ '+(e.value * purchase_fee_return_delivery_electricity).toFixed(2)
      document.querySelector("td[name=eletric-total-buy-and-tax]").innerHTML = '€ '+((e.value * purchase_surcharge_electricity)+(e.value * purchase_fee_return_delivery_electricity)).toFixed(2)
      document.querySelector("td[name=eletric-total-buy-and-tax-margem]").innerHTML = '€ '+((e.value * purchase_surcharge_electricity)+(e.value * purchase_fee_return_delivery_electricity)).toFixed(2)
      
      totalStoorm.innerHTML = '€ '+((e.value * purchase_surcharge_electricity)+(e.value * purchase_fee_return_delivery_electricity)).toFixed(2)
    }
  }
  
  let totalGas = document.querySelector("label[name=total-gas]")
  totalGas.classList.remove('bg-slate-200')
  totalGas.classList.remove('animate-pulse')
  totalGas.innerHTML = '0,00'
  if(e.name === 'peak-rate-gas') {

  const connectionGasSelect = document.querySelector(
    'select[name="connection-gas"]'
  );
  if (connectionGasSelect) {
    const currentIndex = connectionGasSelect.selectedIndex;
    if (currentIndex < connectionGasSelect.options.length - 1) {
      connectionGasSelect.selectedIndex = currentIndex + 1;
      const event = new Event("change");
      connectionGasSelect.dispatchEvent(event);
    }
  }

    const gasLabels = document.querySelectorAll("label[name=peak-rate-gas]");
    gasLabels.forEach((label) => {
      label.innerHTML = e.value
    })
    const inkoopopslag_gas = document.querySelector(
      "label[name=inkoopopslag_gas]"
    ).textContent;
    
    const purchase_surcharge_gas = document.querySelector(
      "label[name=purchase_surcharge_gas]"
    ).textContent;
  
    if(inkoopopslag_gas !== '0,00'){
      document.querySelector("td[name=gas-total-price-buy]").innerHTML = '€ '+(e.value * inkoopopslag_gas).toFixed(2)
      document.querySelector("td[name=gas-total-tax-buy]").innerHTML = '€ '+(e.value * purchase_surcharge_gas).toFixed(2)
      document.querySelector("td[name=gas-total-buy-and-tax]").innerHTML = '€ '+((e.value * inkoopopslag_gas)+(e.value * purchase_surcharge_gas)).toFixed(2)
      document.querySelector("td[name=gas-total-buy-and-tax-margem]").innerHTML = '€ '+((e.value * inkoopopslag_gas)+(e.value * purchase_surcharge_gas)).toFixed(2)
     
      totalGas.innerHTML = '€ '+((e.value * inkoopopslag_gas)+(e.value * purchase_surcharge_gas)).toFixed(2)
    }
  }

  const total = document.querySelector("label[name=total-stoorm-gas]")
  total.classList.remove('bg-slate-200')
  total.classList.remove('animate-pulse')
  total.innerHTML = '0,00'

  const stoormGas = parseFloat(totalGas.textContent) + parseFloat(totalStoorm.textContent);
  if(stoormGas > 0){
    total.innerHTML = stoormGas;
  }
}

