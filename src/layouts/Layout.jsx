import styles from "./Layout.module.css"

function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>Nina Mansouri | React.js Project</p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by Nina</p>
    </footer>
    </>
  )
}

export default Layout