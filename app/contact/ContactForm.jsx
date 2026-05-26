"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send inquiry.");
      }

      setForm(initialForm);
      setStatus("success");
      setNotice("Your inquiry has been sent. We will contact you shortly.");
    } catch (error) {
      setStatus("error");
      setNotice(error.message || "Something went wrong. Please try again.");
    }
  };

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="4"
        placeholder="Your Message"
        required
        className="w-full rounded-xl border px-4 py-3"
      />

      {notice && (
        <p
          className={`rounded-xl px-4 py-3 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
          }`}
        >
          {notice}
        </p>
      )}

      <button
        type="submit"
        disabled={isSending}
        className="w-full rounded-xl bg-neutral-900 py-3 text-white transition hover:bg-yellow-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSending ? "Sending..." : "Submit Inquiry"}
      </button>
    </form>
  );
}
