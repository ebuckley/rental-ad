import Head from "next/head";
import Image from 'next/image';

import studio03 from './img/studio03.jpg'
import studio04 from './img/studio04.jpg'
import studio05 from './img/studio05.jpg'
import studio06 from './img/studio06.jpg'
import studio07 from './img/studio07.jpg'
import studio08 from './img/studio08.jpg'

import featureStudio from './img/studio.jpg'
import Link from "next/link";
import {useState} from 'react'

const imgs = [
  { url: studio08, alt: 'Studio Unit with sunny Patio' },
  { url: studio07, alt: 'Queen size bed' },
  { url: featureStudio, alt: 'Studio with sunshine and patio' },
  { url: studio03, alt: 'Sunny private patio' },
  { url: studio04, alt: 'Ready to settle kitchen' },
  { url: studio05, alt: 'Fully stocked Kitchenette' },
  { url: studio06, alt: 'Spacious wardrobe' }
]

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    // setSelectedImage(index);
  };
  return (
    <>
      <Head>
        <meta name="description" content="Book Your Seaside Escape Now: Your Perfect getaway Awaits!" />
        <link rel="icon" href="/favicon.ico" />
        <title>Seaside Bliss in Christchurch</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="bg-gray-100">
        <header className="relative h-screen">
          {/* Background Image */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('estuary.jpg');" }}
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60" />

          {/* Content */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
            {/* Title */}
            <h1 className="text-6xl font-bold mb-4 font-serif">Seaside Bliss in Christchurch</h1>

            {/* Call to Action */}
            <p className="text-xl font-zilla">
              Book Your Seaside Escape Now: Your Perfect Getaway Awaits!
            </p>
            {/* You can add a button here for the call to action */}
            {/* put this at the end of the flex layout */}
            <Link href="#features" className="text-white text-3xl animate-bounce mt-6">{chevDown}</Link>
          </div>
        </header>
        <section id="features" className="py-16 bg-gradient-to-b from-orange-500 to-pink-500">
          <div className="container mx-auto px-4">
            <h2 className=" font-serif text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Features and Amenities
            </h2>
            <div className="shadow-xl rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
                <Image
                  src={featureStudio}
                  alt="Studio with sunshine and patio"
                  className="h-auto rounded-l-xl"
                />
                <p className="bg-amber-200 px-6 py-4 rounded-r-xl text-2xl font-light font-zilla">
                  Welcome to our exquisite modern studio unit nestled in the heart of Redcliffs,
                  just moments away from the pristine shores of Christchurch's beautiful beach. This spacious and
                  stylish studio boasts an abundance of natural lighting, providing a serene and inviting ambiance.
                  The highlight of this idyllic retreat is undoubtedly the private deck, where you can indulge in
                  breathtaking views of the ocean. Fall asleep to the soothing melody of the waves, and wake up to
                  the refreshing sea breeze – it's a beach lover's dream come true!
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="shadow-xl bg-amber-200 rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Private Entrance</h3>
                <p className="text-gray-800">
                  Enjoy your own private entrance for complete privacy during your stay.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="shadow-xl bg-amber-200 rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Kitchenette</h3>
                <p className="text-gray-800">
                  The well-equipped kitchenette allows you to prepare your favorite meals.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="shadow-xl bg-amber-200 rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Modern Bathroom</h3>
                <p className="text-gray-800">
                  Refresh yourself in the modern bathroom with a convenient shower.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="shadow-xl bg-amber-200 rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Washer</h3>
                <p className="text-gray-800">
                  A washer is provided for your convenience during longer stays.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="shadow-xl bg-amber-200 rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Tranquil Setting</h3>
                <p className="text-gray-800">
                  The serene and peaceful environment guarantees a good night's sleep.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="shadow-xl bg-amber-200 rounded-lg p-6">
                <h3 className="font-serif text-xl font-bold text-gray-800 mb-4">Nearby Attractions</h3>
                <p className="text-gray-800">
                  Easy walking distance to shops, dairy, ocean, bike path, and Sumner beach.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {imgs.map((im, index) => (
            <div 
              key={index}
              className={`aspect-w-1 aspect-h-1 ${selectedImage === index ? 'w-full h-full fixed top-0 left-0 z-50' : ''
              }`}
              onClick={() => handleImageClick(index)}>
              <Image className={`object-cover w-full h-full cursor-pointer ${selectedImage !== null ? 'opacity-0' : ''
                }`} src={im.url} alt={im.alt} key={index} />
            </div>
          ))}
        </section>


        <main className="container mx-auto mt[-200px]">
          <section id="features" className="bg-amber-200 shadow-lg rounded-lg p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <Image src={studio08} width={800} height={600} alt="Sunny Studio Unit" className="w-full h-auto rounded-lg mb-4" />
              </div>
              <div className="md:w-1/2 md:ml-8">
                <h2 className="text-2xl font-bold mb-4">About the Studio</h2>
                <p className="mb-4">Welcome to our exquisite modern studio unit nestled in the heart of Redcliffs,
                  just moments away from the pristine shores of Christchurch's beautiful beach. This spacious and
                  stylish studio boasts an abundance of natural lighting, providing a serene and inviting ambiance.
                  The highlight of this idyllic retreat is undoubtedly the private deck, where you can indulge in
                  breathtaking views of the ocean. Fall asleep to the soothing melody of the waves, and wake up to
                  the refreshing sea breeze – it's a beach lover's dream come true!</p>
                <h2 className="text-2xl font-bold mb-4">Features and Amenities</h2>
                <ul className="list-disc pl-6">
                  <li>Private entrance</li>
                  <li>Kitchenette</li>
                  <li>Bathroom with shower</li>
                  <li>Washer</li>
                  <li>Modern furnishings</li>
                  <li>Private deck with ocean view</li>
                  <li>Easy parking</li>
                  <li>Quiet and serene location</li>
                </ul>
              </div>
            </div>
          </section>
          {/* 
        <!-- Testimonials section (Optional) -->
        <!-- You can add testimonials here if you have them --> */}

          <section className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Book Your Seaside Escape Now!</h2>
            <p className="mb-4">Click the button below to secure your stay at our stunning beachside studio and immerse
              yourself in the ultimate relaxation and comfort. Unwind by the ocean, bask in the glorious sunsets, and
              create cherished memories in Christchurch that will last a lifetime. Don't miss out on this opportunity
              – your perfect beach vacation awaits!</p>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Book Now</a>
          </section>
        </main>
      </div>
    </>
  );
}


const chevDown = <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
</svg>
