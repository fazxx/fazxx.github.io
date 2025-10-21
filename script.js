<script>
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const htmlElement = document.documentElement;

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            htmlElement.classList.add('dark');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        darkModeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            const isDark = htmlElement.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
            darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });

        // Typing Animation
        const typingTexts = ['Open Source Enthusiast', 'I Build For Developers', 'Reverse Engineering'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typingText');

        function typeAnimation() {
            const currentText = typingTexts[textIndex];
            
            if (isDeleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typingElement.textContent = currentText.substring(0, charIndex);

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                speed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                speed = 500;
            }

            setTimeout(typeAnimation, speed);
        }

        typeAnimation();

        // Custom Cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        if (window.innerWidth > 768) {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');

            let mouseX = 0;
            let mouseY = 0;
            let followerX = 0;
            let followerY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                cursor.style.left = mouseX - 10 + 'px';
                cursor.style.top = mouseY - 10 + 'px';

                setTimeout(() => {
                    followerX = mouseX - 4;
                    followerY = mouseY - 4;
                    cursorFollower.style.left = followerX + 'px';
                    cursorFollower.style.top = followerY + 'px';
                }, 100);
            });

            document.addEventListener('mouseenter', () => {
                cursor.style.opacity = '1';
                cursorFollower.style.opacity = '1';
            });

            document.addEventListener('mouseleave', () => {
                cursor.style.opacity = '0';
                cursorFollower.style.opacity = '0';
            });
        }

        // Smooth Scroll for Navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Mobile Menu Toggle
        const navbarToggle = document.querySelector('[data-collapse-toggle]');
        const navbarMenu = document.getElementById('navbar-menu');

        if (navbarToggle) {
            navbarToggle.addEventListener('click', () => {
                navbarMenu.classList.toggle('hidden');
            });
        }

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navbar-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navbarMenu.classList.add('hidden');
            });
        });
    </script>
