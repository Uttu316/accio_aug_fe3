import { Link, useNavigate } from "react-router";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import PageContainer from "../../components/pageContainer";
import heroImg from "../../assets/hero.png";
import styles from "./auth.module.css";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [status, setStatus] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("loading");

    const { username, password } = formData;
    if (username && password) {
      try {
        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        if (res.status <= 200 && res.status < 400) {
          localStorage.setItem("auth-user", JSON.stringify(data));
          navigate("/products", {
            replace: true,
          });
          return;
        }
        throw res;
      } catch (e) {
        console.error(e);
        setError("Invalid Credentials");
      }
      setStatus("");
      return;
    }

    setError("Invalid Credentials");
    setStatus("");
  };
  return (
    <PageContainer className={styles.page}>
      <div className={styles.split}>
        <div
          className={styles.visual}
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className={styles.overlay}>
            <p className={styles.brand}>MyApp</p>
            <h2 className={styles.visualTitle}>Welcome Back</h2>
            <p className={styles.visualText}>
              Sign in to pick up right where you left off. Your cart, favorites
              and orders are waiting for you.
            </p>
          </div>
        </div>

        <div className={styles.formSide}>
          <form className={styles.form}>
            <h1 className={styles.title}>Sign In</h1>
            <p className={styles.subtitle}>
              Enter your credentials to access your account
            </p>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <input
                className={styles.input}
                id="username"
                value={formData.username}
                type="text"
                placeholder="johndoe"
                onChange={(e) =>
                  setFormData((c) => ({ ...c, username: e.target.value }))
                }
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <div className={styles.passwordWrap}>
                <input
                  className={styles.input}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  placeholder="••••••••"
                  onChange={(e) =>
                    setFormData((c) => ({ ...c, password: e.target.value }))
                  }
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((s) => !s)}
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
            </div>

            <div className={styles.formMeta}>
              <label className={styles.remember}>
                <input type="checkbox" /> Remember me
              </label>
              <span className={styles.forgot}>Forgot password?</span>
            </div>
            {error && <p>{error}</p>}
            <button
              onClick={onSubmit}
              className={styles.submitBtn}
              type="button"
            >
              Sign In
            </button>

            <div className={styles.divider}>
              <span>or continue with</span>
            </div>

            <button className={styles.googleBtn} type="button">
              <svg
                className={styles.googleIcon}
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.5 0 6.6 1.2 9 3.6l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.4 5.4 2.5 13.2l7.9 6.1C12.2 13.2 17.6 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 3-2.2 5.5-4.7 7.2l7.3 5.7c4.3-4 6.9-9.9 6.9-17.4z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.4 28.7c-.5-1.5-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.5 10.8l7.9-6.1z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.5 0 11.9-2.1 15.8-5.8l-7.3-5.7c-2 1.4-4.7 2.3-8.5 2.3-6.4 0-11.8-3.7-13.6-9.1l-7.9 6.1C6.4 42.6 14.6 48 24 48z"
                />
              </svg>
              Sign in with Google
            </button>

            <p className={styles.switch}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};
export default LoginPage;
