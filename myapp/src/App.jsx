import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Header />

      <section className="hero">
        <h2 className="hero__heading">Hi!, I'm Utkarsh Gupta </h2>
        <h3 className="hero__subheading">Senior Software Engineer</h3>
      </section>
      <section className="details">
        <ul className="details__list" type="circle">
          <li>
            <b className="details__label">Skills</b>
            <ul className="details__sublist" type="disc">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
            </ul>
          </li>
          <li>
            <b className="details__label">Expirences</b>
            <ul className="details__sublist" type="disc">
              <li>Sony</li>
              <li>Housing</li>
              <li>Fynd</li>
              <li>Deloitte</li>
              <li>eClerx</li>
            </ul>
          </li>
        </ul>
      </section>
      <Footer />
    </div>
  );
}
export default App;
