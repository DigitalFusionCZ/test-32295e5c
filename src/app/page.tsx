'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    // Set page title
    document.title = "Vše Pro Stavby";

    // Generate and set favicon
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6" /><stop offset="100%" stop-color="#60a5fa" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    if (faviconLink) {
      faviconLink.setAttribute('href', faviconUrl);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-3xl font-bold tracking-tight text-white">
            Vše Pro Stavby
          </a>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md p-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 text-lg">
            <li><a href="#hero" className="hover:text-blue-200 transition-colors duration-300">Úvod</a></li>
            <li><a href="#services" className="hover:text-blue-200 transition-colors duration-300">Služby</a></li>
            <li><a href="#about" className="hover:text-blue-200 transition-colors duration-300">O nás</a></li>
            <li><a href="#contact" className="hover:text-blue-200 transition-colors duration-300">Kontakt</a></li>
          </ul>
        </nav>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-blue-600 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
            <li><a href="#hero" onClick={closeMenu} className="block w-full text-center px-4 py-2 hover:bg-blue-700 transition-colors duration-300">Úvod</a></li>
            <li><a href="#services" onClick={closeMenu} className="block w-full text-center px-4 py-2 hover:bg-blue-700 transition-colors duration-300">Služby</a></li>
            <li><a href="#about" onClick={closeMenu} className="block w-full text-center px-4 py-2 hover:bg-blue-700 transition-colors duration-300">O nás</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block w-full text-center px-4 py-2 hover:bg-blue-700 transition-colors duration-300">Kontakt</a></li>
          </ul>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative h-screen flex items-center justify-center bg-cover bg-center text-white overflow-hidden"
          style={{ backgroundImage: 'url("https://www.vseprostavby.cz/wp-content/uploads/2021/08/hlavni-obraszek-uvod-vseprostavby.jpg")' }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
              Vše Pro Stavby
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
              Váš spolehlivý partner pro stavební práce.
            </p>
            <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up-delay">
              Získat nabídku
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Naše služby</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-gray-50 rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-500 mb-4 text-center">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M9 14h.01M15 14h.01m-6 4h6a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Zemní práce a demolice</h3>
                <p className="text-gray-600 text-center">Ať už potřebujete přípravu pozemku, nebo kompletní demolici, máme k dispozici techniku i zkušenosti.</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-500 mb-4 text-center">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.593 23.593 0 0112 15c-3.213 0-6.326-.7-9-1.745M12 4.2C17.522 4.2 22 8.678 22 14.2c0 2.227-.791 4.318-2.181 5.922L12 22l-7.819-1.878A10.293 10.293 0 012 14.2c0-5.522 4.478-10 10-10z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Základové desky</h3>
                <p className="text-gray-600 text-center">Profesionální realizace základových desek pro rodinné domy i jiné stavby s důrazem na preciznost.</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-500 mb-4 text-center">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M18 10h4M2 10h4M5 10v7a2 2 0 002 2h10a2 2 0 002-2v-7M5 10a2 2 0 012-2h10a2 2 0 012 2M5 10h14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Zateplování</h3>
                <p className="text-gray-600 text-center">Zateplíme váš dům moderními izolačními materiály, snížíme energetickou náročnost a zvýšíme komfort bydlení.</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-500 mb-4 text-center">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M18 10h4M2 10h4M5 10v7a2 2 0 002 2h10a2 2 0 002-2v-7M5 10a2 2 0 012-2h10a2 2 0 012 2M5 10h14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Kompletní rekonstrukce</h3>
                <p className="text-gray-600 text-center">Od návrhu po realizaci, zajistíme komplexní rekonstrukce bytů, domů a komerčních prostor.</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-500 mb-4 text-center">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7L12 9l-3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Zednické práce</h3>
                <p className="text-gray-600 text-center">Jakékoli zednické práce, od drobných oprav až po výstavbu nosných konstrukcí.</p>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-xl p-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="text-blue-500 mb-4 text-center">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Práce s kamenem</h3>
                <p className="text-gray-600 text-center">Realizujeme práce z přírodního i umělého kamene, včetně fasád, obkladů a dlažeb.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="https://www.vseprostavby.cz/wp-content/uploads/2021/08/kdo-jsme-vseprostavby.jpg" alt="Tým Vše Pro Stavby" className="rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Kdo jsme?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Vítejte na našich stránkách Vše Pro Stavby. Jsme spolehlivá a dynamicky se rozvíjející společnost působící v oblasti stavebnictví.
                Naším hlavním cílem je spokojenost zákazníka, a proto klademe důraz na kvalitu, profesionalitu a dodržování termínů.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Disponujeme týmem zkušených a kvalifikovaných pracovníků, kteří jsou připraveni zvládnout i ty nejnáročnější projekty.
                Ať už plánujete novostavbu, rekonstrukci nebo drobné stavební úpravy, jsme tu pro vás s komplexními řešeními.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Používáme moderní technologie a osvědčené postupy, abychom zajistili dlouhodobou kvalitu a spolehlivost našich staveb.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Kontaktujte nás</h2>
            <p className="text-lg mb-4">
              Máte dotaz nebo chcete nezávaznou cenovou nabídku? Neváhejte nás kontaktovat!
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-lg">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13h9a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>info@vseprostavby.cz</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+420 721 720 019</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>U Valchy 503, 252 62 Horoměřice</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Vše Pro Stavby. Všechna práva vyhrazena.
          <p className="mt-2">Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">DigitalFusion</a></p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fade-in-up-delay {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up-delay 1s ease-out forwards;
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
}
