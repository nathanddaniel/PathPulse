document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.topnav a[data-page]');
    const pages = document.querySelectorAll('.page');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');

            pages.forEach(page => {
                if (page.id === targetPage) {
                    page.classList.add('active');
                    page.classList.remove('hidden');
                } else {
                    page.classList.remove('active');
                    page.classList.add('hidden');
                }
            });

            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const defaultTab = document.querySelector('.topnav a[data-page="dashboard"]');
    defaultTab?.click(); 
});
