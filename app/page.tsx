import Link from "next/link";

const accentColor = "text-teal-600";

export default function UnderConstructionPage() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl rounded-3xl bg-white/60 p-10 text-center shadow-lg shadow-gray-200/60 backdrop-blur transition-opacity duration-700 ease-out animate-fade-in">
          <h1 className={`text-3xl font-semibold sm:text-4xl md:text-5xl ${accentColor} animate-pulse-soft`}>
            This project is currently under construction
          </h1>
          <p className="mt-6 text-base text-gray-600 sm:text-lg">
            For more information:
          </p>
          <div className="mt-8">
            <Link
              href="https://wa.me/255745120140"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-base font-medium text-white transition transform hover:-translate-y-0.5 hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 active:translate-y-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Call / WhatsApp 0745-120-140
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

