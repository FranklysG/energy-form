const domain = "hosted-energy";
const scope = "user";
const version = "v1";
const base_url = `https://app.salesdock.nl/api/${domain}/${version}`;
const token = "MXibGmyJlNNaCFxJVirLbQLvji8MngOuNiYHVOM9Qhe1FRS6yjfY6navgNcR";

var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${token}`);
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  headers: myHeaders,
  redirect: "follow",
};

async function getProduct(element) {
  const product_id = element.getAttribute("data-product");
  try {
    if (product_id) {
      const response = await fetch(
        `${base_url}/${scope}/products/${product_id}`,
        {
          method: "GET",
          ...requestOptions,
        }
      )
        .then((response) => response.text())
        .then((result) => result)
        .catch((error) => console.log("error", error));

      const { data } = JSON.parse(response);
      const custom = data.customfields;

      if (custom) {
        const peakRateEletric = document.querySelector(
          "input[name=peak-rate-eletric]"
        );
        peakRateEletric.classList.remove("bg-gray-300");
        peakRateEletric.classList.add("bg-gray-50");
        peakRateEletric.removeAttribute("disabled");

        const peakRateGas = document.querySelector("input[name=peak-rate-gas]");
        peakRateGas.classList.remove("bg-gray-300");
        peakRateGas.classList.add("bg-gray-50");
        peakRateGas.removeAttribute("disabled");

        const purchase_fee_return_delivery_electricity = document.querySelector(
          "label[name=purchase_fee_return_delivery_electricity]"
        );
        purchase_fee_return_delivery_electricity.innerHTML =
          custom.purchase_fee_return_delivery_electricity;

        const purchase_surcharge_electricity = document.querySelector(
          "label[name=purchase_surcharge_electricity]"
        );
        purchase_surcharge_electricity.innerHTML =
          custom.purchase_surcharge_electricity;

        const purchase_surcharge_gas = document.querySelector(
          "label[name=purchase_surcharge_gas]"
        );
        purchase_surcharge_gas.innerHTML = custom.purchase_surcharge_gas;

        const inkoopopslag_gas = document.querySelector(
          "label[name=inkoopopslag_gas]"
        );
        inkoopopslag_gas.innerHTML = custom["inkoopopslag-gas"];

        const btw_nr_verplicht_bij_teruglevering = document.querySelector(
          "label[name=total-btw]"
        );
        btw_nr_verplicht_bij_teruglevering.classList.remove("bg-slate-200");
        btw_nr_verplicht_bij_teruglevering.classList.remove("animate-pulse");
        btw_nr_verplicht_bij_teruglevering.innerHTML =
          custom["btw-nr-verplicht-bij-teruglevering"];
      }
    }
  } catch (error) {
    document
      .querySelector("span[name=message-error]")
      .classList.remove("hidden");
  }
}

async function createEnergyOffer() {
  document.querySelector("dialog[name=loading]").showModal();
  const signature = getSignature();
  try {
    var raw = JSON.stringify({
      transaction_type: "offer",
      postcode: form.postcode,
      housenumber: form.housenumber,
      suffix: null,
      type: form.type,
      has_return: 0,
      building_function: form.business,
      gender: form.salutation,
      firstname: form.first,
      lastname: form.last,
      birthdate: form.birthdate,
      streetname: form.streetname,
      city: form.city,
      email: form.email,
      phone: form.phone,
      contact_person: form.first,
      company_name: form.company,
      company_coc: form.companyCoc,
      company_vat: form.companyVat,
      iban: form.iban,
      iban_holder: "",
      sale_channel: "online",
      product_id: "62286",
      tarifftype: form.meterType,
      return: 0,
      return_e_high: 0,
      return_e_low: 0,
      usage_e_single: 1844,
      usage_e_high: null,
      usage_e_low: null,
      usage_g: 1024,
      tarifftype: "0",
      e_gridoperator: "",
      g_gridoperator: "",
      e_connection_type: "",
      g_connection_type: "",
      g_region: "",
      electricity_ean: "800000000000000000",
      gas_ean: "800000000000000001",
      e_connection_type: form.connectionEletric,
      g_connection_type: form.connectionGas,
      connection_postcode: form.postcode,
      connection_housenumber: form.housenumber,
      connection_suffix: null,
      connection_streetname: form.streetname,
      connection_city: form.city,
      business: form.business,
      signature: [
        {
          name: "Image",
          content: signature,
          extension: "png",
        },
      ],
      questionData: {
        ingangsdatum: form.startdatum,
        overstaptest_switchdate_option: "Zo snel als mogelijk",
        overstaptest: form.changeOrMoving,
        "betreft-het-een-verhuizing": form.betreftOrVerhuizing,
        "gewenste-overstapdatum-stroom": form.startdatum,
        "gewenste-overstapdatum-gas": form.startdatum,
        betaalwijze: "Factuur",
        "heeft-u-een-slimme-elektricteitsmeter":
          form.heeft_u_een_slimme_elektricteitsmeter,
        "heeft-u-een-slimme-gasmeter":
          form.heeft_u_een_slimme_elektricteitsmeter,
      },
      agreements: {
        "privay-statement": "1",
      },
    });

    var requestOptions = {
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      `${base_url}/sales/flow/energie-small-business/Flexflow`,
      {
        method: "POST",
        ...requestOptions,
      }
    )
      .then((response) => response.text())
      .then((result) => result)
      .catch((error) => console.log("error", error));

    document.querySelector("dialog[name=loading]").close();
    const { errors, success, data } = JSON.parse(response);

    if (!success) {
      document.querySelector("dialog[name=errors]").showModal();
      const list = document.querySelector("ul[name=list-errors]");
      console.log(errors);
      Object.keys(errors).forEach((item) => {
        const errorMessage = errors[item][0];
        const listItem = document.createElement("li");
        listItem.className = "text-xs font-normal text-red-700";
        listItem.textContent = errorMessage;
        list.appendChild(listItem);
      });
    } else {
      document.querySelector("dialog[name=success]").showModal();
    }
  } catch (error) {
    
    console.log(error);
  }
}

function getSignature() {
  var dataURL = signaturePad.toDataURL();
  return dataURL;
}
