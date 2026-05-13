"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon } from "./icons";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      requirement: String(formData.get("requirement") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setState("success");
      setMessage("Request sent. We will get back to you shortly.");
    } catch {
      setState("error");
      setMessage("Could not send right now. Please try again.");
    }
  }

  return (
    <form className="card contactForm" onSubmit={onSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hpField"
        aria-hidden="true"
      />
      <div className="formRow">
        <label className="label">
          Name
          <input className="input" name="name" placeholder="Your name" required />
        </label>
        <label className="label">
          Company
          <input
            className="input"
            name="company"
            placeholder="Company / Industry"
            required
          />
        </label>
      </div>
      <div className="formRow">
        <label className="label">
          Email
          <input
            className="input"
            name="email"
            type="email"
            placeholder="name@company.com"
            required
          />
        </label>
        <label className="label">
          Phone
          <input className="input" name="phone" placeholder="+91 ..." required />
        </label>
      </div>
      <label className="label">
        Requirement
        <textarea
          className="textarea"
          name="requirement"
          placeholder="Material, operation, machine, current tool, and quantity."
          rows={6}
          required
        />
      </label>
      <div className="formActions">
        <button className="btn btnPrimary" type="submit" disabled={state === "sending"}>
          {state === "sending" ? "Sending..." : "Send Request"} <ArrowRightIcon />
        </button>
        {message ? <span className="muted formNote">{message}</span> : null}
      </div>
    </form>
  );
}
