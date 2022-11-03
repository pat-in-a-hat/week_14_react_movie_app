import React from 'react';
import Movie from './Movie';

const moviesArray = [
    {
      name: "Hocus Pocus",
      description:
        "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century",
      dateReleased: 1993,
      genre: ["comedy", "family", "fantasy"],
      ageRating: "PG",
      image: "https://lumiere-a.akamaihd.net/v1/images/p_hocuspocus_19880_e000b013.jpeg",
    },
    {
      name: "Independence Day",
      description:
        "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
      dateReleased: 1996,
      genre: ["action", "adventure", "sci-fi"],
      ageRating: "PG-13",
      image: "https://www.imdb.com/title/tt0116629/mediaviewer/rm2203522816/?ref_=tt_ov_i"
    },
    {
      name: "E.T. the Extra-Terrestrial",
      description:
        "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
      dateReleased: 1982,
      genre: ["adventure", "family", "sci-fi"],
      ageRating: "PG",
      image: "https://www.imdb.com/title/tt0083866/mediaviewer/rm1993282560/?ref_=tt_ov_i"
    },
    {
      name: "The Goonies",
      description:
        "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
      dateReleased: 1985,
      genre: ["adventure", "comedy", "family"],
      ageRating: "PG",
      image: "https://www.imdb.com/title/tt0089218/mediaviewer/rm620367360/?ref_=tt_ov_i"
    },
    {
      name: "Back to the Future",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      dateReleased: 1985,
      genre: ["adventure", "comedy", "sci-fi"],
      ageRating: "PG",
      image: "https://www.imdb.com/title/tt0088763/mediaviewer/rm554638848/?ref_=tt_ov_i"
    },
    {
      name: "Jurassic Park",
      description:
        "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      dateReleased: 1993,
      genre: ["action", "adventure", "sci-fi"],
      ageRating: "PG-13",
      image: "https://www.imdb.com/title/tt0107290/mediaviewer/rm1142565376/?ref_=tt_ov_i"
    },
    {
      name: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom.",
      dateReleased: 1995,
      genre: ["animation", "adventure", "comedy"],
      ageRating: "G",
      image: "https://www.imdb.com/title/tt0114709/mediaviewer/rm3813007616/?ref_=tt_ov_i"
    },
    {
      name: "The Land Before Time",
      description:
        "An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.",
      dateReleased: 1988,
      genre: ["animation", "adventure", "drama"],
      ageRating: "G",
      image: "https://www.imdb.com/title/tt0095489/mediaviewer/rm4022080512/?ref_=tt_ov_i"
    },
    {
      name: "Labyrinth",
      description:
        "Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.",
      dateReleased: 1986,
      genre: ["adventure", "family", "family"],
      ageRating: "PG",
      image: "https://www.imdb.com/title/tt0091369/mediaviewer/rm2649548544/?ref_=tt_ov_i"
    },
    {
      name: "Cool Runnings",
      description:
        "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
      dateReleased: 1993,
      genre: ["adventure", "comedy", "family"],
      ageRating: "PG",
      image: "https://www.imdb.com/title/tt0106611/mediaviewer/rm4209464832/?ref_=tt_ov_i"
    },
  ];

/*export default class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    //each movie is a card here
    //use map function to generate all of them

    //review form will go on the bottom of this
    
}*/

export default function MovieList(){
    return(
        <div className = 'container'>
            <div className='row'>
                {
                moviesArray.map(movie => {
                    return (
                        <div className='col'>
                            <Movie movie = {movie} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}