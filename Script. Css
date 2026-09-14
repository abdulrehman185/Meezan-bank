@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

:root {
    --green: #006b45;
    --dark-green: #004d35;
    --light-green: #eaf5ef;
    --gold: #c7a44a;
    --dark: #17251f;
    --gray: #66736d;
    --white: #ffffff;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--dark);
    background: #ffffff;
    line-height: 1.6;
}

header {
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7%;
    background: white;
    border-bottom: 1px solid #e8eee9;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    color: var(--green);
    font-size: 24px;
    font-weight: 800;
    letter-spacing: -1px;
}

.logo span {
    color: var(--gold);
    margin-right: 6px;
}

.logo small {
    display: block;
    font-size: 8px;
    color: var(--gray);
    letter-spacing: 2px;
    margin-left: 31px;
    margin-top: -5px;
}

nav {
    display: flex;
    gap: 30px;
}

nav a {
    text-decoration: none;
    color: #39463f;
    font-size: 14px;
    font-weight: 500;
}

nav a:hover {
    color: var(--green);
}

.login-btn,
.primary-btn {
    background: var(--green);
    color: white;
    border: none;
    padding: 13px 22px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
}

.login-btn:hover,
.primary-btn:hover {
    background: var(--dark-green);
}

.menu-btn {
    display: none;
    border: none;
    background: none;
    font-size: 25px;
    cursor: pointer;
}

/* Hero */
.hero {
    min-height: 590px;
    background: linear-gradient(115deg, #f0f8f3 0%, #ffffff 65%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px 10%;
    overflow: hidden;
}

.hero-content {
    max-width: 570px;
}

.tagline {
    color: var(--gold);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 16px;
}

.hero h1 {
    font-size: clamp(42px, 5vw, 68px);
    line-height: 1.12;
    letter-spacing: -3px;
    margin-bottom: 25px;
}

.hero h1 span {
    color: var(--green);
}

.hero-content > p:not(.tagline) {
    color: var(--gray);
    max-width: 460px;
    margin-bottom: 30px;
}

.hero-buttons {
    display: flex;
    gap: 14px;
}

.primary-btn {
    text-decoration: none;
    display: inline-block;
}

.secondary-btn {
    text-decoration: none;
    color: var(--green);
    border: 1px solid var(--green);
    padding: 12px 22px;
    border-radius: 5px;
    font-weight: 600;
}

.secondary-btn:hover {
    background: var(--light-green);
}

/* Bank Card */
.hero-card {
    width: 360px;
    height: 220px;
    border-radius: 18px;
    padding: 28px;
    background: linear-gradient(135deg, #006b45, #003d2b);
    color: white;
    box-shadow: 0 25px 50px rgba(0, 80, 50, 0.2);
    transform: rotate(5deg);
}

.card-top,
.card-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    letter-spacing: 1px;
}

.hero-card h2 {
    font-size: 27px;
    margin-top: 30px;
    line-height: 1.1;
}

.hero-card p {
    font-size: 11px;
    opacity: 0.7;
    margin-top: 8px;
}

.card-bottom {
    margin-top: 22px;
}

/* Quick Services */
.quick-services {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1100px;
    margin: -45px auto 0;
    position: relative;
    background: white;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.07);
    border-radius: 8px;
    overflow: hidden;
}

.quick-box {
    padding: 28px 20px;
    text-align: center;
    border-right: 1px solid #edf1ee;
}

.quick-box:last-child {
    border-right: none;
}

.quick-box span {
    font-size: 28px;
}

.quick-box h3 {
    font-size: 15px;
    margin: 8px 0;
}

.quick-box p {
    color: var(--gray);
    font-size: 12px;
}

/* General Sections */
.section {
    padding: 100px 8%;
}

.section-heading {
    text-align: center;
    max-width: 650px;
    margin: 0 auto 45px;
}

.section-heading h2 {
    font-size: 38px;
    letter-spacing: -1px;
    margin-bottom: 12px;
}

.section-heading > p:last-child {
    color: var(--gray);
}

.service-grid {
    max-width: 1100px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}

.service-card {
    border: 1px solid #e4ebe6;
    padding: 28px 24px;
    border-radius: 8px;
    transition: 0.3s;
}

.service-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 15px 30px rgba(0, 80, 50, 0.08);
    border-color: #b8d8c6;
}

.icon {
    font-size: 30px;
    margin-bottom: 20px;
}

.service-card h3 {
    font-size: 18px;
    margin-bottom: 12px;
}

.service-card p {
    color: var(--gray);
    font-size: 13px;
    min-height: 65px;
}

.service-card a {
    color: var(--green);
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
}

/* Digital Banking */
.digital-section {
    background: var(--dark-green);
    color: white;
    padding: 100px 12%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 70px;
}

.digital-content {
    max-width: 500px;
}

.digital-content h2 {
    font-size: 42px;
    line-height: 1.15;
    margin-bottom: 22px;
}

.digital-content > p:not(.tagline) {
    color: #c7d8ce;
    margin-bottom: 25px;
}

.digital-features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 30px;
    color: #dcebe2;
    font-size: 14px;
}

.digital-section .primary-btn {
    background: var(--gold);
    color: #20352b;
}

.phone {
    width: 270px;
    height: 450px;
    border: 8px solid #263e34;
    border-radius: 35px;
    background: white;
    padding: 12px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}

.phone-screen {
    color: var(--dark);
    height: 100%;
    background: #f3f8f5;
    border-radius: 22px;
    padding: 25px 16px;
}

.phone-header {
    color: var(--green);
    font-weight: 700;
    margin-bottom: 35px;
}

.phone-screen p {
    font-size: 12px;
    color: var(--gray);
}

.phone-screen h2 {
    margin: 5px 0 20px;
}

.balance-line {
    height: 6px;
    background: #d7e9dc;
    border-radius: 5px;
    margin-bottom: 35px;
}

.phone-row {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 15px;
}

.phone-row span:last-child {
    color: var(--green);
}

.transaction {
    background: white;
    padding: 15px 10px;
    border-radius: 8px;
    margin-bottom: 10px;
    font-size: 10px;
}

.transaction b {
    display: block;
    color: var(--green);
    margin-top: 5px;
}

/* Careers */
.careers {
    background: #f8fbf9;
}

.career-box {
    max-width: 1000px;
    margin: auto;
    background: var(--light-green);
    border-left: 5px solid var(--green);
    padding: 35px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
}

.career-box h3 {
    font-size: 24px;
    margin-bottom: 10px;
}

.career-box p {
    color: var(--gray);
}

/* Contact */
.contact-section {
    padding: 70px 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
}

.contact-section h2 {
    font-size: 35px;
    margin-bottom: 10px;
}

.contact-section p:not(.tagline) {
    color: var(--gray);
}

.contact-info {
    border-left: 1px solid #dce5df;
    padding-left: 50px;
}

.contact-info p {
    margin: 15px 0;
    color: var(--dark) !important;
    font-weight: 600;
}

/* Footer */
footer {
    background: #123126;
    color: #c9d8cf;
    padding: 45px 8%;
    text-align: center;
}

.footer-logo {
    color: white;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
}

footer p {
    font-size: 12px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 25px;
    margin: 22px 0;
}

.footer-links a {
    color: #c9d8cf;
    text-decoration: none;
    font-size: 13px;
}

.copyright {
    border-top: 1px solid #315044;
    padding-top: 20px;
    margin-top: 20px;
}

/* Responsive */
@media (max-width: 900px) {
    header {
        padding: 0 5%;
    }

    nav {
        gap: 15px;
    }

    .login-btn {
        display: none;
    }

    .hero {
        padding: 60px 7%;
        gap: 30px;
    }

    .hero-card {
        width: 300px;
    }

    .quick-services,
    .service-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .quick-services {
        margin: -30px 7% 0;
    }

    .digital-section {
        padding: 80px 7%;
    }
}

@media (max-width: 600px) {
    header {
        height: 70px;
    }

    .logo {
        font-size: 20px;
    }

    nav {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: white;
        flex-direction: column;
        padding: 20px 7%;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }

    nav.active {
        display: flex;
    }

    .menu-btn {
        display: block;
    }

    .hero {
        flex-direction: column;
        text-align: center;
        padding: 60px 6%;
    }

    .hero h1 {
        font-size: 45px;
    }

    .hero-buttons {
        justify-content: center;
    }

    .hero-card {
        width: 290px;
        transform: rotate(0);
    }

    .quick-services {
        grid-template-columns: 1fr 1fr;
        margin: -25px 5% 0;
    }

    .quick-box {
        padding: 20px 10px;
    }

    .section {
        padding: 70px 6%;
    }

    .section-heading h2 {
        font-size: 30px;
    }

    .service-grid {
        grid-template-columns: 1fr;
    }

    .service-card p {
        min-height: auto;
        margin-bottom: 15px;
    }

    .digital-section {
        flex-direction: column;
        text-align: center;
        padding: 70px 6%;
    }

    .digital-content h2 {
        font-size: 35px;
    }

    .digital-features {
        text-align: left;
    }

    .career-box {
        flex-direction: column;
        text-align: center;
        padding: 30px 20px;
    }

    .contact-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        padding: 60px 8%;
    }

    .contact-info {
        border-left: none;
        border-top: 1px solid #dce5df;
        padding: 20px 0 0;
        width: 100%;
    }

    .footer-links {
        flex-wrap: wrap;
    }
}
