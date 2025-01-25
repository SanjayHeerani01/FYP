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
        <footer className="footer"
        style="background-color: #1f2937; color: #e5e7eb; padding: 20px; text-align: center; position: relative; overflow: hidden;">
    <div className="container">
        <div className="footer-content"
             style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; align-items: center;">

            <!-- Follow Us Section -->
            <div className="follow-us" style="flex: 1; text-align: center;">
                <h4 className="footer-heading"
                    style="font-size: 1.5rem; margin-bottom: 10px; animation: fadeInUp 1s ease;">Follow Us</h4>
                <div className="social-icons" style="display: flex; gap: 15px; justify-content: center;">
                    <a href="https://facebook.com" target="_blank" className="social-icon facebook"
                       aria-label="Facebook"
                       style="font-size: 1.5rem; color: #e5e7eb; transition: color 0.3s, transform 0.3s;">
                        <i className="fab fa-facebook" style="font-size: 2rem;"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" className="social-icon instagram"
                       aria-label="Instagram"
                       style="font-size: 1.5rem; color: #e5e7eb; transition: color 0.3s, transform 0.3s;">
                        <i className="fab fa-instagram" style="font-size: 2rem;"></i>
                    </a>
                </div>
            </div>

            <!-- Quick Links Section -->
            <div className="quick-links" style="flex: 2; text-align: center;">
                <h4 className="footer-heading"
                    style="font-size: 1.5rem; margin-bottom: 10px; animation: fadeInUp 1.2s ease;">Quick Links</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; gap: 25px; justify-content: center; align-items: center; animation: slideIn 1.5s ease;">
                    <li><a href="#home"
                           style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">Home</a>
                    </li>
                    <li><a href="#about"
                           style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">About
                        Us</a></li>
                    <li><a href="#news"
                           style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">News</a>
                    </li>
                    <li><a href="#contact"
                           style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">Contact</a>
                    </li>
                </ul>
            </div>

            <!-- Contact Section -->
            <div className="contact-section" style="flex: 1; text-align: center;">
                <h4 className="footer-heading"
                    style="font-size: 1.5rem; margin-bottom: 10px; animation: fadeInUp 1.3s ease;">Contact Us</h4>
                <p style="font-size: 1.1rem; margin: 0; animation: fadeInUp 1.4s ease;">Email: <a
                    href="mailto:info@volunteer.com"
                    style="color: #ffbf00; text-decoration: none;">info@volunteer.com</a></p>
                <p style="font-size: 1.1rem; margin: 0; animation: fadeInUp 1.5s ease;">Phone: <a href="tel:+1234567890"
                                                                                                  style="color: #ffbf00; text-decoration: none;">+1
                    234 567 890</a></p>
            </div>
        </div>

        <!-- Animated Divider -->
        <div className="divider" style="height: 1px; background-color: #e5e7eb; margin: 15px auto; width: 80%;"></div>

        <!-- Footer Bottom -->
        <div className="footer-bottom" style="font-size: 0.85rem; animation: fadeInUp 1.6s ease;">
            <p>&copy; 2025 Volunteer. All Rights Reserved. Built with ❤ for our communities.</p>
        </div>
    </div>

    <!-- Animated Background Effects -->
    <div className="footer-bg-animations"
         style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden;">
        <div className="circle"
             style="width: 150px; height: 150px; background: #ffbf00; border-radius: 50%; position: absolute; top: 30%; left: 10%; opacity: 0.2; animation: moveCircle 6s linear infinite;"></div>
        <div className="circle"
             style="width: 200px; height: 200px; background: #e5e7eb; border-radius: 50%; position: absolute; top: 50%; left: 70%; opacity: 0.2; animation: moveCircle 8s linear infinite;"></div>
    </div>

    <!-- Keyframes and Styles for Animations -->
    <style>
        /* Social Media Hover */
        .social-icon:hover {
        color: #ffbf00;
        transform: scale(1.3);
    }

        /* Link Hover */
        a:hover {
        color: #ffbf00;
    }

        ul li a:hover {
        text - decoration: underline;
    }

        /* Keyframes */
        @keyframes fadeInUp {
        from {
        opacity: 0;
        transform: translateY(20px);
    }
        to {
        opacity: 1;
        transform: translateY(0);
    }
    }

        @keyframes slideIn {
        from {
        opacity: 0;
        transform: translateX(-50px);
    }
        to {
        opacity: 1;
        transform: translateX(0);
    }
    }

        @keyframes moveCircle {
        0 % {
            transform: translateY(0) translateX(0);
    }
        50% {
        transform: translateY(-20px) translateX(20px);
    }
        100% {
        transform: translateY(0) translateX(0);
    }
    }
    </style>

    <!-- Include Font Awesome -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
            crossOrigin="anonymous"></script>
</footer>`
    }
}
customElements.define('my-header', MyHeader);
customElements.define('my-footer',MyFooter);