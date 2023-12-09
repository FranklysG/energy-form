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
    document.querySelector('span[name=message-error]').classList.remove('hidden')
  }
}

async function createEnergyOffer() {
  try {
    var raw = JSON.stringify({
      transaction_type: "offer",
      postcode: "7521WC",
      housenumber: "15",
      suffix: null,
      type: "e_g",
      has_return: 0,
      building_function: "1",
      gender: "male",
      firstname: "Test",
      lastname: "Test",
      birthdate: "01-01-1990",
      streetname: "Test",
      city: "Test",
      email: "test@salesdock.nl",
      phone: "0611XXXXX",
      contact_person: "Test",
      company_name: "Test",
      company_coc: "12345678",
      company_vat: null,
      iban: "",
      iban_holder: "",
      sale_channel: "online",
      product_id: "3465",
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
      connection_postcode: "7521WC",
      connection_housenumber: "15",
      connection_suffix: null,
      connection_streetname: "Test",
      connection_city: "Test",
      business: "1",
      questionData: {
        inhuizing: "Ja",
        "datum-inhuizing": "2020-03-01",
        ingangsdatum: "2020-03-01",
        overstaptest_switchdate_option: "Zo snel als mogelijk",
        overstaptest: "Nee",
        "file-question": [
          {
            name: "Image",
            content:
              "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
            extension: "png",
          },
        ],
      },
      agreements: {
        "privay-statement": "1",
      },
      initial_user_firstname: "John",
      initial_user_lastname: "Doe",
      initial_organisation_name: "Test Organisation",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${base_url}/sales/flow/energie-small-business/energie`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } catch (error) {
    console.log(error);
  }
}
