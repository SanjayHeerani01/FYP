class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <div class="logo">
                    <h1>Volunteer</h1>
                    <p>Charity & Fundraising</p>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="news.html">News</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;

        // Add active class based on the current page
        const currentPage = window.location.pathname.split('/').pop(); // Get the current file name
        const links = this.querySelectorAll('.nav a');

        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

customElements.define('my-header', MyHeader);


class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <!-- Footer Section -->
    <footer class="footer">
        <div class="footer-section about">
            <h3>About Us</h3>
            <p>Volunteering is an important and honorable way to help others. It can be a great way to make a difference in the world.</p>
        </div>
        <div class="footer-section recent-posts">
            <h3>Recent Posts</h3>
            <ul>
                <li><a href="#">Getting Helpless Childs Education</a> - July 5, 2023 / 0 Comments</li>
                <li><a href="#">Inspiring Volunteers</a> - July 5, 2023 / 0 Comments</li>
            </ul>
        </div>
        <div class="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Our Gallery</a></li>
                <li><a href="#">Our Testimonial</a></li>
                <li><a href="#">Our Causes</a></li>
                <li><a href="#">Our Features</a></li>
                <li><a href="#">Our Services</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div class="footer-section popular-tags">
            <h3>Popular Tags</h3>
            <div class="tags">
                <a href="#">awesome</a>
                <a href="#">charity</a>
                <a href="#">children</a>
                <a href="#">css</a>
                <a href="#">development</a>
                <a href="#">donations</a>
                <a href="#">foundation</a>
                <a href="#">help</a>
                <a href="#">housing</a>
                <a href="#">html</a>
                <a href="#">money</a>
                <a href="#">organisations</a>
                <a href="#">photography</a>
                <a href="#">php</a>
                <a href="#">spendings</a>
                <a href="#">strategy</a>
            </div>
        </div>
    </footer>`;
    }
}

customElements.define('my-footer', MyFooter);




class Slidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <div class="instagram-slider-wrap" data-aos="fade-up" data-aos-delay="200">
        <div class="instagram-slider" id="instagram-slider">

            <div class="item">
                <a class="instagram-item">
                    <span class="icon-instagram"></span>
                    <img src="images/vol9.jpg" alt="Image" class="img-fluid">
                </a>
            </div>

            <div class="item">
                <a class="instagram-item">
                    <span class="icon-instagram"></span>
                    <img src="images/vol2.jpg" alt="Image" class="img-fluid">
                </a>
            </div>

            <div class="item">
                <a class="instagram-item">
                    <span class="icon-instagram"></span>
                    <img src="images/vol10.jpg" alt="Image" class="img-fluid">
                </a>
            </div>

            <div class="item">
                <a class="instagram-item">
                    <span class="icon-instagram"></span>
                    <img src="images/vol4.jpg" alt="Image" class="img-fluid">
                </a>
            </div>

            <div class="item">
                <a class="instagram-item">
                    <span class="icon-instagram"></span>
                    <img src="images/vol5.jpg" alt="Image" class="img-fluid">
                </a>
            </div>

            <div class="item">
                <a class="instagram-item">
                    <span class="icon-instagram"></span>
                    <img src="images/vol6.jpg" alt="Image" class="img-fluid">
                </a>
            </div>

            <div class="item">
                <a class="instagram-item">
                    <span class="icon-instagram"></span>
                    <img src="images/vol12.jpg" alt="Image" class="img-fluid">
                </a>
            </div>


        </div>
    </div>

</div>

`}
}

customElements.define('my-slidebar', Slidebar);

document.addEventListener("DOMContentLoaded", function () {
    var slider = tns({
        container: "#instagram-slider",
        items: 5,
        slideBy: "page",
        autoplay: true,
        controls: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            900: {
                items: 5
            }
        }
    });
});


