var ctxBar = document.getElementById("bar").getContext("2d");

var myBar = new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["BTT", "HLL", "CBL", "ATT"],
    datasets: [
      {
        label: "Jumlah Operator",
        data: [140, 200, 95, 120],
        backgroundColor: ["#16A34A", "#22C55E", "#84CC16", "#15803D"],
        borderRadius: 15,
        barThickness: 80, // ⬅ gedein ini
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        display: false, // ❌ hilangin angka kiri
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
  plugins: [
    {
      id: "valueOnTop",
      afterDatasetsDraw(chart) {
        const { ctx } = chart;
        chart.data.datasets.forEach((dataset, i) => {
          const meta = chart.getDatasetMeta(i);
          meta.data.forEach((bar, index) => {
            const data = dataset.data[index];
            ctx.fillStyle = "#111";
            ctx.font = "bold 14px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(data, bar.x, bar.y - 8);
          });
        });
      },
    },
  ],
});
