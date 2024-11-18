export default function NavBar() {
  return (
    <div className="navBar container">
      <p style={{ flexGrow: 1 }}>
        <a
          href={
            import.meta.env.VITE_APP_HOME_URL ?? "https://josh.barrette.dev/"
          }
        >
          Barrette.dev
        </a>
      </p>

      <a href="https://www.linkedin.com/in/joshpbarrette/" className="navItem">
        LinkedIn
      </a>
      <a href="https://www.github.com/joshbarrette" className="navItem">
        GitHub
      </a>
    </div>
  );
}
