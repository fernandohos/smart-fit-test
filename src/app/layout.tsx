import FormProvider from "../contexts/FormContext";
import UnitsProvider from "../contexts/UnitsContext";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reabertura Smart Fit",
  description:
    "O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <UnitsProvider>
          <FormProvider>{children}</FormProvider>
        </UnitsProvider>
      </body>
    </html>
  );
}
