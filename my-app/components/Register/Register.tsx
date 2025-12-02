'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  password: string;
  confirm: string;
};

export default function Register(){
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = (): Partial<FormState> => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Nombre requerido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (form.password.length < 6) e.password = "Min 6 caracteres";
    if (form.password !== form.confirm) e.confirm = "No coinciden";
    return e;
  };

  const handleChange = (k: keyof FormState) => (ev: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [k]: ev.target.value }));

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    // simulación front-only
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => router.push("/login"), 1000);
    }, 900);
  };

  return (
    
    <div className="pt-[15vh] w-full p-6 sm:p-8 lg:p-10">
      <div className="mt-[14vh] w-full p-6 sm:p-8 lg:p-10">
        <div className="w-full max-w-md mx-auto"></div>
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Crea tu cuenta</h2>
          <p className="text-sm text-gray-600">Regístrate y empieza a colaborar con CollabOwl</p>
        </div>

        {success && (
          <div className="p-3 mb-4 rounded bg-green-50 border border-green-200 text-green-800">
            Registro exitoso. Redirigiendo...
          </div>
        )}

        <div className="space-y-4 mb-6">
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-md hover:bg-gray-50 transition" type="button">
            <FcGoogle className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Registrarse con Google</span>
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-md hover:bg-gray-50 transition" type="button">
            <FaGithub className="w-5 h-5 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Registrarse con GitHub</span>
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-3 text-gray-500 text-sm">o con email</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input value={form.name} onChange={handleChange("name")} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 outline-none" />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input value={form.email} onChange={handleChange("email")} type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 outline-none" />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input value={form.password} onChange={handleChange("password")} type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 outline-none" />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirmar</label>
              <input value={form.confirm} onChange={handleChange("confirm")} type="password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-400 outline-none" />
              {errors.confirm && <p className="mt-1 text-sm text-red-600">{errors.confirm}</p>}
            </div>
          </div>

          <button type="submit" disabled={loading} className="w-full py-2.5 bg-[#243c5a] text-white rounded-md font-semibold hover:opacity-95 transition disabled:opacity-60">
            {loading ? "Creando..." : "Crear cuenta"}
          </button>

          <p className="text-center text-sm text-gray-600 mt-3">
            ¿Ya tienes cuenta? <a href="/login" className="text-cyan-500 hover:underline">Inicia sesión</a>
          </p>
        </form>
      </div>
    </div>
  );
}