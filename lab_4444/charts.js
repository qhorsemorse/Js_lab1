function getStorageItem(ID){
    let elementInCart = 'cart' + ID;
    let productNumbers = localStorage.getItem(elementInCart);
    productNumbers = parseInt(productNumbers);
    return productNumbers;
}


var histogramChart;
window.toggleHistogram = function() {
  if (histogramChart) {
    histogramChart.destroy();
    histogramChart = null;
  } else {
    var ctx = document.getElementById('Chart').getContext('2d');
    histogramChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [object[1].title, object[2].title, object[3].title, object[4].title, object[5].title, object[6].title],
        datasets: [{
          data: [getStorageItem(1), getStorageItem(2), getStorageItem(3), getStorageItem(4), getStorageItem(5), getStorageItem(6)],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}









var pieChart;
window.togglePieChart = function() {
  if (pieChart) {
    pieChart.destroy();
    pieChart = null;
  } else {
    var ctx = document.getElementById('Chart').getContext('2d');
    pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [object[0].title, object[1].title, object[2].title, object[3].title, object[4].title, object[5].title],
        datasets: [{
          data: [getStorageItem(1), getStorageItem(2), getStorageItem(3), getStorageItem(4), getStorageItem(5), getStorageItem(6)],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}









var lineGraph;
window.toggleLineGraph = function() {
  if (lineGraph) {
    lineGraph.destroy();
    lineGraph = null;
  } else {
    var ctx = document.getElementById('Chart').getContext('2d');
    lineGraph = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [object[0].title, object[1].title, object[2].title, object[3].title, object[4].title, object[5].title],
        datasets: [{
          data: [getStorageItem(1), getStorageItem(2), getStorageItem(3), getStorageItem(4), getStorageItem(5), getStorageItem(6)],
          borderWidth: 1,
          borderColor: 'blue',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
