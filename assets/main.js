// testimoni
var splide = new Splide(".splide", {
  type: "loop",
  perPage: 2,
  perMove: 1,
  breakpoints: {
    766: {
      perPage: 1,
    },
  },
});

splide.mount();

// copy text
let text = document.getElementById("rekBri").innerHTML;
let text1 = document.getElementById("noDana").innerHTML;
const copyBri = async () => {
  try {
    await navigator.clipboard.writeText(text);
    Swal.fire("", "No. Rekening berhasil di copy", "success");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
const copyDana = async () => {
  try {
    await navigator.clipboard.writeText(text1);
    Swal.fire("", "No. Telepon berhasil di copy", "success");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
