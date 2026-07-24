/* eslint-disable react/no-unescaped-entities */
// app/contact/page.tsx
'use client';

export default function ContactPage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-black">Get In Touch</h2>
          <p className="text-gray-600">
            Open to thoughtful collaborations and serious conversations.
          </p>
        </div>
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <a
            href="mailto:isaac@fusevarsity.com"
            className="w-full bg-black text-white py-4 px-6 border-2 border-black text-center font-medium transition hover:bg-white hover:text-black"
          >
            Email me — isaac@fusevarsity.com
          </a>
          <a
            href="https://wa.me/2349110618359"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white text-black py-4 px-6 border-2 border-black text-center font-medium transition hover:bg-black hover:text-white"
          >
            Message me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
