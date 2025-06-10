
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Download, Clock, Heart, Users, ArrowRight } from 'lucide-react';

const WorkbookLanding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-teal/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-teal/10 text-teal rounded-full text-sm font-medium mb-4">
                  ✍️ Workbook Digital
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-navy-dark">
                Ce-mi place, de fapt, să fac?
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
                Workbook de introspecție profesională pentru oameni care vor să-și (re)găsească direcția.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Un ghid psihologic, blând și practic, care te ajută să te reconectezi cu tine 
                atunci când nu mai știi ce îți place sau ce te motivează.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-teal" />
                  <span>5 capitole ghidate</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Download className="h-5 w-5 mr-2 text-teal" />
                  <span>Format PDF</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Heart className="h-5 w-5 mr-2 text-teal" />
                  <span>Ritm personal</span>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Nu e un test. Nu e un curs.</strong>
                </p>
                <p className="text-xl text-teal font-medium">
                  👉 E o conversație sinceră cu tine, în scris.
                </p>
              </div>

              <Button className="bg-teal hover:bg-teal-dark text-white px-8 py-4 rounded-full text-lg font-medium">
                Cumpără Workbook-ul – 49 lei
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Pentru cine e Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-navy-dark">
                ❓ Cui se potrivește?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-teal">
                  <CardContent className="p-6">
                    <p className="text-gray-700">
                      Dacă simți că <strong>jobul actual nu te mai reprezintă</strong>, dar nu știi ce vrei în loc
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal">
                  <CardContent className="p-6">
                    <p className="text-gray-700">
                      Dacă te întrebi des: <strong>„Oare eu ce vreau cu adevărat?"</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal">
                  <CardContent className="p-6">
                    <p className="text-gray-700">
                      Dacă simți că ai obosit să tot faci <strong>lucruri care nu-ți mai vorbesc</strong>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-teal">
                  <CardContent className="p-6">
                    <p className="text-gray-700">
                      Dacă ai nevoie de <strong>claritate, dar și blândețe</strong> în procesul tău
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Cum funcționează */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-navy-dark">
                💬 Cum funcționează?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Primești instant</h3>
                  <p className="text-gray-600">Workbook-ul ajunge prin email, imediat după plată</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Parcurgi în ritmul tău</h3>
                  <p className="text-gray-600">Recomand 1 capitol pe zi, dar poți merge mai încet</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Revii când ai nevoie</h3>
                  <p className="text-gray-600">Poți reveni la el oricând ai nevoie de o reconectare</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce vei descoperi */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-navy-dark">
                🧭 Ce vei descoperi?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-4 mt-1">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>Unde ți se duce energia</strong> în fiecare zi și de ce
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-4 mt-1">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>Ce activități îți hrănesc esența</strong> – și ce te epuizează
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-4 mt-1">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>Cum să recunoști tiparele</strong> care te țin pe loc
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center mr-4 mt-1">
                    <Check className="h-4 w-4 text-teal" />
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>Care sunt direcțiile posibile</strong> pentru tine – nu perfecte, dar vii
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-navy-dark">
                🔁 Întrebări frecvente
              </h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-navy-dark">
                      Este pentru mine dacă nu am o criză de carieră, doar confuzie?
                    </h3>
                    <p className="text-gray-700">
                      → <strong>Da.</strong> Workbook-ul e tocmai pentru momentele în care ai nevoie să-ți clarifici gândurile, fără presiune de decizie.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-navy-dark">
                      Trebuie să știu ce vreau deja?
                    </h3>
                    <p className="text-gray-700">
                      → <strong>Nu.</strong> Asta e ideea. Te ajută să-ți formulezi întrebările potrivite.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-navy-dark">
                      Cât timp durează să-l parcurg?
                    </h3>
                    <p className="text-gray-700">
                      → Îl poți face în <strong>5 zile</strong>, câte un capitol pe zi – sau mai încet, în ritmul tău.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-teal/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-navy-dark">
                📥 Dă-ți timp să-ți răspunzi la întrebarea care te tot urmărește:
              </h2>
              
              <p className="text-2xl text-teal font-medium mb-8">
                „Ce-mi place, de fapt, să fac?"
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 inline-block">
                <div className="text-3xl font-bold text-navy-dark mb-2">49 lei</div>
                <div className="text-gray-600 mb-4">🎁 Livrare instant în inbox</div>
                <div className="text-sm text-gray-500">Format PDF • Plata online securizată</div>
              </div>

              <div className="block">
                <Button className="bg-teal hover:bg-teal-dark text-white px-12 py-4 rounded-full text-xl font-medium">
                  👉 Cumpără Workbook-ul – 49 lei
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WorkbookLanding;
