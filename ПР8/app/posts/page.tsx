type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=8",
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Не вдалося завантажити публікації");
  }

  const posts: Post[] = await response.json();

  return (
    <main>
      <h1>Новини та публікації</h1>

      <div className="posts">
        {posts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </div>
    </main>
  );
}