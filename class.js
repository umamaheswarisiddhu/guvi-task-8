class movie1{
    constructor(title,studio,rating='PG'){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    Title(){
        console.log(`The title of the movie is "${this.title}"`);
    }
    Studio(){
        console.log(`The studio that made this movie "${this.title}" is "${this.studio}"`);
    }
    Rating(){
        console.log(`The rating of the movie "${this.title}" is - "${this.rating}"`);
    }
    }
class   movieNew extends movie1 {

getPG(){
      console.log(`only PG rating movies is "${this.title}" rating is"${this.rating}"`)
    }
 }
let movie3 = new movieNew("KGF","CloudStudio","PG13");
movie3.Title();
movie3.Studio();
movie3.Rating();
movie3.getPG();


//d) Write a piece of code that creates an instance of the class Movie
 //with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
 class movieee{
    constructor(title,studio,rating='PG'){
    this.title=title;
    this.studio=studio;
    this.rating=rating;
    }
    }
    let movie=new movieee('Casino Royale','Eon Productions','PG13');
    console.log(movie) 
 