window.addEventListener('scroll', function () {
    const headerHight = 40;
    const thead = document.getElementById('thead');
    const tbody = document.getElementById('tbody');
    const top = tbody.getBoundingClientRect().top;
    const bottom = tbody.getBoundingClientRect().bottom;
    if (bottom < headerHight) {
        thead.style.position = 'static';
    } else if (top < headerHight) {
        thead.style.position = 'fixed';
        thead.style.top = '0';
    } else if (top >= headerHight) {
        thead.style.position = 'static';
    }
});