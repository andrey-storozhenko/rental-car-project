
import css from "./Header.module.css";
import Link from "next/link";
export default function Header() {
    return (
        <div className={['container', css.header].join(' ')}>
            <h2 className={css.logo}>Rental<span className={'blueMark'}>Car</span></h2>
            <nav className={css.navigation}>
                <ul className={css.navigationList}>
                    <li className={css.navigationItem}><Link href="/">Home</Link></li>
                    <li className={css.navigationItem}> <Link href="/catalog">Catalog</Link></li>
                </ul>
            </nav>
        </div>
    );
}