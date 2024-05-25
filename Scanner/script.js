function generateQRCode() {
  // Get the text to encode from the input field
  var text = document.getElementById('text').value;

  // Clear the previous QR code
  document.getElementById('qrcode').innerHTML = '';

  // Generate the QR code
  var qrcode = new QRCode(document.getElementById('qrcode'), {
      text: text,
      width: 128,
      height: 128
  });
}
