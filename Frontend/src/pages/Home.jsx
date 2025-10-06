function AboutUs() {
  return (
    <div className="flex flex-col items-center sm:px-20 p-6 bg-gradient-to-r from-green-100 via-blue-50 to-yellow-100 min-h-screen">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold text-green-600">AI Maize Doctor</span>! 
          Our mission is to empower farmers with advanced AI tools to detect maize plant diseases 
          quickly and accurately.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Using <span className="text-yellow-600 font-medium">Convolutional Neural Networks (CNNs)</span>, 
          our platform allows farmers to simply upload a maize leaf image and get instant diagnostic results. 
          This helps reduce crop losses, save time, and improve productivity.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          We believe in combining <span className="font-semibold text-blue-500">technology and agriculture</span> 
          to create a sustainable future for farming communities.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
