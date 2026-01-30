$(document).ready(function () {
  const envelope = $("#envelope");
  const btn_open = $("#open");
  const btn_reset = $("#reset");
  const typewriterElement = $("#typewriter");
  
  const message = "Dear Veronica, im writing this on the 29th of Feb i miss you so much words cant decribe it. My heart aches everytime i think of you, I love you to the moon and back and to infinity and beyond. Happy Valentines Day!";

  function typeWriter(text, i) {
    if (i < text.length) {
      typewriterElement.append(text.charAt(i));
      setTimeout(function() {
        typeWriter(text, i + 1);
      }, 50); // Speed of typing (ms)
    }
  }

  function openEnvelope() {
    envelope.addClass("open").removeClass("close");
    typewriterElement.text(""); // Reset text
    setTimeout(() => {
      typeWriter(message, 0);
    }, 1200); // Start typing after envelope is open
  }

  function closeEnvelope() {
    envelope.addClass("close").removeClass("open");
    typewriterElement.text(""); // Clear text
  }

  btn_open.on("click", openEnvelope);
  btn_reset.on("click", closeEnvelope);
  envelope.on("click", openEnvelope);
});