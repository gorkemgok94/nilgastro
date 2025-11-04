import React from "react";

const Datenschutz = () => {
  return (
    <div className="privacy-policy max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Datenschutzerklärung</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Webseite:
          <br />
          Nil Gastronomie inh. Hakan Topalca
          <br />
          Vertreten durch Görkem Gök
          <br />
          E-Mail: nilgastro@outlook.default
          <br />
          Adresse: Benzstr. 5, 71149 Bondorf, Deutschland
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">2. Erhebung und Verarbeitung von Daten</h2>
        <p>
          Wir erheben nur die Daten, die für die Nutzung unserer Webseite oder die Abwicklung von Bestellungen notwendig sind:
        </p>
        <ul className="list-disc ml-6">
          <li>Name, Adresse und E-Mail aus dem Kontakt- und Bestellformular</li>
          <li>Bestellinformationen für die Bearbeitung und gesetzliche Aufbewahrung</li>
          <li>Daten beim Zugriff auf externe Inhalte wie Social-Media-Links, Google Maps oder Produktbilder von Drittseiten</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">3. Zweck der Verarbeitung</h2>
        <p>
          - Bearbeitung von Anfragen und Bestellungen
          <br />
          - Erfüllung gesetzlicher und steuerlicher Pflichten
          <br />
          - Darstellung externer Inhalte (z. B. Social Media, Google Maps)
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">4. Rechtsgrundlage</h2>
        <p>
          - Art. 6 Abs. 1 lit. b DSGVO – Vertragsdurchführung (Bestellungen)
          <br />
          - Art. 6 Abs. 1 lit. c DSGVO – gesetzliche Pflichten (Aufbewahrung, Steuerzwecke)
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">5. Weitergabe von Daten</h2>
        <p>
          Daten werden ausschließlich an unseren Steuerberater weitergegeben, soweit gesetzlich erforderlich.  
          Eine Weitergabe an Dritte für Marketingzwecke erfolgt nicht.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">6. Speicherdauer</h2>
        <p>
          Bestellungen und Kontaktdaten werden mindestens 10 Jahre gespeichert, um gesetzlichen Aufbewahrungspflichten zu genügen.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">7. Rechte der Nutzer</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten,  
          soweit gesetzlich zulässig, sowie auf Widerspruch gegen die Verarbeitung, soweit gesetzlich zulässig.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">8. Nutzung externer Inhalte</h2>
        <p>
          Unsere Webseite kann Links zu Social-Media-Plattformen und Google Maps enthalten.  
          Für die Verarbeitung Ihrer Daten auf diesen externen Seiten sind ausschließlich die jeweiligen Betreiber verantwortlich.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">9. Kontakt für Datenschutzanfragen</h2>
        <p>
          Bei Fragen zum Datenschutz wenden Sie sich bitte an den oben genannten Betreiber.
        </p>
      </section>
    </div>
  );
};

export default Datenschutz;
