import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

const Nav = () => {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    return (
      <header>
        <nav>
          <ul>
            <li className={styles.navList}>
              <a className={styles.navItem} onClick={() => router.push('/')}>
                Home
              </a>
            </li>
            <li className={styles.navList}>
              <a
                className={styles.navItem}
                onClick={() => router.push('/contact')}
              >
                Contact
              </a>
            </li>
            <li className={styles.navList}>
              <a
                className={styles.navItem}
                onClick={() => router.push('/admin')}
              >
                Admin
              </a>
            </li>
            <li className={styles.navList}>
              <button
                onClick={() =>
                  signOut({ callbackUrl: 'http://localhost:3000' })
                }
              >
                Sign out
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav>
        <ul>
          <li className={styles.navList}>
            <a className={styles.navItem} onClick={() => router.push('/')}>
              Home
            </a>
            <a
              className={styles.navItem}
              onClick={() => router.push('/contact')}
            >
              Contact
            </a>
            <button
              onClick={() =>
                signIn('admin', { callbackUrl: 'http://localhost:3000/admin' })
              }
            >
              Sign in
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
