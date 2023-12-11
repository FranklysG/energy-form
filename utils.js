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

function getProductId() {
  var radios = document.querySelectorAll("input[type=radio][name=business]");
  var radioSelecionado;
  radios.forEach(function (radio) {
    if (radio.checked) {
      var inputOculto = document.querySelector(
        'input[type=radio][name=business][value="' + radio.value + '"]'
      );
      if (inputOculto) {
        radioSelecionado = inputOculto.getAttribute('data-product');;
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
  const companyCoc = document.querySelector("input[name=company-coc]");
  const companyVat = document.querySelector("input[name=company-vat]");
  const first = document.querySelector("input[name=first]");
  const last = document.querySelector("input[name=last]");
  const birthdate = document.querySelector("input[name=birthdate]");
  const email = document.querySelector("input[name=email]");
  const phone = document.querySelector("input[name=phone]");
  const iban = document.querySelector("input[name=iban]");
  const owner = document.querySelector("input[name=owner]");

  const betreftOrVerhuizing = document.querySelector(
    "select[name=betreft-het-een-verhuizing]"
  );

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
  if (companyCoc) {
    data.companyCoc = companyCoc.value;
  }
  if (companyVat) {
    data.companyVat = companyVat.value;
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
    const selectedDate = new Date(birthdate.value);
    const day = String(selectedDate.getDate()).padStart(2, "0");
    const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
    const year = selectedDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    data.birthdate = formattedDate;
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
  if (betreftOrVerhuizing) {
    data.betreftOrVerhuizing = betreftOrVerhuizing.value;
  }

  return data;
}

function putCustomer() {
  document.querySelector("td[name=first-address]").innerHTML =
    (form.streetname || "") + ", " + (form.romNumber || "");
  document.querySelector("td[name=last-address]").innerHTML =
    (form.postcode || "") + ", " + (form.city || "");
  document.querySelector("td[name=ean]").innerHTML = form.ean || "";
  document.querySelector("td[name=startdatum]").innerHTML =
    form.startdatum || "";
  document.querySelector("td[name=changeOrMoving]").innerHTML =
    form.owner || "";

  document.querySelector("td[name=first]").innerHTML =
    (form.first || "") + " " + (form.last || "");
  document.querySelector("td[name=birthdate]").innerHTML = form.birthdate || "";
  document.querySelector("td[name=email]").innerHTML = form.email || "";
  document.querySelector("td[name=phone]").innerHTML = form.phone || "";
  document.querySelector("td[name=iban]").innerHTML = form.iban || "";
  document.querySelector("td[name=owner]").innerHTML = form.owner || "";
}

async function putPeakRateCustomer(e) {
  let totalStoorm = document.querySelector("label[name=eletric_total]");
  totalStoorm.classList.remove("bg-slate-200");
  totalStoorm.classList.remove("animate-pulse");

  let totalGas = document.querySelector("label[name=gas_total]");
  totalGas.classList.remove("bg-slate-200");
  totalGas.classList.remove("animate-pulse");
  
  const btw = document.querySelectorAll("label[name=total_btw]").forEach((element) => {
    element.classList.remove("bg-slate-200");
    element.classList.remove("animate-pulse");
    element.innerHTML = "€ 0.00";
  });
  
  const total = document.querySelectorAll("label[name=gas_eletric_total]").forEach((element) => {
    element.classList.remove("bg-slate-200");
    element.classList.remove("animate-pulse");
    element.innerHTML = "€ 0.00";
  });
  
  const total_per_month = document.querySelectorAll("label[name=total_per_month]").forEach((element) => {
    element.classList.remove("bg-slate-200");
    element.classList.remove("animate-pulse");
    element.innerHTML = "€ 0.00";
  });

  await getProductWithCauculation(e);

  if (e.name === "peak-rate-eletric") {
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
  }

  if (e.name === "peak-rate-gas") {
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
  }
}
