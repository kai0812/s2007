document.addEventListener('DOMContentLoaded', function () {
    const headerHTML = `
        <header>
            <div class="nav-container">
                <nav>
                    <a href="index.html">HOME</a>
                    <a href="clothesmenu.html">CLOTHES</a>
                    <a href="lookbookmenu.html">LOOKBOOKS</a>
                    <a href="aboutus.html">ABOUT US</a>
                </nav>
                <img src="images/logo.png" alt="Logo" class="logo">
                <nav>
                    <a href="https://www.instagram.com/">INSTAGRAM</a>
                    <a href="https://t.me/">TELEGRAM</a>
                    <a href="https://www.youtube.com/">YOUTUBE</a>
                </nav>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});