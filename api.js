const domain = "hosted-energy";
const scope = "user";
const version = "v1";
const base_url = `https://app.salesdock.nl/api/${domain}/${version}/${scope}`;
const token = "MXibGmyJlNNaCFxJVirLbQLvji8MngOuNiYHVOM9Qhe1FRS6yjfY6navgNcR";

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", `Bearer ${token}`);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

// get the user
fetch(`${base_url}`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

// get all forms
fetch(`${base_url}/forms`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

// get a expecific form
fetch(`${base_url}/forms/916/elements`, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
