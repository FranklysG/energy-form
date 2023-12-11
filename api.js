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

        const purchase_surcharge_tariff_inc_vat = document.querySelector(
          "label[name=purchase_surcharge_tariff_inc_vat]"
        );
        purchase_surcharge_tariff_inc_vat.innerHTML =
          custom.purchase_surcharge_tariff_inc_vat;

        const dynamic_average_tariff_inc_vat = document.querySelector(
          "label[name=dynamic_average_tariff_inc_vat]"
        );
        dynamic_average_tariff_inc_vat.innerHTML =
          custom.dynamic_average_tariff_inc_vat;

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
      usage_e_single: form.peakRateEletric,
      usage_e_high: null,
      usage_e_low: null,
      usage_g: form.peakRateGas,
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

async function getEstimateConsumer(element) {
  try {
    let helpCosumer = getMyConsumption();
    if (!Boolean(parseInt(helpCosumer)))
      return

    var requestOptions = {
      headers: myHeaders,
      redirect: "follow",
    };

    let isBusiness = getIsBusiness();
    let building_type = getBuildType();
    let household_size = getHouseHoldSize();

    let url = `${base_url}/user/energy/estimation?building_type=${building_type}`;
    let response = {};

    if (Boolean(parseInt(isBusiness))) {
      document.querySelector("dialog[name=loading]").showModal();
      url += `&business=${isBusiness}`;
      response = await fetch(url, {
        method: "GET",
        ...requestOptions,
      })
        .then((response) => response.text())
        .then((result) => result)
        .catch((error) => console.log("error", error));
    } else {
      url += `&household_size=${household_size}`;

      if (household_size !== undefined) {
        document.querySelector("dialog[name=loading]").showModal();
        response = await fetch(url, {
          method: "GET",
          ...requestOptions,
        })
          .then((response) => response.text())
          .then((result) => result)
          .catch((error) => console.log("error", error));
      }
    }

    const { errors, success, data } = JSON.parse(response);
    document.querySelector("dialog[name=loading]").close();

    if (!success) {
      document.querySelector("dialog[name=errors]").showModal();
      const list = document.querySelector("ul[name=list-errors]");

      Object.keys(errors).forEach((item) => {
        const errorMessage = errors[item][0];
        const listItem = document.createElement("li");
        listItem.className = "text-xs font-normal text-red-700";
        listItem.textContent = errorMessage;
        list.appendChild(listItem);
      });

      return;
    } else {
      const peakRateEletric = document.querySelector(
        "input[name=peak-rate-eletric]"
      );
      const peakRateGas = document.querySelector("input[name=peak-rate-gas]");
      const household_size = document.querySelector(
        "input[name=household_size]"
      );

      switch (household_size.value) {
        case "8":
          peakRateEletric.value = data.e_low;
          break;
        case "9":
          peakRateEletric.value = data.e_high;
          break;
        default:
          peakRateEletric.value = data.e_single;
          break;
      }

      if (peakRateGas) {
        peakRateGas.value = data.gas;
      }

      putPeakRateCustomer(peakRateEletric);
      putPeakRateCustomer(peakRateGas);
    }
  } catch (error) {
    console.log(error);
  }
}

async function getProductWithCauculation() {
  const product_id = getProductId();
  const business = getIsBusiness();
  const product_type = getProductType();
  const my_consumption = getMyConsumption();
  const { meterType, peakRateEletric, connectionEletric } = getMeterType();
  const { peakRateGas, connectionGas } = getGasType();

  const params = {
    postcode: "7521WC",
    housenumber: 15,
    type: "e_g",
    tarifftype: meterType,
    usage_e_single: peakRateEletric,
    usage_g: peakRateGas,
    has_return: 0,
    building_function: business,
    e_connection_type: connectionEletric,
    g_connection_type: connectionGas,
  };

  const url = new URL(`${base_url}/user/products/${product_id}/energy`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  const response = await fetch(url, {
    method: "GET",
    ...requestOptions,
  })
    .then((response) => response.text())
    .then((result) => result)
    .catch((error) => console.log("error", error));

    const { errors, success, data } = JSON.parse(response);
    const costs_eletric = data.cost_specifications.electricity;
    const costs_gas = data.cost_specifications.gas;
 
    // Init eletric calc
    if(product_type === 'e' || product_type === 'e_g'){
      document.querySelector('label[name=eletric_dynamic_average_tariff_inc_vat]').innerHTML = costs_eletric.tariff.dynamic_average_tariff_inc_vat
      document.querySelector('label[name=eletric_purchase_surcharge_tariff_inc_vat]').innerHTML = costs_eletric.tariff.purchase_surcharge_tariff_inc_vat
      document.querySelector('label[name=eletric_purchase_surcharge_tariff_inc_vat]').innerHTML = costs_eletric.tariff.purchase_surcharge_tariff_inc_vat
      document.querySelectorAll('label[name=eletric_usage_single]').forEach((element) => {
        element.innerHTML = costs_eletric.usage_single
      })
      document.querySelector('td[name=eletric_expected_dynamic_purchase_cost_inc_vat]').innerHTML = `€ ${costs_eletric.expected_dynamic_purchase_cost_inc_vat}`
      document.querySelector('td[name=eletric_purchase_surcharge_cost_inc_vat]').innerHTML = `€ ${costs_eletric.purchase_surcharge_cost_inc_vat}`
      document.querySelector('td[name=eletric_government_tax_per_year_inc_vat]').innerHTML = `€ ${costs_eletric.government_tax_per_year_inc_vat}`

      const [eletric_tariff_range, eletric_tariff_rate] = Object.entries(costs_eletric.tariff_energytax_exc_vat)[0];
      const tariff_eletric_formatter = `${eletric_tariff_range} X € ${eletric_tariff_rate.replace(',', '.')}`;
      document.querySelector('td[name=eletric_tariff_energytax_exc_vat]').innerHTML = tariff_eletric_formatter;

      const [eletric_total_range, eletric_total_rate] = Object.entries(costs_eletric.total_energytax_exc_vat)[0];
      const total_eletric_formatter = `€ ${eletric_total_rate.replace(',', '.')}`;
      document.querySelector('td[name=eletric_total_energytax_exc_vat]').innerHTML = total_eletric_formatter;
      document.querySelector('td[name=eletric_fixed_delivery_cost_inc_vat]').innerHTML = `€ ${costs_eletric.fixed_delivery_cost_inc_vat}`;
      document.querySelector('td[name=eletric_tax_reduction_inc_vat]').innerHTML = `€ ${costs_eletric.tax_reduction_inc_vat}`;
      document.querySelector('label[name=eletric_grid_operator_name]').innerHTML = costs_eletric.grid_operator_name;
      document.querySelector('td[name=eletric_tariff_grid_operator_year_inc_vat]').innerHTML = `€ ${costs_eletric.tariff_grid_operator_year_inc_vat}`;
      document.querySelectorAll('td[name=eletric_total]').forEach(element => {
        element.innerHTML = `€ ${costs_eletric.total}`;
      });
      document.querySelectorAll('label[name=eletric_total]').forEach(element => {
        element.innerHTML = `€ ${costs_eletric.total}`;
      });
    } else {
      document.querySelector('label[name=eletric_dynamic_average_tariff_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('label[name=eletric_purchase_surcharge_tariff_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('label[name=eletric_purchase_surcharge_tariff_inc_vat]').innerHTML = '€ 0.00';
      document.querySelectorAll('label[name=eletric_usage_single]').forEach((element) => {
        element.innerHTML = '€ 0.00';
      })
      document.querySelector('td[name=eletric_expected_dynamic_purchase_cost_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=eletric_purchase_surcharge_cost_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=eletric_government_tax_per_year_inc_vat]').innerHTML = '€ 0.00';

      const [eletric_tariff_range, eletric_tariff_rate] = Object.entries(costs_eletric.tariff_energytax_exc_vat)[0];
      const tariff_eletric_formatter = `${eletric_tariff_range} X € ${eletric_tariff_rate.replace(',', '.')}`;
      document.querySelector('td[name=eletric_tariff_energytax_exc_vat]').innerHTML = '€ 0.00';

      const [eletric_total_range, eletric_total_rate] = Object.entries(costs_eletric.total_energytax_exc_vat)[0];
      const total_eletric_formatter = `€ ${eletric_total_rate.replace(',', '.')}`;
      document.querySelector('td[name=eletric_total_energytax_exc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=eletric_fixed_delivery_cost_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=eletric_tax_reduction_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('label[name=eletric_grid_operator_name]').innerHTML = '€ 0.00';
      document.querySelector('td[name=eletric_tariff_grid_operator_year_inc_vat]').innerHTML = '€ 0.00';
      document.querySelectorAll('td[name=eletric_total]').forEach(element => {
        element.innerHTML = '€ 0.00';
      });
      document.querySelectorAll('label[name=eletric_total]').forEach(element => {
        element.innerHTML = '€ 0.00';
      });
    }

    // init gas calc
    if(product_type === 'g' || product_type === 'e_g'){
      document.querySelector('label[name=gas_dynamic_average_tariff_inc_vat]').innerHTML = costs_gas.tariff.dynamic_average_tariff_inc_vat
      document.querySelector('label[name=gas_purchase_surcharge_tariff_inc_vat]').innerHTML = costs_gas.tariff.purchase_surcharge_tariff_inc_vat
      document.querySelector('label[name=gas_purchase_surcharge_tariff_inc_vat]').innerHTML = costs_gas.tariff.purchase_surcharge_tariff_inc_vat
      document.querySelectorAll('label[name=gas_usage_single]').forEach((element) => {
        element.innerHTML = costs_gas.usage
      })
      document.querySelector('td[name=gas_expected_dynamic_purchase_cost_inc_vat]').innerHTML = `€ ${costs_gas.expected_dynamic_purchase_cost_inc_vat}`
      document.querySelector('td[name=gas_purchase_surcharge_cost_inc_vat]').innerHTML = `€ ${costs_gas.purchase_surcharge_cost_inc_vat}`
      document.querySelector('td[name=gas_government_tax_per_year_inc_vat]').innerHTML = `€ ${costs_gas.government_tax_per_year_inc_vat}`

      const [gas_tariff_range, gas_tariff_rate] = Object.entries(costs_gas.tariff_energytax_exc_vat)[0];
      const tariff_gas_formatter = `${gas_tariff_range} X € ${gas_tariff_rate.replace(',', '.')}`;
      document.querySelector('td[name=gas_tariff_energytax_exc_vat]').innerHTML = tariff_gas_formatter;

      const [gas_total_range, gas_total_rate] = Object.entries(costs_gas.total_energytax_exc_vat)[0];
      const total_gas_formatter = `€ ${gas_total_rate.replace(',', '.')}`;
      document.querySelector('td[name=gas_total_energytax_exc_vat]').innerHTML = total_gas_formatter;
      document.querySelector('td[name=gas_fixed_delivery_cost_inc_vat]').innerHTML = `€ ${costs_gas.fixed_delivery_cost_inc_vat}`;
      document.querySelector('label[name=gas_grid_operator_name]').innerHTML = `€ ${costs_gas.grid_operator_name}`
      document.querySelector('td[name=gas_tariff_grid_operator_year_inc_vat]').innerHTML = `€ ${costs_gas.tariff_grid_operator_year_inc_vat}`;
      document.querySelectorAll('td[name=gas_total]').forEach(element => {
        element.innerHTML = `€ ${costs_gas.total}`;
      });
      document.querySelectorAll('label[name=gas_total]').forEach(element => {
        element.innerHTML = `€ ${costs_gas.total}`;
      });
    } else {
      document.querySelector('label[name=gas_dynamic_average_tariff_inc_vat]').innerHTML = '€ 0.00'
      document.querySelector('label[name=gas_purchase_surcharge_tariff_inc_vat]').innerHTML = '€ 0.00'
      document.querySelector('label[name=gas_purchase_surcharge_tariff_inc_vat]').innerHTML = '€ 0.00'
      document.querySelectorAll('label[name=gas_usage_single]').forEach((element) => {
        element.innerHTML = '€ 0.00'
      })
      document.querySelector('td[name=gas_expected_dynamic_purchase_cost_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=gas_purchase_surcharge_cost_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=gas_government_tax_per_year_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=gas_tariff_energytax_exc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=gas_total_energytax_exc_vat]').innerHTML = '€ 0.00';
      document.querySelector('td[name=gas_fixed_delivery_cost_inc_vat]').innerHTML = '€ 0.00';
      document.querySelector('label[name=gas_grid_operator_name]').innerHTML = '€ 0.00'
      document.querySelector('td[name=gas_tariff_grid_operator_year_inc_vat]').innerHTML = '€ 0.00';
      document.querySelectorAll('td[name=gas_total]').forEach(element => {
        element.innerHTML = '€ 0.00';
      });
      document.querySelectorAll('label[name=gas_total]').forEach(element => {
        element.innerHTML = '€ 0.00';
      });
    }

    // init cost toal
    const gas_total = document.querySelector('td[name=gas_total]').textContent;
    const eletric_total = document.querySelector('td[name=eletric_total]').textContent;
    
    const gas = parseFloat(gas_total.replace(/[^\d,]/g, '').replace(',', '.'));
    const eletric = parseFloat(eletric_total.replace(/[^\d,]/g, '').replace(',', '.'));

    const total_year = gas + eletric;

    const total_month = total_year / 12;

    document.querySelectorAll('td[name=gas_eletric_total]').forEach(element => {
      element.innerHTML = total_year.toLocaleString('pt-BR', {style: 'currency',currency: 'EUR'});;
    });
    
    document.querySelectorAll('label[name=gas_eletric_total]').forEach(element => {
      element.innerHTML = total_year.toLocaleString('pt-BR', {style: 'currency',currency: 'EUR'});;
    });

    document.querySelector('label[name=total_per_month]').innerHTML = total_month.toLocaleString('pt-BR', {style: 'currency',currency: 'EUR'});
    
    const total_btw_percent = 17.35;
    const value_btw = total_year * (total_btw_percent / 100);
    document.querySelector('label[name=total_btw]').innerHTML = value_btw.toLocaleString('pt-BR', {style: 'currency',currency: 'EUR'})
    document.querySelector('td[name=total_btw]').innerHTML = value_btw.toLocaleString('pt-BR', {style: 'currency',currency: 'EUR'})
}
