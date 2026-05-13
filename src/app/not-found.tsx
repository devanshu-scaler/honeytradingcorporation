export default function NotFound() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ margin: 0, fontSize: 28 }}>Page not found</h1>
      <p style={{ opacity: 0.75 }}>Try going back to the home page.</p>
      <a href="/" style={{ textDecoration: "underline" }}>
        Home
      </a>
    </div>
  );
}

