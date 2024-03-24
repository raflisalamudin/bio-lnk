// Ambil data produk dari file JSON
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    let produkHTML = "";
    // Loop melalui setiap produk dan tambahkan ke dalam HTML
    data.produk.forEach((produk) => {
      produkHTML += renderProdukCard(produk);
    });
    document.getElementById("daftar-produk").innerHTML = produkHTML;

    // Fungsi untuk merender card produk
    function renderProdukCard(produk) {
      return `
        <div class="col">
          <div class="p-0">
            <div class="card">
              <a href="${produk.link}" class="text-decoration-none text-dark">
                <img src="${produk.gambar}" class="card-img-top" alt="${produk.nama}">
                <div class="p-2">
                  <p class="card-title fw-medium">${produk.nama}</p>
                  <p class="card-text text-end font-small">${produk.terjual} <br> ${produk.kota}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      `;
    }

    // Live search
    document.getElementById("searchInput").addEventListener("input", function (event) {
      const searchQuery = event.target.value.toLowerCase();
      let filteredProdukHTML = "";
      data.produk.forEach((produk) => {
        const produkNamaLower = produk.nama.toLowerCase();
        if (produkNamaLower.includes(searchQuery)) {
          filteredProdukHTML += renderProdukCard(produk);
        }
      });
      document.getElementById("daftar-produk").innerHTML = filteredProdukHTML;
    });
  })
  .catch((error) => console.error("Error:", error));
