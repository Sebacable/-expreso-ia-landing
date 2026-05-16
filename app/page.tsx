// app/page.tsx
// Landing: ia.expresoit.com
// Stack: Next.js 14 (App Router) + Tailwind CSS
// Fuentes: Fraunces (display) + Inter Tight (body) — cargar via next/font/google

"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5491131871886"; // <-- REEMPLAZAR con tu número real (formato internacional sin +)
const WA_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

const waLink = (msg: string) =>
  `${WA_BASE}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0e0d0b] text-[#f0ece4] font-body antialiased overflow-x-hidden">
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* NAV */}
      <nav
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0e0d0b]/85 backdrop-blur-md border-b border-[#f0ece4]/5 py-3"
            : "py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display text-xl tracking-tight">
            expreso<span className="text-[#d97757]">.ia</span>
          </a>
          <a
            href={waLink("Hola! Vi la web y quiero saber más sobre las automatizaciones.")}
            className="text-sm border border-[#f0ece4]/20 hover:border-[#d97757] hover:text-[#d97757] transition-all px-4 py-2 rounded-full"
          >
            Hablemos
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6">
        {/* Decoración geométrica */}
        <div
          aria-hidden
          className="absolute top-32 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, #d97757 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#d97757] mb-8">
            <span className="w-8 h-px bg-[#d97757]" />
            Automatización con IA · Buenos Aires
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-8 max-w-5xl">
            Tu negocio no necesita
            <br />
            <em className="text-[#d97757] not-italic font-display">más gente</em>.
            <br />
            Necesita <span className="italic">menos tareas</span>
            <br />
            repetidas.
          </h1>

          <p className="text-lg md:text-xl text-[#f0ece4]/70 max-w-2xl mb-12 leading-relaxed">
            Diseñamos asistentes con IA que responden tu WhatsApp, clasifican tus
            mails y cargan tus datos. Mientras vos te ocupás de lo que importa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href={waLink("Hola! Quiero un diagnóstico gratis para mi negocio.")}
              className="group bg-[#d97757] hover:bg-[#c66948] text-[#0e0d0b] px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-3"
            >
              Pedir diagnóstico gratis
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 text-[#f0ece4]/80 hover:text-[#f0ece4] transition-colors inline-flex items-center gap-2"
            >
              Ver qué hacemos
              <span className="text-[#d97757]">↓</span>
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-24 grid grid-cols-3 gap-6 md:gap-12 border-t border-[#f0ece4]/10 pt-12 max-w-3xl">
            {[
              { num: "24/7", label: "Atención sin pausa" },
              { num: "7 días", label: "De setup a producción" },
              { num: "x10", label: "Velocidad de respuesta" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-5xl text-[#d97757] mb-1">
                  {s.num}
                </div>
                <div className="text-xs md:text-sm text-[#f0ece4]/50 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section className="px-6 py-24 border-t border-[#f0ece4]/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="text-xs tracking-[0.2em] uppercase text-[#d97757] mb-4">
              · 01 ·
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Mientras leés esto, alguien está dejando tu negocio
              porque <em className="text-[#d97757]">nadie respondió</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4 space-y-6 text-[#f0ece4]/75 text-lg leading-relaxed">
            <p>
              Las PyMEs argentinas pierden clientes todos los días por la misma
              razón: WhatsApp sin responder, mails sin contestar, pedidos por
              Instagram que se traspapelan entre 200 DMs.
            </p>
            <p>
              Contratar más gente no es la respuesta — los costos laborales
              están por las nubes y la rotación es altísima. Pero tampoco hace
              falta un sistema corporativo de USD 50.000.
            </p>
            <p className="text-[#f0ece4] font-medium">
              Hace falta automatizar lo repetitivo. Eso es lo que hacemos.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-24 border-t border-[#f0ece4]/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-[#d97757] mb-4">
                · 02 · Servicios
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight max-w-2xl">
                Tres soluciones probadas. Listas en una semana.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#f0ece4]/10">
            {[
              {
                num: "I",
                title: "Asistente WhatsApp 24/7",
                desc: "Responde consultas frecuentes, agenda turnos y deriva a un humano cuando hace falta. Tu cliente nunca queda esperando.",
                ideal: "Inmobiliarias, consultorios, escuelas, e-commerce",
                price: "Desde USD 400",
                fee: "+ USD 80/mes",
              },
              {
                num: "II",
                title: "Clasificador de mails",
                desc: "Lee tu casilla, separa lo urgente de lo spam, responde lo simple y te avisa solo cuando hace falta vos.",
                ideal: "Estudios contables, jurídicos, profesionales",
                price: "Desde USD 500",
                fee: "+ USD 100/mes",
              },
              {
                num: "III",
                title: "Captura de leads → CRM",
                desc: "Lo que entra por Instagram, WhatsApp, web y mail se unifica automáticamente en una sola planilla con todos los datos.",
                ideal: "Comercios con presencia multicanal",
                price: "Desde USD 600",
                fee: "+ USD 120/mes",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="bg-[#0e0d0b] p-8 lg:p-10 group hover:bg-[#16140f] transition-colors duration-500"
              >
                <div className="font-display text-6xl text-[#d97757]/30 group-hover:text-[#d97757] transition-colors mb-8">
                  {s.num}
                </div>
                <h3 className="font-display text-2xl mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-[#f0ece4]/70 mb-6 leading-relaxed">
                  {s.desc}
                </p>
                <div className="text-xs text-[#f0ece4]/50 uppercase tracking-wider mb-1">
                  Ideal para
                </div>
                <div className="text-sm text-[#f0ece4]/80 mb-8">{s.ideal}</div>
                <div className="border-t border-[#f0ece4]/10 pt-4 flex items-baseline justify-between">
                  <div>
                    <div className="font-display text-xl text-[#d97757]">
                      {s.price}
                    </div>
                    <div className="text-xs text-[#f0ece4]/50">{s.fee}</div>
                  </div>
                  <a
                    href={waLink(`Hola! Me interesa el servicio: ${s.title}`)}
                    className="text-sm underline underline-offset-4 decoration-[#d97757]/40 hover:decoration-[#d97757] hover:text-[#d97757] transition-colors"
                  >
                    Lo quiero
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="px-6 py-24 border-t border-[#f0ece4]/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs tracking-[0.2em] uppercase text-[#d97757] mb-4">
            · 03 · Cómo trabajamos
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-3xl">
            De la primera charla a tu negocio automatizado en 7 días.
          </h2>

          <div className="space-y-px bg-[#f0ece4]/10">
            {[
              {
                day: "Día 1",
                title: "Diagnóstico",
                desc: "Charla de 30 min gratis. Identificamos qué tarea repetitiva está costándote más tiempo y plata.",
              },
              {
                day: "Día 2-3",
                title: "Propuesta y diseño",
                desc: "Te entregamos un plan concreto: qué automatizamos, cómo, cuánto y qué resultado esperar.",
              },
              {
                day: "Día 4-6",
                title: "Construcción",
                desc: "Armamos el flujo, lo conectamos con tus herramientas (WhatsApp, Sheets, Gmail, lo que uses) y lo probamos a fondo.",
              },
              {
                day: "Día 7",
                title: "Lanzamiento",
                desc: "Va a producción con monitoreo activo. Te capacitamos a vos y a tu equipo. Después: soporte mensual.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-[#0e0d0b] grid md:grid-cols-12 gap-6 p-8 lg:p-10 hover:bg-[#16140f] transition-colors"
              >
                <div className="md:col-span-2 font-display text-2xl text-[#d97757]">
                  {step.day}
                </div>
                <div className="md:col-span-4 font-display text-2xl">
                  {step.title}
                </div>
                <div className="md:col-span-6 text-[#f0ece4]/70 leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 border-t border-[#f0ece4]/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-xs tracking-[0.2em] uppercase text-[#d97757] mb-4">
            · 04 · Dudas frecuentes
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-16">
            Lo que casi todos nos preguntan.
          </h2>

          <div className="space-y-px bg-[#f0ece4]/10">
            {[
              {
                q: "¿Sirve si mi negocio es chico?",
                a: "Sí. De hecho los más beneficiados son negocios de 1 a 20 personas, donde el dueño hace de todo. Una automatización bien hecha es como sumar medio empleado al equipo, pero sin sueldo ni vacaciones.",
              },
              {
                q: "¿Reemplaza a mi equipo?",
                a: "No. Reemplaza tareas, no personas. Tu gente se libera de lo aburrido y se dedica a lo que da plata: vender, atender bien, decidir.",
              },
              {
                q: "¿Y si la IA dice una boludez?",
                a: "Las configuramos con reglas estrictas y casos de derivación a humano. Si el bot no está seguro, te pasa la pelota. Cero respuestas inventadas.",
              },
              {
                q: "¿Necesito saber de tecnología?",
                a: "Para nada. Nosotros nos encargamos del setup, del mantenimiento y de las actualizaciones. Vos solo recibís resultados.",
              },
              {
                q: "¿Cobran en pesos o dólares?",
                a: "Como prefieras. Aceptamos transferencia, MercadoPago, cripto y dólares en efectivo. El precio se ajusta mensualmente al tipo de cambio oficial.",
              },
            ].map((f, i) => (
              <details
                key={i}
                className="bg-[#0e0d0b] p-6 lg:p-8 group cursor-pointer hover:bg-[#16140f] transition-colors"
              >
                <summary className="flex items-center justify-between font-display text-xl list-none">
                  {f.q}
                  <span className="text-[#d97757] text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[#f0ece4]/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-32 border-t border-[#f0ece4]/10 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #d97757 0%, transparent 60%)",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mb-8">
            Tu competencia ya<br />
            <em className="text-[#d97757] not-italic">está automatizando</em>.
          </h2>
          <p className="text-xl text-[#f0ece4]/70 mb-12 max-w-2xl mx-auto">
            Un diagnóstico de 30 minutos es gratis. Salimos con un plan concreto
            o con la certeza de que todavía no lo necesitás.
          </p>
          <a
            href={waLink("Hola! Quiero agendar el diagnóstico gratuito.")}
            className="inline-flex items-center gap-3 bg-[#d97757] hover:bg-[#c66948] text-[#0e0d0b] px-10 py-5 rounded-full text-lg font-medium transition-all"
          >
            Agendar por WhatsApp
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-12 border-t border-[#f0ece4]/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-xl">
            expreso<span className="text-[#d97757]">.ia</span>
          </div>
          <div className="text-sm text-[#f0ece4]/50">
            Una división de Expreso IT · Buenos Aires, Argentina
          </div>
          <a
            href="https://expresoit.com"
            className="text-sm text-[#f0ece4]/50 hover:text-[#d97757] transition-colors"
          >
            expresoit.com →
          </a>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={waLink("Hola! Vengo de la web ia.expresoit.com")}
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:scale-110 transition-transform w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        aria-label="WhatsApp"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#0e0d0b"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </main>
  );
}
