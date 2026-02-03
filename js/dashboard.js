const API_URL = "PASTE_LINK_BACKEND_KAMU_DI_SINI";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {

    document.getElementById("total").innerText = data.totalPenduduk;
    document.getElementById("totalL").innerText = data.jenisKelamin.L || 0;
    document.getElementById("totalP").innerText = data.jenisKelamin.P || 0;

    new Chart(jkChart, {
      type: "pie",
      data: {
        labels: ["Laki-laki", "Perempuan"],
        datasets: [{
          data: [
            data.jenisKelamin.L || 0,
            data.jenisKelamin.P || 0
          ]
        }]
      }
    });

    new Chart(dusunChart, {
      type: "bar",
      data: {
        labels: Object.keys(data.dusun),
        datasets: [{
          label: "Jumlah Penduduk",
          data: Object.values(data.dusun)
        }]
      }
    });

    new Chart(statusChart, {
      type: "doughnut",
      data: {
        labels: Object.keys(data.status),
        datasets: [{
          data: Object.values(data.status)
        }]
      }
    });

  });
