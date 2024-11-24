import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200 p-6">
      <div className="bg-white shadow-2xl rounded-lg p-8 max-w-md text-center transform transition duration-500 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Fetch Data API
        </h1>
        <p className="text-gray-700 mb-6 text-lg leading-relaxed">
          Click the button below to fetch data from an external API with ease.
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-indigo-500 hover:to-blue-500 hover:shadow-lg hover:shadow-indigo-500/50 active:scale-95 transition-transform duration-300">
          <Link href="/fetch-posts" className="w-full h-full block">
            Fetch Data from External API
          </Link>
        </button>
      </div>
    </div>
  );
}
