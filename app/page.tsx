
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.container}>
      <div>
        <h1>Find your perfect rental car</h1>
        <h2>Reliable and budget-friendly rentals for any journey</h2>
        <button>View Catalog</button>
      </div>
    </div>
  );
}
