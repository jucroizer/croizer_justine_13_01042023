import Header from "../components/Header";
import Footer from "../components/Footer";

import error from "../assets/404.svg";

function Error() {
  return (
    <div className="error">
      <Header />
      <main>
        <img src={error} alt="404" style={{width:'45%'}}/>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
