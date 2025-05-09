import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieTrailer from "./components/MovieTrailer";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Breaking Bad",
      description:
        "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOcWkpWG_NRrU2M8-WB8EbEcJk7smhdrY1eO0ttKXm0bo2ooOEWxk3zBSbsFrSgSJh2OEKOQ",
      rating: 4.9,
      trailerLink:
        "https://www.youtube.com/embed/HhesaQXLuRY?si=cRpEdt9oVGXaoFJS",
    },
    {
      id: 2,
      title: "Better Call Saul",
      description:
        "Ex-con artist Jimmy McGill turns into a small-time attorney and goes through a series of trials and tragedies, as he transforms into his alter ego Saul Goodman, a morally challenged criminal lawyer",
      posterURL:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlZudogDC96zcQ8h1btvghFoM6Y7qQd94UNUyceBqXslnarv260_Ij7QEvSp_FNmldAci5",
      rating: 4.2,
      trailerLink:
        "https://www.youtube.com/embed/HN4oydykJFc?si=onIuVn4j7HqWGvG3",
    },
    {
      id: 3,
      title: "Cyberpunk: Edgerunners",
      description:
        "A street kid tries to survive in a technology and body modification-obsessed city of the future. With everything to lose, he chooses to stay alive by becoming an edgerunner: a mercenary outlaw, also known as a cyberpunk.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BM2JkMzM2ZmYtNWU4MS00MjZhLWFhZWUtYWFjYTJkN2RhZDliXkEyXkFqcGc@._V1_.jpg",
      rating: 4.5,
      trailerLink:
        "https://www.youtube.com/embed/JtqIas3bYhg?si=nQ_7T5CTpTzPgJU_",
    },
    {
      id: 4,
      title: "Pantheon",
      description:
        "Bullied teen Maddie begins receiving messages from a mysterious stranger that claims to be her recently deceased father, David; his consciousness has been uploaded to the cloud after an experimental brain scan, and it turns out he's not the only one.",
      posterURL:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0Ojyz9PK37yabHiM9h6GTv6AfcTxdISx50VOydkf4dQAFxTKCvirwXs9cLzmZqDEuzq_fRQ",
      rating: 4.9,
      trailerLink:
        "https://www.youtube.com/embed/wTgYeETwgKQ?si=-onEIheaITp-rFtN",
    },
    {
      id: 5,
      title: "Brawl In Cell Block 99",
      description:
        "Bradley Thomas ends up in prison after a drug deal goes wrong. His accomplices threaten to perform an experiment on his wife and their unborn baby unless he kills an inmate in cell block 99",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/c/c6/Brawl_in_Cell_Block_99_poster.jpg",
      rating: 4.2,
      trailerLink:
        "https://www.youtube.com/embed/5hfAExhHTMM?si=FBO-p5GmKeCoWIeQ",
    },
    {
      id: 6,
      title: "Matrix",
      description:
        "Neo, a computer programmer and hacker, has always questioned the reality of the world around him. His suspicions are confirmed when Morpheus, a rebel leader, contacts him and reveals the truth to him.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWXVvfvZR3oe7PCMM0exwV0dObOTKvLfSM-bjvKpQ1VegKXuCtq6aBrxqbIgUNxMbfavy",
      rating: 4.3,
      trailerLink:
        "https://www.youtube.com/embed/vKQi3bBA1y8?si=0BjTQkicEf2vOu2r",
    },
    {
      id: 7,
      title: "Game of Thrones",
      description:
        "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgffoihYPEcEZH4D24OA-1Hnwz-SRN4DOmcABM6nro6l2D_yLYjNNFy_pOpOC9ABjXY2_",
      rating: 4.4,
      trailerLink:
        "https://www.youtube.com/embed/KPLWWIOCOOQ?si=g4msfi1lnSI8RTqL",
    },
  ]);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = () => {
    const title = prompt("Enter movie title:");
    const description = prompt("Enter movie description:");
    const posterURL = prompt("Enter poster URL:");
    const rating = parseFloat(prompt("Enter movie rating (0-10):"));

    if (title && !isNaN(rating)) {
      setMovies([...movies, { title, description, posterURL, rating }]);
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );
  return (
    <Router>
      <div className="p-2">
        <h1 className="flex justify-center text-3xl font-bold mb-2">
          Movie App
        </h1>

        {/* Filter Component */}
        <Filter
          filterTitle={filterTitle}
          setFilterTitle={setFilterTitle}
          filterRating={filterRating}
          setFilterRating={setFilterRating}
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route
            path="/details/:id"
            element={<MovieTrailer movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
