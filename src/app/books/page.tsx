import BookCard from "./../../components/shared/BookCard/BookCard";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";

const BooksPage = async () => {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  const books = await res.json();
  return (
    <>
      <PageHeader title="Books" url="/books" />
      <section className="container mx-auto px-4 mb-32">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books?.map((book) => (
            <BookCard key={book.number} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BooksPage;
