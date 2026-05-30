import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <h1>CV Builder</h1>
      <button className="download-button" onClick={() => window.print()}>
        Print CV
      </button>
    </header>
  );
}
