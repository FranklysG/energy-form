const base_url = 'https://app.salesdock.nl/api/hosted-energy/v1';
const token = 'MXibGmyJlNNaCFxJVirLbQLvji8MngOuNiYHVOM9Qhe1FRS6yjfY6navgNcR'

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`${base_url}/user/products/428/energy?postcode=7521WC&housenumber=15&type=e_g&tarifftype=1&usage_e_high=300&usage_e_low=200&usage_g=500&has_return=1&return_e_high=100&return_e_low=50&low_tariff_time=t3&building_function=1&e_connection_type=E_3X35A&g_connection_type=G_G6_500_4000`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));