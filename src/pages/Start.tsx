// src/pages/Start.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Background premium discret */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-200/50 blur-3xl" />
        <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-purple-200/50 blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col px-6 py-10">
        {/* Header */}
        <div className="mt-8 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
            ✨ Premium Web Solutions
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Mendy Creation
            </span>
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Accès rapide à l’essentiel.
          </p>
        </div>

        {/* Quick actions */}
        <div className="mt-10 flex flex-col gap-4">
          <Link
            to="/about"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-base font-semibold">À propos</span>
            <span className="text-slate-400 transition group-hover:translate-x-0.5">→</span>
          </Link>

          <Link
            to="/projects"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-base font-semibold">Projets</span>
            <span className="text-slate-400 transition group-hover:translate-x-0.5">→</span>
          </Link>

          <Link
            to="/contact"
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-base font-semibold">Contact</span>
            <span className="text-slate-400 transition group-hover:translate-x-0.5">→</span>
          </Link>

          {/* Site complet */}
          <Link
            to="/"
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white shadow-md transition hover:opacity-95"
          >
            Voir le site complet
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-10 text-center text-xs text-slate-500">
          <p>© 2026 Mendy Creation</p>
          <a
            className="mt-2 inline-block underline underline-offset-4 hover:text-slate-700"
            href="https://mendycreation.fr/mentions-legales"
          >
            Mentions Légales
          </a>
        </div>
      </div>
    </div>
  );
}