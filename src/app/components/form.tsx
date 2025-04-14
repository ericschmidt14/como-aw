"use client";
import { Button, Checkbox, Paper, TextInput } from "@mantine/core";
import Image from "next/legacy/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { validateEmail } from "../lib/utils";

export default function EventForm() {
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
  });
  const [privacy, setPrivacy] = useState(false);

  const HOOK_API = "https://hook.como-solution.de/api/runtask?taskid=0";

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: ChangeEvent<any>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return !success ? (
    <Paper bg="rgb(0, 0, 0)" className="relative">
      <div className="absolute -top-40 -right-32">
        <Image src="/bg3.svg" width="320" height="320" alt="Bg" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch(`${HOOK_API}&src=kontaktformular&type=EVENT_INVITE`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
              {
                name: `${data.firstName} ${data.lastName}`,
                company: data.company,
                email: data.email,
                created: new Date(),
                type: "EVENT_INVITE",
                url: window.location.href,
              },
              null,
              2
            ),
          })
            .then((res) => res.text())
            .then(() => {
              setSuccess(true);
            })
            .catch((error) => console.error(error));
        }}
        className={`flex flex-col gap-8 p-8 shadow-orange-500/20`}
      >
        <div className="flex flex-col gap-4">
          <h4>Ihre Anmeldung</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              name="firstName"
              label="Vorname"
              onChange={handleChange}
              withAsterisk
            />
            <TextInput
              name="lastName"
              label="Nachname"
              onChange={handleChange}
              withAsterisk
            />
          </div>
          <TextInput
            name="company"
            label="Unternehmen"
            onChange={handleChange}
          />
          <TextInput
            name="email"
            label="E-Mail"
            onChange={handleChange}
            withAsterisk
          />
        </div>
        <Checkbox
          label={
            <>
              Ich habe die{" "}
              <Link
                href="https://www.fcn.de/standards/datenschutzerklaerung/"
                target="_blank"
              >
                Datenschutzhinweise
              </Link>{" "}
              zur Kenntnis genommen. Ich stimme zu, dass meine Daten zur
              Erfassung der Anmeldung elektronisch erhoben und gespeichert
              werden.
            </>
          }
          checked={privacy}
          onChange={() => setPrivacy(!privacy)}
        />

        <Button
          type="submit"
          disabled={
            data.firstName.length === 0 ||
            data.lastName.length === 0 ||
            !validateEmail(data.email) ||
            !privacy
          }
        >
          Jetzt kostenlos anmelden
        </Button>
      </form>
    </Paper>
  ) : (
    <Paper bg="rgb(0, 0, 0)">
      <div className="h-full flex flex-col gap-2 items-center justify-center p-4">
        <h4>Vielen Dank!</h4>
        <p className="dimmed">
          Wir haben Ihre Anmeldung erhalten und melden uns in Kürze mit weiteren
          Details.
        </p>
      </div>
    </Paper>
  );
}
