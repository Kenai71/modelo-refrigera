import "./globals.css";

export const metadata = {
  title: "FrioMax Climatização | Vendas, Instalação e Manutenção",
  description:
    "Especialistas em refrigeração comercial e residencial. Oferecemos serviços de climatização, manutenção, projetos, vendas e assistência técnica em ar condicionado.",
  keywords: "ar condicionado, climatização, refrigeração, manutenção, instalação, projetos, assistência técnica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
