
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-gray-50 py-12 mb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="border border-teal/30 bg-white/80 rounded-md p-8 text-center mb-8">
                <h1 className="text-2xl md:text-3xl font-medium text-navy mb-2">
                  Bun venit la Art of Growth, spațiul unde îți regăsești claritatea și sensul în carieră, cu ajutorul psihologiei.
                </h1>
              </div>
              <p className="text-lg text-center text-gray-700 mb-8">
                Te ghidez să depășești blocajele profesionale și să îți creezi o carieră care reflectă autentic cine ești.
              </p>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="rounded-md overflow-hidden shadow-lg transform rotate-1">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1588&q=80" 
                    alt="Career Coach" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Despre Mine</h2>
                <h3 className="text-xl font-medium mb-4">Bună, sunt Laura,</h3>
                <p className="text-gray-700 mb-4">
                  Îmbinând un fost background de ființă cu o mare ce mă înțelegem cu viața și un billboard frumos. Am creat de peste zece ani lumină în jurul ideilor simple și direcții, pentru oameni care doresc să își (re)găsească sensul: să fie sensul care sunt cu adevărat și un generator autentic și direcție profesională.
                </p>
                <p className="text-gray-700 mb-4">
                  Am experiență în medii corporative și antreprenoriale. Sunt licențiată în Psihologie și Dezvoltare Organizațională și am acumulat peste 13 ani de experiență în programe de Execuție și Middle Line. Sunt formată în procese Solution-Focused, dar și absolut un specialist în problema care valorează și, în final, am decât să te la asta pentru momentul potrivit pentru a decine cu adevărat cine ești pentru a găsi o schimbare profesională autentică cu o claritate de direcție uimitoare.
                </p>
                <h3 className="text-xl font-medium mt-8 mb-4">Cred că fiecare persoană are în sine resursele necesare pentru a-și găsi propriul drum.</h3>
                <p className="text-gray-700 mb-6">
                  Principiul meu în profesiune și în viața ca că ceea ce gândesc pot transforma pozitive și resursele pedagogice care în permit să să discover propriile răspunsul. Îndrăznesc să să cred că în aceeaste călător, în primordial întrevedem că și gândim am verit am profitul în muncă, contribuire pozitivă care merge în direcția culorilor în cele vremuri.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Misiunea Mea</h2>
              <p className="text-gray-700 mb-6">
                La Art of Growth, cred că sprijinul psihologic este esențial pentru o carieră autentică și echilibrată.
              </p>
              <p className="text-gray-700 mb-8">
                În viața plină în momentele în transformare există un sens de căluștorie, în care să te vezi în timp real cum crește cu puterea.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Viziunea Mea</h2>
              <p className="text-gray-700 mb-6">
                Vizual să creeze o lume în care nimică nu mai este o sursă de stres, ci un spațiu de creștere și autenticitate.
              </p>
              <p className="text-gray-700 mb-6">
                Care-ți pentru oameni doar în care ne conectăm la peste ca un el strategică, ci ca un străin care reflectă cum suntem. În timpul să crească un priorități personale să îți percepe ca o muncă sănată și autentică pentru a crea un spațiu de lucru.
              </p>
              <p className="text-gray-700 mb-8">
                Este important să îți păstrezi controlul asupra carierei tale.
              </p>

              <div className="text-center mt-8">
                <Button className="bg-navy-dark hover:bg-navy text-white rounded-md px-8 py-3 text-sm font-medium">
                  Citește mai multe
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6">Descoperă cum sesiunile de consiliere te pot ajuta să transformi provocările profesionale în oportunități de evoluție și împlinire.</h2>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold mb-6">Cred în puterea ta de a-ți transforma viața profesională.</h2>
                <p className="text-gray-700 mb-6">
                  Cred că ai în tine potențialul de a-ți construi o carieră în care să te regăsești cu adevărat. Și știu că de prin poate fi să faci primul pas.
                </p>
                <p className="text-gray-700 mb-8">
                  Sunt aici să te sprijin, fără presiune, fără soluții impuse—doar ghidaj.Dar și poți construit spre ceea ce îți se potrivește.
                </p>
                <CTAButton to="/services" variant="outline" className="border-navy text-navy hover:bg-navy/10">
                  Programează o ședință gratuită
                </CTAButton>
              </div>
              <div className="w-full md:w-1/3">
                <div className="aspect-square rounded-full border-8 border-teal/20 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full border-8 border-navy-dark/20"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center mb-12">Întrebări frecvente</h2>
            
            <div className="max-w-3xl mx-auto divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-6">
                  <button className="flex w-full text-left justify-between items-start">
                    <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                    <span className="ml-6 h-7 flex items-center">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-navy-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-8">Schimbarea începe cu un prim pas. Dacă simți că ai nevoie de claritate și direcție, sunt aici să te ghidez în acest proces.</h2>
              <Button className="bg-white hover:bg-gray-100 text-navy rounded-md px-8 py-3 text-sm font-medium">
                Programează o ședință
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// FAQ data
const faqs = [
  {
    question: "Cum pot începe dacă sunt un pic nehotărât?",
    answer: "Putem începe cu o sesiune gratuită în care să discutăm despre situația ta și să vedem cum te pot ajuta."
  },
  {
    question: "Este posibil pentru mine dacă nu îmi place să vorbesc?",
    answer: "Absolut! Procesul meu este adaptat pentru fiecare client în parte, inclusiv pentru cei care preferă mai mult reflecția decât conversația."
  },
  {
    question: "De câte sesiuni am nevoie ca să văd rezultate?",
    answer: "Fiecare persoană este diferită, dar de obicei clienții observă schimbări semnificative după 4-6 sesiuni."
  },
  {
    question: "Ce se întâmplă dacă nu mă simt confortabil să vorbesc despre anumite aspecte?",
    answer: "Procesul este complet ghidat de tine. Nu vei fi niciodată forțat să vorbești despre ceva ce nu dorești."
  },
  {
    question: "Cum mă ajută acest proces să fiu mai eficient în carieră?",
    answer: "Prin clarificarea valorilor și direcției tale, vei putea lua decizii aliniate cu ceea ce ești cu adevărat, ceea ce duce la mai multă energie, motivație și eficiență."
  },
  {
    question: "Dacă nu sunt sigur ce vreau pentru viitorul meu?",
    answer: "Acesta este un punct excelent de pornire. Multe persoane vin la sesiuni tocmai pentru a descoperi ce își doresc cu adevărat."
  }
];

export default About;
