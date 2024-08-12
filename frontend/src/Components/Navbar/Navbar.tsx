import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../Context/useAuth";
import { useTranslation } from 'react-i18next';

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
      <nav className="w-full bg-gray-100 p-6">
        <div className="flex items-center justify-between">
          <img src="logo.png" alt="Logo" className="h-10" />

          <div className="flex space-x-4">
            <Link
                to="/"
                className="text-black hover:text-darkBlue font-bold p-2 hover:border-b-2 hover:border-darkBlue hover:bg-gray-200 transition"
            >
              {t('home')}
            </Link>
            <Link
                to="/charity"
                className="text-black hover:text-darkBlue font-bold p-2 hover:border-b-2 hover:border-darkBlue hover:bg-gray-200 transition"
            >
              {t('charity')}
            </Link>
            <Link
                to="/motivation"
                className="text-black hover:text-darkBlue font-bold p-2 hover:border-b-2 hover:border-darkBlue hover:bg-gray-200 transition"
            >
              {t('motivation')}
            </Link>
            <Link
                to="/about"
                className="text-black hover:text-darkBlue font-bold p-2 hover:border-b-2 hover:border-darkBlue hover:bg-gray-200 transition"
            >
              {t('about')}
            </Link>
            <Link
                to="/search"
                className="text-black hover:text-darkBlue font-bold p-2 hover:border-b-2 hover:border-darkBlue hover:bg-gray-200 transition"
            >
              {t('search')}
            </Link>
          </div>

          <div className="flex items-center space-x-6 ml-auto">
            {isLoggedIn() ? (
                <>
                  <div className="hover:text-darkBlue">{t('welcome')}, {user?.userName}</div>
                  <a
                      onClick={logout}
                      className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70 cursor-pointer"
                  >
                    {t('logout')}
                  </a>
                </>
            ) : (
                <>
                  <Link
                      to="/login"
                      className="text-black font-bold hover:text-darkBlue p-2 hover:border-b-2 hover:border-darkBlue hover:bg-gray-200 transition"
                  >
                    {t('account')}
                  </Link>
                  <Link
                      to="/register"
                      className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                  >
                    {t('register')}
                  </Link>
                </>
            )}
            <div className="relative">
              <label htmlFor="language" className="sr-only">{t('select_language')}</label>
              <select
                  className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                  name="language"
                  id="language"
                  onChange={changeLanguage}
              >
                <option value="en">EN</option>
                <option value="ka">ქარ</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
