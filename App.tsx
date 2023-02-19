import * as React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Login } from './pages/Login';
import { Post } from './pages/Post/Post';
import { auth } from './config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export default function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Router>
        <nav>
          <Link className="nav_link" to="/">
            Home
          </Link>
          {!user ? (
            <Link className="nav_link" to="/login">
              Login
            </Link>
          ) : (
            <Link className="nav_link" to="/createpost">
              Create Post
            </Link>
          )}
          {user && (
            <>
              <img
                className="profile_pic"
                src={auth.currentUser?.photoURL || 'NO_IMAGE'}
              />
              <p>{auth.currentUser?.displayName}</p>
              <button onClick={async () => await signOut(auth)}>Logout</button>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}
