import { useState } from "react";
import { Link } from "react-router";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import PageContainer from "../../components/pageContainer";
import heroImg from "../../assets/hero.png";
import styles from "../login/auth.module.css";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <PageContainer className={styles.page}>
      <div className={styles.split}>
        <div
          className={styles.visual}
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <div className={styles.overlay}>
            <p className={styles.brand}>MyApp</p>
            <h2 className={styles.visualTitle}>Join Us Today</h2>
            <p className={styles.visualText}>
              Create your account to unlock personalized recommendations, faster
              checkout and exclusive member deals.
            </p>
          </div>
        </div>

        <div className={styles.formSide}>
          <form className={styles.form}>
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>
              Fill in your details to get started
            </p>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="username">
                Username
              </label>
              <input
                className={styles.input}
                id="username"
                type="text"
                placeholder="johndoe"
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
                  placeholder="••••••••"
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

            <div className={styles.field}>
              <label className={styles.label} htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className={styles.passwordWrap}>
                <input
                  className={styles.input}
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className={styles.eyeBtn}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                  onClick={() => setShowConfirm((s) => !s)}
                >
                  {showConfirm ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
            </div>

            <button className={styles.submitBtn} type="button">
              Sign Up
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
              Sign up with Google
            </button>

            <p className={styles.switch}>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};
export default SignupPage;
