"use client";
import { IconCalendarEvent, IconClock, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import EventForm from "./components/form";
import Logo from "./components/logo";

export default function Page() {
  const details = [
    {
      icon: <IconMapPin size={20} />,
      label: "FICHTE45",
      addition: "Fichtestraße 45, 90489 Nürnberg",
    },
    {
      icon: <IconCalendarEvent size={20} />,
      label: "7. Juli 2025",
    },
    {
      icon: <IconClock size={20} />,
      label: "9:30 – 13:30 Uhr",
      addition: "danach Get-Together",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col gap-16 p-2 sm:p-8">
      <header className="flex flex-col items-center text-center gap-2 pb-4">
        <Logo />
        <p className="dimmed">
          Unser Digitalisierungspartner CoMo Solution lädt ein:
        </p>
        <h1>Sicher und sorgenfrei – mit Cybersecurity der Spitzenklasse!</h1>
        <h4>Ihr exklusives IT-Security-Event mit ArcticWolf</h4>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-16">
        <div className="flex flex-col gap-4 px-4 lg:px-8">
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
            Kommen Sie am <b>7. Juli 2025</b> ins <b>FICHTE45 Co-Working</b> und
            erleben ein exklusives Event mit CoMo Solution,
            Digitalisierungspartner des 1. FC Nürnberg, und ArcticWolf, dem
            Experten für Managed Security & Incident Response.
          </p>
          <p>
            Erhalten Sie Informationen aus erster Hand, wie Sie Ihr Unternehmen
            mit effizienten, KI-gestützten Lösungen schützen können und dabei
            auch Ihre eigene IT entlasten können.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "16 / 7" }}
          >
            <Image
              src="/fichte.png"
              alt="FICHTE45"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center bottom",
                filter: "brightness(0.9)",
              }}
            />
          </div>
          <div className="flex flex-col gap-4 px-4 lg:px-8">
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

        <div className="flex flex-col gap-4 px-4 lg:px-8 py-16 lg:py-8 lg:h-min lg:sticky lg:top-4">
          <h3>Das erwartet Sie:</h3>
          <ul>
            <li className="accordion">
              Cybersecurity-Insights: Die Security-Strategien von ArcticWolf
            </li>
            <li className="accordion">
              KI-gestützte Security-Lösungen für Ihr Unternehmen
            </li>
            <li className="accordion">
              Managed Security, die sich auch in bestehende
              IT-Sicherheitsstrukturen integriert
            </li>
            <li className="accordion">24/7-Monitoring & Incident Response</li>
            <li className="accordion">
              Entlastung Ihrer IT durch ein externes Expertenteam
            </li>
            <li className="accordion">
              Networking & Austausch mit Gästen und Experten
            </li>
          </ul>
          <p>Sichern Sie sich Ihren Platz – die Teilnehmerzahl ist begrenzt!</p>
          <p>
            <i>
              Das Team von CoMo Solution & ArcticWolf freut sich auf Ihren
              Besuch!
            </i>
          </p>
          <Image
            src="/aw.png"
            width="240"
            height="96"
            alt="CoMo x ArcticWolf"
            style={{
              opacity: "0.2",
            }}
          />
        </div>
        <EventForm />
      </div>
    </div>
  );
}
