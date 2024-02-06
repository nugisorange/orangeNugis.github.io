import {setInner} from "https://cdn.jsdelivr.net/gh/jscroot/element@0.1.2/croot.js";

// export function main(){
//     setInner("Sankuy","Halo Ngadimin");
//     addGeoJSONToMapAndTable('', map, document.querySelector('table'));
// }

document.addEventListener("DOMContentLoaded", () => {
    const pointTable = document.getElementById("pointTable").getElementsByTagName('tbody')[0];
    const polygonTable = document.getElementById("polygonTable").getElementsByTagName('tbody')[0];
    const polylineTable = document.getElementById("polylineTable").getElementsByTagName('tbody')[0];

    // Replace the URL with your Google Cloud Function endpoint
    const cloudFunctionEndpoint = "https://asia-southeast2-project3-403614.cloudfunctions.net/gischap4"; 

    fetch(cloudFunctionEndpoint)
        .then(response => response.json())
        .then(data => {
            let countPoint = 1;
            let countPolygon = 1;
            let countPolyline = 1;

            data.features.forEach(feature => {
                const row = document.createElement("tr");
                const namaCell = document.createElement("td");
                const kordinattesCell = document.createElement("td");
                const tipeCell = document.createElement("td");

                namaCell.innerText = feature.properties.nama;
                kordinattesCell.innerText = JSON.stringify(feature.geometry.coordinates);
                tipeCell.innerText = feature.geometry.type;

                row.appendChild(document.createElement("th"));
                row.appendChild(namaCell);
                row.appendChild(kordinattesCell);
                row.appendChild(tipeCell);

                if (feature.geometry.type === "Point") {
                    row.getElementsByTagName("th")[0].innerText = countPoint;
                    pointTable.appendChild(row);
                    countPoint++;
                } else if (feature.geometry.type === "Polygon") {
                    row.getElementsByTagName("th")[0].innerText = countPolygon;
                    polygonTable.appendChild(row);
                    countPolygon++;
                } else if (feature.geometry.type === "LineString") {
                    row.getElementsByTagName("th")[0].innerText = countPolyline;
                    polylineTable.appendChild(row);
                    countPolyline++;
                }
            });
        })
        .catch(error => console.error("Err:", error));
});
