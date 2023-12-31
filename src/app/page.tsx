import Cards from "@components/CardList";
import ContentHeader from "@components/ContentHeader";
import Form from "@components/Form";
import Header from "@components/Header";
import Legend from "@components/Legend";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="m-auto mt-10 w-5/6 sm:max-w-lg md:max-w-2xl lg:max-w-4xl font-gotham">
        <ContentHeader />
        <Form />
        <Legend />
        <Cards />
      </main>
    </div>
  );
}
