/* eslint-disable react/no-unescaped-entities */
// app/contact/page.tsx
'use client';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Let's discuss your next project or collaboration
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}