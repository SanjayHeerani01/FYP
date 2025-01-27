class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<header style="display: flex; justify-content: space-between; align-items: center; background-color: #1a1a1a; padding: 20px; color: white;">
<div class="logo" style="margin: 0;">
<h1 style="margin: 0; font-size: 24px;">Volunteer</h1>
<p style="margin: 0; font-size: 14px; color: #f05454;">Charity & Fundraising</p>
</div>
<nav class="nav" style="margin: 0; padding: 0;">
<ul style="list-style: none; display: flex; gap: 20px; margin: 0; padding: 0;">
<li><a href="#" style="text-decoration: none; color: white; font-size: 16px;" class="active">Home</a></li>
<li><a href="news.html" style="text-decoration: none; color: white; font-size: 16px;">Pages</a></li>
<li><a href="about.html" style="text-decoration: none; color: white; font-size: 16px;">Causes</a></li>
<li><a href="contact.html" style="text-decoration: none; color: white; font-size: 16px;">Event</a></li>
<li><a href="causes.html" style="text-decoration: none; color: white; font-size: 16px;">Blog</a></li>

</ul>
</nav>
</header>

      
        `
    }
}
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer" style="background-color: #1f2937; color: #e5e7eb; padding: 20px; text-align: center; position: relative; overflow: hidden;">
		<div class="container">
		  <div class="footer-content" style="display: flex; flex-wrap: wrap; justify-content: space-between; gap: 20px; align-items: center;">
			
			<!-- Follow Us Section -->
			<div class="follow-us" style="flex: 1; text-align: center;">
			  <h4 class="footer-heading" style="font-size: 1.5rem; margin-bottom: 10px; animation: fadeInUp 1s ease;">Follow Us</h4>
			  <div class="social-icons" style="display: flex; gap: 15px; justify-content: center;">
				<a href="https://facebook.com" target="_blank" class="social-icon facebook" aria-label="Facebook" style="font-size: 1.5rem; color: #e5e7eb; transition: color 0.3s, transform 0.3s;">
				  <i class="fab fa-facebook" style="font-size: 2rem;"></i>
				</a>
				<a href="https://instagram.com" target="_blank" class="social-icon instagram" aria-label="Instagram" style="font-size: 1.5rem; color: #e5e7eb; transition: color 0.3s, transform 0.3s;">
				  <i class="fab fa-instagram" style="font-size: 2rem;"></i>
				</a>
			  </div>
			</div>
	  
			<!-- Quick Links Section -->
			<div class="quick-links" style="flex: 2; text-align: center;">
			  <h4 class="footer-heading" style="font-size: 1.5rem; margin-bottom: 10px; animation: fadeInUp 1.2s ease;">Quick Links</h4>
			  <ul style="list-style: none; padding: 0; margin: 0; display: flex; gap: 25px; justify-content: center; align-items: center; animation: slideIn 1.5s ease;">
				<li><a href="#home" style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">Home</a></li>
				<li><a href="#about" style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">About Us</a></li>
				<li><a href="#news" style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">News</a></li>
				<li><a href="#contact" style="color: #e5e7eb; text-decoration: none; font-size: 1.1rem; transition: color 0.3s;">Contact</a></li>
			  </ul>
			</div>
	  
			<!-- Contact Section -->
			<div class="contact-section" style="flex: 1; text-align: center;">
			  <h4 class="footer-heading" style="font-size: 1.5rem; margin-bottom: 10px; animation: fadeInUp 1.3s ease;">Contact Us</h4>
			  <p style="font-size: 1.1rem; margin: 0; animation: fadeInUp 1.4s ease;">Email: <a href="mailto:info@volunteer.com" style="color: #ffbf00; text-decoration: none;">info@volunteer.com</a></p>
			  <p style="font-size: 1.1rem; margin: 0; animation: fadeInUp 1.5s ease;">Phone: <a href="tel:+1234567890" style="color: #ffbf00; text-decoration: none;">+1 234 567 890</a></p>
			</div>
		  </div>
	  
		  <!-- Animated Divider -->
		  <div class="divider" style="height: 1px; background-color: #e5e7eb; margin: 15px auto; width: 80%;"></div>
	  
		  <!-- Footer Bottom -->
		  <div class="footer-bottom" style="font-size: 0.85rem; animation: fadeInUp 1.6s ease;">
			<p>&copy; 2025 Volunteer. All Rights Reserved. Built with ❤ for our communities.</p>
		  </div>
		</div>
	  
		<!-- Animated Background Effects -->
		<div class="footer-bg-animations" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden;">
		  <div class="circle" style="width: 150px; height: 150px; background: #ffbf00; border-radius: 50%; position: absolute; top: 30%; left: 10%; opacity: 0.2; animation: moveCircle 6s linear infinite;"></div>
		  <div class="circle" style="width: 200px; height: 200px; background: #e5e7eb; border-radius: 50%; position: absolute; top: 50%; left: 70%; opacity: 0.2; animation: moveCircle 8s linear infinite;"></div>
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
			text-decoration: underline;
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
			0% {
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
		<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" crossorigin="anonymous"></script>
	  </footer>`
    }
}
customElements.define('my-header', MyHeader);
customElements.define('my-footer',MyFooter);
