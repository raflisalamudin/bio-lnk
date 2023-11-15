document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".type", {
    strings: ["Frontend Developer"],
    speed: 250,
    loop: true,
  })
    .pause(1000)
    .delete(18)
    .type("Network Administrator")
    .pause(1000)
    .delete(21)
    .type("Content Creator")
    .pause(1000)
    .go();
});
