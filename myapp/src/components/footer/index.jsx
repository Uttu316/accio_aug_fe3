import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={`${style.footer__text} ${style.text}`}>
        Made with Love by AccioJob August Batch
      </p>
    </footer>
  );
};
export default Footer;
