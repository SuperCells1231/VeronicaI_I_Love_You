$(document).ready(function () {
  const envelope = $("#envelope");
  const btn_open = $("#open");
  const btn_reset = $("#reset");
  const typewriterElement = $("#typewriter");
  
  const message = "I love you so much words cant decribe it. I love you to the moon and back and to infinity and beyond. Happy Valentines Day!";

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    
    // Instead of typing letter by letter, we set the full text immediately
    // The delay (1200ms) ensures the text appears after the envelope flap opens
    setTimeout(() => {
      typewriterElement.text(message); 
    }, 800); 
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
    typewriterElement.text(""); // Clear text when closed
  }

  btn_open.on("click", openEnvelope);
  btn_reset.on("click", closeEnvelope);
  envelope.on("click", openEnvelope);
});