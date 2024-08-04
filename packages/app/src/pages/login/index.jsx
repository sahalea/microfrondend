import Input from "articles/Input";
import Button from "articles/Button";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "shared/store/slices/AuthSlice";

import "./style.css";

export default function Login() {
  const { t } = useTranslation();
  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Input event
   * username and password will save to user state
   *
   * @param {*} event
   */
  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  /**
   * Once authenticated will redirect to home page
   */
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/home");
    }
  }, [auth]);

  return (
    <div className="login_container">
      <div className="form_container">
        <h4 className="login_title">Sign In</h4>
        <Input
          name="username"
          placeHolder={t("username")}
          onChange={onChange}
        />
        <Input
          name="password"
          placeHolder={t("password")}
          onChange={onChange}
        />
        <Button
          title={t("signin")}
          onClick={() => dispatch(loginAction(user))}
        />
      </div>
    </div>
  );
}
