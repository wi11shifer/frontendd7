function validateForm() {
    var selectedApp = document.getElementById('appSelect').value;
    if (!selectedApp) {
      alert('Будь ласка, оберіть застосунок.');
      return false;
    }
    return true;
  }