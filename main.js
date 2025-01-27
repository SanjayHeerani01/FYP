class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <nav class="site-nav">
    <div class="container">
\t\t\t<div class="menu-bg-wrap">
\t\t\t\t<div class="site-navigation">
\t\t\t\t\t<div class="row g-0 align-items-center">
\t\t\t\t\t\t<div class="col-2">
\t\t\t\t\t\t\t<a href="index.html" class="logo m-0 float-start text-white">Volunteer</a>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="col-8 text-center">
\t\t\t\t\t\t\t<ul class="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
\t\t\t\t\t\t\t\t<li class="active"><a href="index.html">Home</a></li>
\t\t\t\t\t\t\t\t<li><a href="about.html">About</a></li>
\t\t\t\t\t\t\t\t<li><a href="news.html">News</a></li>
\t\t\t\t\t\t\t\t<li><a href="contact.html">Contact</a></li>
\t\t\t\t\t\t\t</ul>
\t\t\t\t\t\t</div>
\t\t\t\t\t\t<div class="col-2 text-end">
\t\t\t\t\t\t\t<a href="#" class="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light">
\t\t\t\t\t\t\t\t<span></span>
\t\t\t\t\t\t\t</a>

\t\t\t\t\t\t\t<a href="#" class="call-us d-flex align-items-center">
\t\t\t\t\t\t\t\t<span class="icon-phone"></span>
\t\t\t\t\t\t\t\t<span>0332-2067460</span>
\t\t\t\t\t\t\t</a>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>

\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</nav>        
        `
    }
}
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       <footer>
			<div class="footer-left">
				<h3>Follow Us</h3>
				<div class="social-icons">
					<a href="#" aria-label="Facebook"><img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook"></a>
					<a href="#" aria-label="Instagram"><img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram"></a>
					<a href="#" aria-label="LinkedIn"><img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn"></a>
					<a href="#" aria-label="YouTube"><img src="https://img.icons8.com/color/48/youtube-play.png" alt="YouTube"></a>
				</div>
			</div>
			<div class="footer-links">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">News</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
			<div class="footer-contact">
				<p>Email: samooalina339@gmail.com</p>
				<p>Contact: +92 3322067460</p>
			</div>
		</footer>
       `
customElements.define('my-header', MyHeader);
customElements.define('my-footer',MyFooter);
