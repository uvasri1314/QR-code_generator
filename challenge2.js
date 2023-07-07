function generateQRCode() {
    var inputText = document.getElementById('inputText').value;
  
    if (inputText !== '') {
      var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: inputText,
        width: 128,
        height: 128
      });
    }
  }
  