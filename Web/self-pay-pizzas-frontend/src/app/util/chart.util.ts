export class ChartUtil {

  carregarFeather(){
    const feather = (window as any).feather;
    if (feather) {
      feather.replace({ 'aria-hidden': 'true' });
    }
  }

  carregarChart(){
    const Chart = (window as any).Chart;

    const ctx = document.getElementById('myChart') as HTMLCanvasElement | null;
    if (ctx && Chart) {
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
          ],
          datasets: [{
            data: [
              15339,
              21345,
              18483,
              24003,
              23489,
              24092,
              12034
            ],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: false
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }
}
