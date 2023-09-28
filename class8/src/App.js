import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";

import { MoviesHome } from "./MoviesHome";
import { Movies } from "./components/Movies";


// install react router
// npm i react-router-dom --save

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {
              // to ni kazuva koe treba da bide naseto url
            }
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          {/* <li> THIS SHOULD NOT BE USED
            <a href="/books">Books with anchor</a>
          </li> */}

          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>
      </nav>

      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book/>} />
        <Route path='/books/new' element={<NewBook/>}/> */}
        {/* dokolku ruterot ne fati nikoja ruta od gore, togas ke se ispecati ovaa */}
        {/* <Route path='*' element={<NotFound/>}/> */}

        <Route path="/" element={<MoviesHome />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;

// PAUZA DO 21:03