import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Youtube, ExternalLink, Sparkles } from "lucide-react"
import Image from "next/image"
import ComicFontStyle from "./components/ComicFontStyle"

const participants = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b1RaERbNPI7nynIR6tsJ4JUfmnFb4D.png",
    name: "Cheems",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-H1oCmOtldTo3frGA2B5kpAYyE7OEQ0.png",
    name: "dokuan",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AXkeMsF374XGrUy2bLzygCW0EbvDgx.png",
    name: "fwog",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AF4h5zuGnDnrPgJ5VhhVn9psyWwyYx.png",
    name: "sunbeans",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EVBveomwAITSaR2pDVdQLdkuDqP3YW.png",
    name: "burger",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5RhXRTqTELJFMNy97DFfRcyrW70KSR.png",
    name: "fiamma",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P046h5lqEwBvNxUFHa6pKXo2Wmbvmg.png",
    name: "neiro",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hf77TIw8MAGKYYSzSUgMgFDkqqT54d.png",
    name: "shaunmoon",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hmRiJnA1O0wnFZcqBGuLHvLZPfeLNs.png",
    name: "ikun",
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BSyAWgcW0gCv7Rr6FSmjEaUYrWkjoJ.png",
    name: "gaib",
  },
]

export default function MemediscoLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-purple-900 text-gray-100 font-comic">
      <ComicFontStyle />
      <header className="w-full py-4 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9m1CgUREdy1Dr4wAm9LzaMfSSdt2nb.png"
              alt="MemeDisco Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-purple-300 font-comic">Memedisco</span>
          </Link>
          <nav>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            >
              <Link
                href="https://disco.zkplay.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Play Now!
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-purple-300 leading-tight">Welcome to MemeDisco</h1>
            <p className="text-xl mb-8">Where memes dance, compete, and engage!</p>

            <div className="mb-12">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/4SmuqG5cYno"
                  title="MemeDisco Game Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <p className="text-lg mb-8">
                MemeDisco is the ultimate virtual dance hall where your favorite memes come to life! Choose your meme
                character, show off your moves, and compete for amazing rewards while engaging with a vibrant community
                of meme enthusiasts. Join us and experience the thrill of showcasing your adorable figures, competing
                for glory, and actively engaging with fellow meme lovers!
              </p>
            </div>

            <Button size="lg" className="bg-purple-500 text-white hover:bg-purple-400">
              <Link
                href="https://disco.zkplay.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Play Now
                <Youtube className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <section className="py-20 px-6 pb-4">
              <div className="max-w-4xl mx-auto text-center mb-0">
                <h2 className="text-4xl font-bold mb-8 text-purple-300">Hall of Fame</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                  Meet our legendary participants who have made MemeDisco's history unforgettable with their unique
                  styles and memorable performances.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                  {participants.map((participant, index) => (
                    <div
                      key={index}
                      className="group relative bg-gray-800 rounded-lg p-4 transition-transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                        <Image
                          src={participant.image || "/placeholder.svg"}
                          alt={participant.name}
                          fill
                          className="object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-purple-300">{participant.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="about" className="pt-4 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-6 mt-0 text-purple-300">Current Season</h3>
              <div className="relative w-full mb-8 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Oxgs3SbSIc1v6hLIrMiSdAIeHvxNYa.png"
                  alt="MemeDisco Current Season - Meme characters dancing on stage"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Previous Season Highlights</h3>
                <div className="relative w-full mb-4 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0wYGD6IJwlalSFsZ47itsGLEsrvSgE.png"
                    alt="MemeDisco Previous Season - New meme characters on the dance floor"
                    width={800}
                    height={450}
                    className="w-full h-auto"
                  />
                </div>
                <ul className="text-left mt-4">
                  <li className="mb-2">✨ Over 200,000 total votes received</li>
                  <li className="mb-2">🏆 Highest single entry: 11,000 votes</li>
                  <li>🎉 Intense competition and community engagement</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg text-left">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">MemeDisco Token (MMD) & Technology</h3>

                <div className="flex items-center gap-2 mb-4">
                  <div className="bg-[#F3BA2F] p-2 rounded-full">
                    <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                        fill="#F3BA2F"
                      />
                      <path
                        d="M12.116 14.404L16 10.52L19.886 14.406L22.146 12.146L16 6L9.856 12.144L12.116 14.404ZM6 16L8.26 13.74L10.52 16L8.26 18.26L6 16ZM12.116 17.596L16 21.48L19.886 17.594L22.146 19.853L16 26L9.856 19.856L9.853 19.853L12.116 17.596ZM21.48 16L23.74 13.74L26 16L23.74 18.26L21.48 16ZM16 13.813L18.187 16L16 18.187L13.813 16L16 13.813Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="font-medium">Deployed on BSC Chain</p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg mb-4">
                  <p className="text-sm break-all font-mono">
                    Token Address: 0x27e11ceC24f205DCeB469dcfA918af6e0CB7438c
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#1B2C41] to-[#172436] p-4 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold">Listed on MEXC</span>
                    <span className="text-xl font-bold">MMD</span>
                  </div>
                  <Link
                    href="https://www.mexc.com/exchange/MMD_USDT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm flex items-center hover:text-purple-300"
                  >
                    Trade on MEXC <ExternalLink className="w-4 h-4 ml-1" />
                  </Link>
                </div>

                <div className="mt-6">
                  <h4 className="text-xl font-bold mb-3 text-purple-300">Powered by ZKWASM Technology</h4>
                  <p className="text-sm mb-4">
                    MemeDisco operates on a zkWASM rollup powered by Delphinus Lab, a leading zkWASM rollup provider
                    enabling Web2 applications to seamlessly transition into Web3 with trustless security. This advanced
                    technology guarantees transparency, scalability, and a secure gaming experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h5 className="font-bold mb-1">Backend Code</h5>
                      <Link
                        href="https://github.com/riddles-are-us/puppy-party"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 flex items-center"
                      >
                        View on GitHub <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">ZKWASM Source</h5>
                      <Link
                        href="https://github.com/DelphinusLab/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 flex items-center"
                      >
                        Delphinuslab GitHub <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">ZKP Proofs</h5>
                      <Link
                        href="https://explorer.zkwasmhub.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-300 hover:text-purple-400 flex items-center"
                      >
                        ZKWASM Hub Explorer <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} MemeDisco. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://disco.zkplay.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              Play MemeDisco
            </Link>
            <Link
              href="https://x.com/0xMeMeDisco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              Twitter
            </Link>
            <Link
              href="https://discord.gg/gEHwqGsDqR"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-300"
            >
              Discord
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

