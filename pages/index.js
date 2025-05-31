import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Head>
        <title>EcoGlow | Eco-Friendly Heating & Plumbing</title>
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-green-600 text-white">
        <div className="flex items-center gap-3">
          <Image src="/images/logo-placeholder.png" alt="EcoGlow Logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">EcoGlow</h1>
        </div>
        <nav className="hidden md:flex gap-6 font-medium">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-green-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Eco-Friendly Heating & Plumbing Solutions</h2>
          <p className="text-lg mb-6">Providing sustainable and efficient energy solutions across London, Surrey, Kent, and Sussex.</p>
          <a href="#contact" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Renewable Technology */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <Image src="/images/renewable-tech.jpg" alt="Renewable Technology" width={500} height={300} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Renewable Technology</h3>
            <p>Specializing in Solar PV, Battery Storage, Solar Thermal Hot Water, and Air Source Heat Pumps to reduce energy bills and carbon footprint.</p>
          </div>
          {/* Mechanical Engineering */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <Image src="/images/mechanical-engineering.jpg" alt="Mechanical Engineering" width={500} height={300} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Mechanical Engineering</h3>
            <p>Offering 24/7 services for plumbing, heating, and electrical emergencies with a team of dedicated tradespeople.</p>
          </div>
          {/* Home Improvements */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <Image src="/images/home-improvements.jpg" alt="Home Improvements" width={500} height={300} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Home Improvements</h3>
            <p>Providing bespoke design and installation services for home refurbishments, new bathrooms, and more.</p>
          </div>
          {/* Landlord Services */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <Image src="/images/landlord-services.jpg" alt="Landlord Services" width={500} height={300} className="rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Landlord Services</h3>
            <p>Comprehensive packages including gas safety checks, appliance servicing, and energy performance certifications.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-200 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">Reach out for a free, no-obligation quote or to learn more about our services.</p>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@ecoglow.uk.com" className="text-green-800 hover:underline">info@ecoglow.uk.com</a></p>
          <p className="mb-2"><strong>Phone:</strong> <a href="tel:01932550828" className="text-green-800 hover:underline">01932 550828</a></p>
          <p><strong>Address:</strong> EcoGlow Heating and Plumbing Ltd, Unit 4A Service Road, Addlestone, KT15 2HS</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} EcoGlow UK Ltd. All rights reserved.</p>
        <p>Company No: 11046963 | VAT No: 284030913</p>
      </footer>
    </div>
  );
}
