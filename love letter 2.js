$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  // Click on the envelope to open
  envelope.click(function () {
    openEnvelope();
  });

  // Click on the 'Open' button
  btn_open.click(function () {
    openEnvelope();
  });

  // Click on the 'Close' button
  btn_reset.click(function () {
    closeEnvelope();
  });

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
  }
});