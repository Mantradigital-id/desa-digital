const API_URL = "https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLhYj_mYATJ1qRHfVz6tfPwxd8-X_NyzDNiMc70Pvp2pXcb-iV0WRK2Df3GLgGIz4L2qYAFZzU9EQR5MeR5BTNLmZRSNFWhuNf9cQlpYZP-ODFBnR8S46vUeaffg4XLxPUW-dIz-5JDdCvJQ6Bj5tnVZcUXOXmH0Pc8jxPbsEQqNhKcP-IimDrgUefrNIc8jQ0uuBRJMQ_vWW5mJAuQ7IGXwaN9eNmKWjquXdOWEQNDyeVR1B1W1zoCI6nQw85Tx5wbwDW5EErMsf8n3zeAfikh2yAyR6KD_Xkcr7bA6&lib=MJH-IopCGGCVoPHvi50ivQqnZad3rGu9f";

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
