function download(dataURL, filename) {
  if (
    navigator.userAgent.indexOf("Safari") > -1 &&
    navigator.userAgent.indexOf("Chrome") === -1
  ) {
    window.open(dataURL);
  } else {
    var blob = dataURLToBlob(dataURL);
    var url = window.URL.createObjectURL(blob);

    var a = document.createElement("a");
    a.style = "display: none";
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
  }
}

function dataURLToBlob(dataURL) {
  var parts = dataURL.split(";base64,");
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

var signaturePad = new SignaturePad(document.getElementById("signature-pad"), {
  backgroundColor: "rgba(255, 255, 255, 0)",
  penColor: "rgb(0, 0, 0)",
});

var saveButton = document.getElementById("save");
var cancelButton = document.getElementById("clear");

saveButton.addEventListener("click", function (event) {
  if (signaturePad.isEmpty()) {
    alert("Faça sua assinatura.");
  } else {
    // var dataURL = signaturePad.toDataURL();
    // download(dataURL, "signature.png");
    //alert(dataURL);
    // $("#imageCheck").val(dataURL);
  }
});

cancelButton.addEventListener("click", function (event) {
  signaturePad.clear();
});
