import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p>ID: {post.id}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <h1>Loading your posts!!!</h1>
      )}
    </div>
  );
};

// Ovoj kod pretstavuva React komponenta narecena "Posts" 
// Ovaa komponenta e dizajnirana za prikaz na lista so objavi prevzemeni od API

//* "import { useEffect, useState } from "react";"
// Ovaa linija gi vnesuva f-ciite "useEffect" i "useState" od React
// "useState" se koristi za sozdavanje sostojba vo funkcionalnite komponenti, a "useEffect" se koristi za izvrsuvanje na efekti vo komponentata

//* "import { API_URL } from "../uttils/constants";"
// Se vnesuva kontatata "API_URL" od fajlot "constants.js"
// Ovaa konstanta go sodrzi URL-to na API-to od kade ke se zemat postovite

//* "const [posts, setPosts] = useState([]);"
// Se sozdava sostojva "posts" i f-ja "setPosts" za nejzino azuriranje
// Vo pocetok "posts" e postaveno na prazna niza

//* "useEffect(() => { ... }, []);"
// Se koristi "useEffect" za izvrsuvanje na kodot vo negovoto telo
// Vo ovoj slucaj kodot se izvrsuva samo ednas pri pocetok na komponentata, bidejki praznata niza "[]" se predava kako vtor argument na "useEffect"
// Vo teloto na "useEffect" se pravi HTTP baranje so "fetch" za da se zemat postovite od API-to i potoa se psotavuvaat vo sostojba "posts"

// Vo vizuelniot del na komponentata se prikazuva naslov "Posts" i lista so postovi
// Ako ima postovi vo nizata "post.lenght > 0" sekoj post se prikazuva so id, title i body
// Dokolku "posts" nizata e prazna (sto znaci deka se cekaat podatoci od APi) se prikazuva poraka "Loading your posts!!!"