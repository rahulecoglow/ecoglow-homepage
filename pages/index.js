import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      <Head>
        <title>EcoGlow | Eco-Friendly Heating & Plumbing</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-emerald-700 text-white shadow-md z-10 relative">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-placeholder.png" alt="EcoGlow Logo" width={40} height={40} />
          <span className="text-2xl font-extrabold tracking-tight">EcoGlow</span>
        </div>
        <nav className="hidden md:flex gap-6 text-white font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/renewable-tech.jpg" alt="Hero Image" layout="fill" objectFit="cover" className="opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-600/60"></div>
        </div>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Eco-Friendly Heating & Plumbing</h1>
          <p className="text-lg md:text-xl text-white mb-8">Delivering renewable, sustainable, and efficient energy solutions across the UK.</p>
          <a href="#contact" className="inline-block bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-emerald-100 transition">
            Request a Free Quote
          </a>
        </div>
      </section>

      {/* Wave Divider */}
      <svg viewBox="0 0 1440 320" className="-mt-1">
        <path fill="#ECFDF5" fillOpacity="1" d="M0,128L60,138.7C120,149,240,171,360,186.7C480,203,600,213,720,186.7C840,160,960,96,1080,101.3C1200,107,1320,181,1380,218.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>

      {/* Services Section */}
      <section id="services" className="bg-emerald-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { title: 'Renewable Technology', img: 'renewable-tech', desc: 'Solar PV, battery storage, thermal hot water, air source heat pumps.' },
              { title: 'Mechanical Engineering', img: 'mechanical-engineering', desc: '24/7 plumbing, heating, and electrical support.' },
              { title: 'Home Improvements', img: 'home-improvements', desc: 'Refurbishments, new bathrooms, tailored upgrades.' },
              { title: 'Landlord Services', img: 'landlord-services', desc: 'Gas checks, servicing, certifications, and reports.' }
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <Image src={`/images/${card.img}.jpg`} alt={card.title} width={500} height={300} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-700">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-900 mb-4">Let’s Work Together</h2>
          <p className="text-emerald-700 mb-6">Contact us for a free, no-obligation quote or learn more about what EcoGlow can do for you.</p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-left text-sm">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@ecoglow.uk.com" className="text-emerald-800 hover:underline">info@ecoglow.uk.com</a></p>
            <p className="mb-2"><strong>Phone:</strong> <a href="tel:01932550828" className="text-emerald-800 hover:underline">01932 550828</a></p>
            <p><strong>Address:</strong> EcoGlow Heating and Plumbing Ltd, Unit 4A Service Road, Addlestone, KT15 2HS</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white text-center py-6 text-sm">
        <p>&copy; {new Date().getFullYear()} EcoGlow UK Ltd. All rights reserved.</p>
        <p>Company No: 11046963 | VAT No: 284030913</p>
      </footer>
    </div>
  );
}


