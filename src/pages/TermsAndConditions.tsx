
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-navy-dark">
              Termeni și Condiții
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">1. Introducere</h2>
                <p className="text-gray-700 mb-4">
                  Bine ați venit la Art of Growth! Acești termeni și condiții ("Termeni") reglementează utilizarea site-ului nostru web și serviciilor oferite de Art of Growth ("noi", "al nostru" sau "Compania").
                </p>
                <p className="text-gray-700">
                  Prin accesarea și utilizarea serviciilor noastre, acceptați să fiți legat de acești Termeni. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați serviciile noastre.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">2. Serviciile Oferite</h2>
                <p className="text-gray-700 mb-4">
                  Art of Growth oferă servicii de coaching de carieră, consultanță psihologică organizațională și sesiuni de dezvoltare profesională. Serviciile noastre includ:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Career Discovery Session</li>
                  <li>Career Transition Coaching</li>
                  <li>Executive Coaching</li>
                  <li>Workshop-uri de grup</li>
                  <li>Servicii de CV și LinkedIn</li>
                  <li>Pregătirea pentru interviuri</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">3. Programări și Anulări</h2>
                <p className="text-gray-700 mb-4">
                  Programările pot fi făcute prin intermediul site-ului nostru sau prin contact direct. Pentru anulări:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  <li>Anulările cu cel puțin 24 de ore înainte de sesiune sunt gratuite</li>
                  <li>Anulările cu mai puțin de 24 de ore pot fi supuse unei taxe de anulare</li>
                  <li>Neprezentarea la sesiune fără anunț prealabil va fi taxată integral</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">4. Plăți și Rambursări</h2>
                <p className="text-gray-700 mb-4">
                  Plata pentru servicii se efectuează înainte de prestarea serviciului, cu excepția unor aranjamente speciale convenite în prealabil.
                </p>
                <p className="text-gray-700">
                  Rambursările sunt disponibile conform politicii noastre de rambursare, care va fi comunicată separat pentru fiecare tip de serviciu.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">5. Confidențialitate</h2>
                <p className="text-gray-700 mb-4">
                  Menținerea confidențialității informațiilor împărtășite în timpul sesiunilor de coaching este o prioritate pentru noi. Toate informațiile personale și profesionale vor fi tratate cu strictă confidențialitate.
                </p>
                <p className="text-gray-700">
                  Nu vom dezvălui informații personale către terțe părți fără consimțământul explicit al clientului, cu excepția cazurilor în care legea o impune.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">6. Limitarea Responsabilității</h2>
                <p className="text-gray-700 mb-4">
                  Serviciile noastre de coaching sunt destinate să ofere îndrumare și suport în dezvoltarea carierei. Nu garantăm rezultate specifice sau succesul în găsirea unui loc de muncă.
                </p>
                <p className="text-gray-700">
                  Art of Growth nu va fi responsabil pentru deciziile de carieră luate de clienți pe baza recomandărilor primite în timpul sesiunilor.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">7. Proprietatea Intelectuală</h2>
                <p className="text-gray-700">
                  Toate materialele, metodologiile și conținutul dezvoltat de Art of Growth sunt protejate de drepturile de autor și nu pot fi reproduse sau distribuite fără acordul nostru scris.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">8. Modificarea Termenilor</h2>
                <p className="text-gray-700">
                  Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. Modificările vor fi postate pe site-ul nostru și vor intra în vigoare imediat după publicare.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-navy-dark">9. Contact</h2>
                <p className="text-gray-700">
                  Pentru întrebări despre acești termeni și condiții, ne puteți contacta la:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> laura@artofgrowth.ro
                  </p>
                  <p className="text-gray-700">
                    <strong>Telefon:</strong> +40 755 376 738
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
