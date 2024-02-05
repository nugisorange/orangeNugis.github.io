// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Fungsi untuk mengambil data dari Google Cloud Function
    async function fetchData(endpoint) {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Fungsi untuk mengisi tabel dengan data
    function populateTable(tableId, data) {
        const table = document.getElementById(tableId);
        const tbody = table.getElementsByTagName("tbody")[0];

        // Bersihkan isi tabel sebelum mengisi kembali
        tbody.innerHTML = "";

        // Loop melalui data dan tambahkan baris ke tabel
        data.forEach((item, index) => {
            const row = tbody.insertRow();
            const cellNo = row.insertCell(0);
            const cellName = row.insertCell(1);
            const cellCoordinates = row.insertCell(2);
            const cellType = row.insertCell(3);

            cellNo.textContent = index + 1;
            cellName.textContent = item.name;
            cellCoordinates.textContent = item.coordinates;
            cellType.textContent = item.type;
        });
    }

    // Panggil Google Cloud Function dan isi tabel masing-masing tipe
    const endpoint = "https://asia-southeast2-project3-403614.cloudfunctions.net/gischap4";
    
    fetchData(endpoint + "?type=point")
        .then(data => populateTable("pointTable", data));

    fetchData(endpoint + "?type=polygon")
        .then(data => populateTable("polygonTable", data));

    fetchData(endpoint + "?type=polyline")
        .then(data => populateTable("polylineTable", data));
});
