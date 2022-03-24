import ContactForm from '../components/contactForm';
import Nav from '../components/navigation';

import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <h1>Contact Form</h1>
        <ContactForm />
      </div>
    </div>
  );
}
