import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Movie() {
  const router = useRouter();

  const { movieSlug } = router.query;

  console.log("Recieved route: ", movieSlug);

  const currentMovie = movies.find((movie) => movie.slug === movieSlug);

  if (!currentMovie) {
    setTimeout(() => {
      router.push("/movies");
    }, 3000);
    return <h1>Movie with slug {movieSlug} was not found.</h1>;
  }

  const { title, description, year } = currentMovie;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
    </>
  );
}
