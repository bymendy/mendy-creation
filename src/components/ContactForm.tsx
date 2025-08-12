// Fichier : src/components/ContactForm.tsx
import React, { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

interface FormDataShape {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  company?: string; // honeypot
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataShape>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [lastSentAt, setLastSentAt] = useState<number | null>(null);

  const formRef = useRef<HTMLFormElement>(null);

  const sanitize = (input: string): string =>
    input.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+()\s.-]{6,}$/;

    if (formData.company && formData.company.length > 0) return false; // Bot détecté

    const now = Date.now();
    if (lastSentAt && now - lastSentAt < 30000) {
      toast.warning("Merci de patienter avant de renvoyer un message.");
      return false;
    }

    if (formData.name.trim().length < 2) {
      toast.error("Merci d'entrer un nom valide.");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Merci d'entrer une adresse email valide.");
      return false;
    }

    if (!phoneRegex.test(formData.phone)) {
      toast.error("Merci d'entrer un numéro de téléphone valide.");
      return false;
    }

    if (formData.subject.trim().length < 3) {
      toast.error("Le sujet est trop court.");
      return false;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Merci de détailler davantage votre message.");
      return false;
    }

    if (!captchaToken) {
      toast.error("Veuillez valider le reCAPTCHA.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!validateForm()) return;

    // Nettoyage XSS minimal
    formData.name = sanitize(formData.name);
    formData.email = sanitize(formData.email);
    formData.phone = sanitize(formData.phone);
    formData.subject = sanitize(formData.subject);
    formData.message = sanitize(formData.message);

    setLastSentAt(Date.now());
    setLoading(true);

    try {
      const fd = new FormData(formRef.current);
      if (captchaToken) fd.append("token", captchaToken);

      // URL relative : même origine (prod)
      const response = await fetch("/send-mail.php", {
        method: "POST",
        body: fd,
      });

      let result: any = {};
      try {
        result = await response.json();
      } catch {
        // Si le JSON est illisible, on se base sur response.ok
      }

      if (response.ok) {
        toast.success(result?.success || "Message envoyé avec succès !");
        setIsSubmitted(true);

        // Reset visuel du <form> + reset du state
        formRef.current?.reset();
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          company: "",
        });

        setCaptchaToken(null);
        // Affiche le panneau "Message envoyé !" (pas de reload de page)
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        toast.error(result?.error || "Une erreur est survenue, veuillez réessayer.");
      }
    } catch {
      toast.error("Impossible d'envoyer le message. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/10 backdrop-blur p-8 rounded-2xl text-center shadow-lg">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-200/30 rounded-full mb-4">
          <CheckCircle className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold mb-2 text-black">Message envoyé !</h3>
        <p className="text-blue-400">
          Merci de nous avoir contacté. Une copie de votre message vous a été envoyée.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur p-8 rounded-2xl space-y-6 shadow-xl"
      data-aos="fade-down"
    >
      <input type="hidden" name="timestamp" value={new Date().toLocaleString()} />

      {/* Honeypot anti-bot */}
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        className="hidden"
        autoComplete="off"
        tabIndex={-1}
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-black mb-2">Nom complet *</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-black bg-white/5 border border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg text-black bg-white/5 border border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">Téléphone *</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-black bg-white/5 border border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">Sujet *</label>
        <input
          type="text"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-black bg-white/5 border border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none"
          placeholder="Projet, question, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-black mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg text-black bg-white/5 border border-white/20 placeholder-gray-300 focus:ring-2 focus:ring-blue-300 focus:outline-none resize-vertical"
          placeholder="Dites-nous en plus..."
        />
      </div>

      <ReCAPTCHA
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={(token: string | null) => setCaptchaToken(token)}
        className="flex justify-center"
      />

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
        <button
          type="submit"
          disabled={loading}
          className="group bg-[#fde68a] hover:bg-[#fcd34d] text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-2 hover:scale-105 disabled:opacity-60"
        >
          <span>{loading ? "Envoi en cours..." : "Envoyer un message"}</span>
          <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          type="reset"
          onClick={() =>
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
              company: "",
            })
          }
          className="group border-2 border-[#60a5fa] text-[#60a5fa] hover:border-[#2563eb] hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#60a5fa]/10 hover:scale-105"
        >
          Effacer
        </button>
      </div>
    </form>
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
};

export default ContactForm;
