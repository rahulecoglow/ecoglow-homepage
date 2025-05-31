import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Head>
        <title>EcoGlow | Eco-Friendly Heating & Plumbing</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-emerald-700 text-white shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-placeholder.png" alt="EcoGlow Logo" width={48} height={48} />
          <h1 className="text-2xl font-extrabold tracking-tight">EcoGlow</h1>
        </div>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-emerald-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url(/images/renewable-tech.jpg)' }}></div>
        <div className="relative py-24 px-6 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-emerald-900">Eco-Friendly Heating & Plumbing</h2>
          <p className="text-xl mb-8 text-emerald-800">Sustainable and efficient energy solutions across London, Surrey, Kent, and Sussex.</p>
          <a href="#contact" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-emerald-700 transition shadow-md">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Renewable Technology',
                desc: 'Solar PV, battery storage, solar thermal, air source heat pumps.',
                img: '/images/renewable-tech.jpg'
              },
              {
                title: 'Mechanical Engineering',
                desc: '24/7 plumbing, heating, and electrical support.',
                img: '/images/mechanical-engineering.jpg'
              },
              {
                title: 'Home Improvements',
                desc: 'Design & installation for refurbishments and bathrooms.',
                img: '/images/home-improvements.jpg'
              },
              {
                title: 'Landlord Services',
                desc: 'Gas checks, servicing, EPCs, and maintenance packages.',
                img: '/images/landlord-services.jpg'
              }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <Image src={service.img} alt={service.title} width={500} height={300} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-2 text-emerald-700">{service.title}</h4>
                  <p className="text-gray-700 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-emerald-50 to-white py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-emerald-900">Contact Us</h2>
          <p className="mb-6 text-emerald-800">Reach out for a free, no-obligation quote or to learn more about our services.</p>
          <div className="text-left bg-white rounded-lg shadow p-6">
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@ecoglow.uk.com" className="text-emerald-700 hover:underline">info@ecoglow.uk.com</a></p>
            <p className="mb-2"><strong>Phone:</strong> <a href="tel:01932550828" className="text-emerald-700 hover:underline">01932 550828</a></p>
            <p><strong>Address:</strong> EcoGlow Heating and Plumbing Ltd, Unit 4A Service Road, Addlestone, KT15 2HS</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} EcoGlow UK Ltd. All rights reserved.</p>
        <p>Company No: 11046963 | VAT No: 284030913</p>
      </footer>
    </div>
  );
}

