"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [forgotOpen, setForgotOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotSent, setForgotSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      mode: "cors",
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Error HTTP ${res.status}: ${text}`);
    }

    const data = await res.json();

    // ✅ Cambiar esta condición:
    if (data.success) {  // ← Era "data.status === 'ok'"
      alert(`¡Bienvenido ${data.full_name || data.email}!`);
      // Aquí puedes redirigir:
      // router.push('/dashboard');
    } else {
      alert("Error al iniciar sesión");
    }
  } catch (err: any) {
    console.error(err);
    alert("Error de conexión con backend: " + err.message);
  }
};

  const handleForgotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForgotSent(true);
    setTimeout(() => {
      setForgotOpen(false);
      setForgotSent(false);
      setForgotEmail("");
      alert(
        "Si el correo existe, se ha enviado un enlace para restablecer la contraseña."
      );
    }, 800);
  };

  return (
    <div className="pt-[22vh] min-h-screen flex items-start justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* LEFT — FORM */}
        <div className="h-full flex items-center justify-center p-6 lg:p-10 overflow-y-auto">
          <div className="w-full max-w-md">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Bienvenido de Vuelta
            </h1>
            <p className="text-gray-600 mb-6">
              Inicia sesión para continuar en CollabOwl
            </p>

            {/* Social Login */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-md hover:bg-gray-100 transition">
                <FcGoogle className="w-5 h-5" />
                <span className="text-sm font-semibold text-gray-700">
                  Sign in with Google
                </span>
              </button>

              <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-md hover:bg-gray-100 transition">
                <FaGithub className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-semibold text-gray-700">
                  Sign in with GitHub
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-3 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* EMAIL */}
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="email@example.com"
                required
              />

              {/* PASSWORD */}
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="********"
                required
              />

              <div className="flex items-center justify-between mb-6">
                <div />
                <button
                  type="button"
                  onClick={() => setForgotOpen(true)}
                  className="text-sm text-[#243c5a] font-medium hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-[#243c5a] hover:bg-[#4a6fa5] text-white py-2.5 rounded-md text-sm font-semibold transition"
              >
                Sign In
              </button>
            </form>

            {/* REGISTER LINK */}
            <p className="text-center text-gray-600 mt-4">
              ¿No tienes una cuenta?{" "}
              <a
                href="#"
                className="text-[#243c5a] font-medium hover:underline"
              >
                Crea una
              </a>
            </p>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="hidden lg:block w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Forgot Password Modal */}
      {forgotOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Recuperar contraseña
              </h3>
              <button
                onClick={() => setForgotOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Cerrar
              </button>
            </div>

            {!forgotSent ? (
              <form onSubmit={handleForgotSubmit} className="space-y-4">
                <p className="text-sm text-gray-600">
                  Ingresa tu email y te enviaremos un enlace para restablecer la
                  contraseña.
                </p>
                <input
                  type="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  autoFocus
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setForgotOpen(false)}
                    className="px-4 py-2 border rounded-md"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#243c5a] text-white rounded-md"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-sm text-gray-700 mb-4">
                  Si el correo existe en nuestro sistema, recibirás un enlace para
                  restablecer tu contraseña.
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => setForgotOpen(false)}
                    className="px-4 py-2 bg-[#243c5a] text-white rounded-md"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
