import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

function AuthPage({ setUser }) {
  const [showLogInForm, setShowLogInForm] = useState(false);

  function handleSwitchForm() {
    setShowLogInForm(!showLogInForm);
  }

  return (
    <main>
      <section class="bg-primary py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row gy-4 align-items-center">
            <div class="col-12 col-md-6 col-xl-7">
              <div class="d-flex justify-content-center text-bg-primary">
                <div class="col-12 col-xl-9">
                  <img
                    class="img-fluid rounded mb-4"
                    loading="lazy"
                    src="./assets/img/bsb-logo-light.svg"
                    width="245"
                    height="80"
                    alt="BootstrapBrain Logo"
                  />
                  <hr class="border-primary-subtle mb-4" />
                  <h2 class="h1 mb-4">
                    We make digital products that drive you to stand out.
                  </h2>
                  <p class="lead mb-5">
                    We write words, take photos, make videos, and interact with
                    artificial intelligence.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-xl-5">
              {showLogInForm ? (
                <>
                  <LoginForm setUser={setUser} />
                  <p>
                    Don&apos;t have account ?
                    <button onClick={handleSwitchForm}>Switch to SignUp</button>
                  </p>
                </>
              ) : (
                <>
                  <SignUpForm setUser={setUser} />
                  <p>
                    Already have an account{" "}
                    <button onClick={handleSwitchForm}>Switch to SignIn</button>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      ;
    </main>
  );
}

export default AuthPage;
