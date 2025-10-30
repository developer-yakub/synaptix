import "./globals.css";
import { Roboto, Lora, Poppins, Montserrat, Open_Sans } from "next/font/google";


export const metadata = {
  title: "Synaptix Robotics",
  description: "A leading innovator in robotics and automation, dedicated to empowering education, industries, and individuals with smart, reliable, and future-ready technology solutions. We design and develop advanced robotics kits, IoT systems, and automation projects that bridge the gap between creativity and practical innovation. With a focus on learning, research, and real-world applications, we strive to inspire the next generation of thinkers, makers, and problem-solvers.",
  icons: {
    icon: "/favicon.ico",
  },
};


const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lora" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-poppins" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-montserrat" });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-opensans" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${lora.variable} ${poppins.variable} ${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <body
        className="antialiased dark"
      >
        {children}
      </body>
    </html>
  );
}