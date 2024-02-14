
function Privacity() {
  return (
    <div>
      <section className="bg-white">
        <div className="lg:grid lg:min-h-screen ">

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Squid 🦑
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                  quibusdam aperiam voluptatum.
                </p>
              </div>

              <div className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 w-full">
                <img
                  alt=""
                  src="https://t3.ftcdn.net/jpg/04/66/87/66/360_F_466876691_4SMO0C89c9GKiqHzbqhCeMp57QvxP6zh.jpg"
                  className="h-32 w-full object-cover md:h-full"
                />

                <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest">
                    Política de Privacidad
                  </p>

                  <h2 className="mt-6 font-black uppercase">
                    <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                      Protección de Datos
                    </span>

                    <span className="mt-2 block text-sm">
                      Tus datos están seguros con nosotros
                    </span>
                  </h2>

                  <p className="mt-8 text-sm text-gray-700">
                    En nuestra plataforma, nos comprometemos a proteger tu privacidad. No compartiremos tus datos personales con terceros sin tu consentimiento.
                  </p>

                  <p className="mt-4 text-sm text-gray-700">
                    Al aceptar nuestra Política de Privacidad, estás de acuerdo con el uso de tus datos de acuerdo con nuestras prácticas.
                  </p>

                  <button
                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 mt-[10px]"
              >
                Continuar
              </button>


                  <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                    Oferta válida hasta el 24 de marzo de 2021 *
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

export default Privacity;
