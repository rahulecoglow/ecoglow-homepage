import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-sans">
      <Head>
        <title>EcoGlow Energy</title>
      </Head>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-green-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Powering a Greener Tomorrow</h1>
          <p className="text-xl mb-6">EcoGlow provides clean, affordable, and sustainable energy solutions for homes and businesses across the UK.</p>
          <a href="#quote" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Green Energy Plans</h3>
            <p>Flexible and affordable plans tailored for homes and small businesses.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Smart Meter Installation</h3>
            <p>Track your energy usage in real time with our easy-install smart meters.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">Sustainability Consulting</h3>
            <p>Helping companies reduce carbon footprints and embrace renewables.</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="bg-green-200 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Free Energy Quote</h2>
          <p className="mb-6">Fill in your details and we’ll get back to you with a personalized offer.</p>
          <form className="grid gap-4 text-left">
            <input type="text" placeholder="Full Name" className="p-3 rounded border" required />
            <input type="email" placeholder="Email Address" className="p-3 rounded border" required />
            <input type="text" placeholder="Postcode" className="p-3 rounded border" required />
            <select className="p-3 rounded border" required>
              <option value="">Select Energy Type</option>
              <option value="electricity">Electricity</option>
              <option value="gas">Gas</option>
              <option value="both">Both</option>
            </select>
            <button type="submit" className="bg-green-700 text-white py-3 px-6 rounded hover:bg-green-800 transition">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} EcoGlow Energy. All rights reserved.</p>
      </footer>
    </div>
  )
}