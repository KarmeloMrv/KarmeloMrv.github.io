function showDetails(jobId) {
    var details = document.getElementById(jobId + '-details');
    if (details.style.display === 'none') {
      details.style.display = 'block';
    } else {
      details.style.display = 'none';
    }
  }