import express from 'express'; //SyntaxError: Cannot use import statement outside a module

const app = express(); //make a variable from express

// app.get('/',(req,res)=>{})  : Callback fired at '/' route
app.get('/',(req,res)=>{
    res.send('Server is ready'); //sending response: Server is ready
});

// getting some data : list of movies 
app.get('/api/movies',(req,res)=>{
    const movies = [
        {
          id:1,
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          description: "The Shawshank Redemption is a drama film directed by Frank Darabont, released in 1994. It follows the story of a banker who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence."
        },
        {
          id:2,
          title: "The Godfather",
          director: "Francis Ford Coppola",
          description: "The Godfather is a crime film directed by Francis Ford Coppola, released in 1972. It tells the story of the powerful Italian-American crime family of Don Vito Corleone, and the transformation of his youngest son, Michael Corleone, from reluctant outsider to ruthless mafia boss."
        },
        {
          id:3,
          title: "The Dark Knight",
          director: "Christopher Nolan",
          description: "The Dark Knight is a superhero film directed by Christopher Nolan, released in 2008. It is the second installment of Nolan's Batman film trilogy and stars Christian Bale as Batman, Heath Ledger as the Joker, and Aaron Eckhart as Harvey Dent. The film explores the conflict between Batman and the Joker, who seeks to undermine Gotham City's stability through chaos."
        },
        {
          id:4,
          title: "The Godfather: Part II",
          director: "Francis Ford Coppola",
          description: "The Godfather: Part II is a crime film directed by Francis Ford Coppola, released in 1974. It is both a prequel and sequel to The Godfather, presenting parallel narratives of the early life of Vito Corleone, played by Robert De Niro, and the continued rise to power of his son Michael, played by Al Pacino."
        },
        {
          id:5,
          title: "Pulp Fiction",
          director: "Quentin Tarantino",
          description: "Pulp Fiction is a black comedy crime film directed by Quentin Tarantino, released in 1994. It intertwines several stories of criminal Los Angeles, including that of a boxer, two hitmen, and a gangster's wife, in a non-linear narrative."
        }
      ]
    res.send(movies);
        //or
    // const titles = movies.map(movie => movie.title);
    // res.send(titles);
}) 
  

//port comes from environment variable file | hardcoded //production level process
const port = process.env.PORT || 3000; 

//listen at given port
app.listen(port,()=>{ 
    console.log(`Serving at http://localhost:${port}`);
})