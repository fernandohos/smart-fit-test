export default function ContentHeader() {
  return (
    <header>
      <h1 className="typography-h1 relative pb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-2 after:bg-dark-grey">
        Reabertura <br /> Smart Fit
      </h1>
      <p className="mt-8 text-dark-grey">
        O horário de funcionamento das nossas unidades está seguindo os decretos
        de cada município. Por isso, confira aqui se a sua unidade está aberta e
        as medidas de segurança que estamos seguindo.
      </p>
    </header>
  );
}
