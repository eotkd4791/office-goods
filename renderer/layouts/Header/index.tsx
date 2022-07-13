import Link from 'next/link';
import { FC } from 'react';
import DarkMode from 'renderer/components/DarkMode';
import Drawer from '../Drawer';

const Header: FC = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 shadow-lg navbar bg-base-100">
        <div className="navbar-start">
          <label tabIndex={0} htmlFor="drawer" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-center">
          <Link href="/" passHref>
            <a className="text-xl normal-case btn btn-ghost">Office Goods</a>
          </Link>
        </div>
        <div className="navbar-end">
          <DarkMode />
          <button className="mx-4 btn btn-primary">로그인</button>
          <button className="mr-4 btn btn-outline">회원가입</button>
          <button className="mr-4 btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item" />
            </div>
          </button>
        </div>
      </nav>
      <Drawer />
    </>
  );
};

export default Header;
