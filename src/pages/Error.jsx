import Header from "../components/Header";
import Footer from "../components/Footer";

import error from "../assets/404.svg";
import "../styles/Error.css";

function Error() {
  return (
    <div className="error">
      <Header />
      <main>
        <img className="argentbank-error-page" src={error} alt="404"/>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
