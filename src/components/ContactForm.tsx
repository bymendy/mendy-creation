// Fichier : src/components/ContactForm.tsx
import React, { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

type ReCAPTCHAInstance = {
  reset: () => void;
  execute?: () => void;
  getValue?: () => string | null;
};

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
  const [acceptRGPD, setAcceptRGPD] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHAInstance | null>(null);

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

    // RGPD obligatoire
    if (!acceptRGPD) {
      toast.error("Vous devez accepter la politique de confidentialité.");
      return false;
    }

    // reCAPTCHA SOUPLE côté client : on n'empêche pas l'envoi si pas de token
    if (!captchaToken) {
      toast.warning("reCAPTCHA indisponible — nous tentons quand même l’envoi.");
      // pas de return false ici
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

      // Timeout (15s) pour éviter les requêtes qui pendent
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 15000);

      // URL absolue (racine) : évite que la SPA avale la requête
      const response = await fetch("/send-mail.php", {
        method: "POST",
        body: fd,
        signal: controller.signal,
      }).finally(() => clearTimeout(id));

      // Tolérant aux réponses non-JSON (ex: HTML d’erreur)
      const raw = await response.text();
      let result: any = {};
      try {
        result = JSON.parse(raw);
      } catch {
        // noop – raw n'est pas JSON
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
        recaptchaRef.current?.reset();

        // Affiche le panneau "Message envoyé !" (pas de reload de page)
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        toast.error(result?.error || "Une erreur est survenue, veuillez réessayer.");
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      }
    } catch (err: unknown) {
      const msg =
        err instanceof DOMException && err.name === "AbortError"
          ? "Délai dépassé. Réessayez dans un instant."
          : "Impossible d'envoyer le message. Veuillez réessayer plus tard.";

      toast.error(msg);
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
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

      {/* RGPD */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          id="acceptRGPD"
          checked={acceptRGPD}
          onChange={(e) => setAcceptRGPD(e.target.checked)}
          className="mt-1"
          required
        />
        <label htmlFor="acceptRGPD" className="text-sm text-black">
           En cochant la case oui, j'accepte que mes données personnelles soient collectées et utilisées conformément à la {" "}             
           <a
            href="/politique-de-confidentialite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            politique de confidentialité
          </a>, dans le but dans le but de me recontacter.{" "}
        </label>
      </div>
    
      <ReCAPTCHA
        ref={(el: unknown) => {
          recaptchaRef.current = el as ReCAPTCHAInstance | null;
        }}
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY as string}
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
