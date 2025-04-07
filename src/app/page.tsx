"use client";
import { IconCalendarEvent, IconClock, IconMapPin } from "@tabler/icons-react";
import EventForm from "./components/form";
import Logo from "./components/logo";

export default function Page() {
  const details = [
    {
      icon: <IconCalendarEvent size={20} />,
      label: "22. Mai 2025",
    },
    {
      icon: <IconClock size={20} />,
      label: "9:30 – 13:00 Uhr",
      addition: "danach Get-Together",
    },
    {
      icon: <IconMapPin size={20} />,
      label: "FICHTE45",
      addition: "Fichtestraße 45, 90489 Nürnberg",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col gap-16 p-2 sm:p-8">
      <header className="flex flex-col items-center text-center gap-2 pb-4">
        <Logo />
        <p className="dimmed">
          Unser Digitalisierungspartner CoMo Solution lädt ein:
        </p>
        <h1>Richtig verteidigt – mit Cybersecurity der Spitzenklasse!</h1>
        <h4>Ihr exklusives IT-Security-Event mit ArcticWolf</h4>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-4 px-8">
          <p>
            Eine robuste Verteidigung kann in vielen Bereichen entscheidend
            sein, nicht nur im Fußball. Auch für Organisationen und Unternehmen
            ist eine starke Abwehr von digitalen Gefahren sehr wichtig. Denn
            Cyberbedrohungen nehmen stetig zu und Unternehmen jeder Größe stehen
            vor der Herausforderung, sich gegen Angriffe zu schützen. Doch wie
            gelingt eine sichere Abwehr? Was können Unternehmen tun, damit die
            IT-Abteilungen mit der Überwachung und den Meldungen nicht
            überlastet werden?
          </p>
          <p>
            Kommen Sie am 22. Mai 2025 ins FICHTE45 Co-Working und erleben ein
            exklusives Event mit CoMo Solution, Digitalisierungspartner des 1.
            FC Nürnberg, und ArcticWolf, dem Experten für Managed Security &
            Incident Response.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p>
            Erhalten Sie Informationen aus erster Hand, wie Sie Ihr Unternehmen
            mit effizienten, KI-gestützten Lösungen schützen können und dabei
            auch Ihre eigene IT entlasten können.
          </p>
          <div className="flex flex-col gap-4 py-8">
            {details.map((d, i) => {
              return (
                <div key={i} className="flex items-center gap-4">
                  {d.icon}
                  <p>
                    <b>{d.label}</b> {d.addition}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-8 lg:h-min lg:sticky lg:top-4">
          <h3>Das erwartet Sie:</h3>
          <ul>
            <li>
              Cybersecurity-Insights: Die Security-Strategien von ArcticWolf
            </li>
            <li>Best Practices für den Schutz Ihrer IT-Infrastruktur</li>
            <li>
              Impulsvortrag des 1. FC Nürnberg: „Es kommt auf die richtige
              Verteidigung an“
            </li>
            <li>Networking & Austausch mit Experten und Entscheidern</li>
          </ul>
          <p>Sichern Sie sich Ihren Platz – die Teilnehmerzahl ist begrenzt!</p>
          <p>Wir freuen uns auf Sie!</p>
          <p>
            <b>Ihr Team von CoMo Solution & ArcticWolf</b>
          </p>
        </div>
        <EventForm />
      </div>
    </div>
  );
}
