// Navigation functions for OMEGA application

// Show splash screen on load and auto-transition to dashboard
window.addEventListener('DOMContentLoaded', function() {
    // Show splash screen
    document.getElementById('splashScreen').style.display = 'flex';
    document.getElementById('dashboardScreen').style.display = 'none';
    document.getElementById('quotationScreen').style.display = 'none';
    
    // Simulate loading and transition to dashboard after 3 seconds
    setTimeout(function() {
        showDashboard();
    }, 3000);
});

// Show dashboard screen
function showDashboard() {
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('dashboardScreen').style.display = 'block';
    document.getElementById('quotationScreen').style.display = 'none';
}

// Show quotation tool screen
function showQuotationTool() {
    document.getElementById('splashScreen').style.display = 'none';
    document.getElementById('dashboardScreen').style.display = 'none';
    document.getElementById('quotationScreen').style.display = 'block';
}

// Show splash screen (if needed for refresh/reload)
function showSplash() {
    document.getElementById('splashScreen').style.display = 'flex';
    document.getElementById('dashboardScreen').style.display = 'none';
    document.getElementById('quotationScreen').style.display = 'none';
}
