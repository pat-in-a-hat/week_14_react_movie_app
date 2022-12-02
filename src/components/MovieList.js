import React from 'react';
import Movie from './Movie';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';


//have a fixed movie array instead of using IMDB API or another movie API here
//focus of this project is making sure state transfers are correct, I use APIs in other projects
function MovieList(){
    const moviesArray = [
        {
          name: "Hocus Pocus",
          description:
            "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century",
          dateReleased: 1993,
          genre: ["comedy", "family", "fantasy"],
          ageRating: "PG",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/hocuspocus.24x36_500x749.jpg?v=1615397204",
        },
        {
          name: "Independence Day",
          description:
            "The aliens are coming and their goal is to invade and destroy Earth. Fighting superior technology, mankind's best weapon is the will to survive.",
          dateReleased: 1996,
          genre: ["action", "adventure", "sci-fi"],
          ageRating: "PG-13",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/1da32ed591b0ea4c63f2152b1ab703ac_500x749.jpg?v=1573590344"
        },
        {
          name: "E.T. the Extra-Terrestrial",
          description:
            "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.",
          dateReleased: 1982,
          genre: ["adventure", "family", "sci-fi"],
          ageRating: "PG",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/eb52b672e355462e265523ec82decc7f_480x.progressive.jpg?v=1573572677"
        },
        {
          name: "The Goonies",
          description:
            "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
          dateReleased: 1985,
          genre: ["adventure", "comedy", "family"],
          ageRating: "PG",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/d30f90ff234ab7540c334e264de71fef_df5ee248-63f7-4fdd-99d4-542cd0b839d5_500x749.jpg?v=1573590339"
        },
        {
          name: "Back to the Future",
          description:
            "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
          dateReleased: 1985,
          genre: ["adventure", "comedy", "sci-fi"],
          ageRating: "PG",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0b2b67a1de6a06d1ce65e4ccc64047e3_a9f7318e-c5c4-4d2a-aed2-890bbfad883c_480x.progressive.jpg?v=1573590273"
        },
        {
          name: "Jurassic Park",
          description:
            "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
          dateReleased: 1993,
          genre: ["action", "adventure", "sci-fi"],
          ageRating: "PG-13",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e50345d7cfee907ad63bb835109b37b9_263eaa00-ac40-4a0e-b2d7-86bb4ac69c90_500x749.jpg?v=1573584652"
        },
        {
          name: "Toy Story",
          description:
            "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boys bedroom.",
          dateReleased: 1995,
          genre: ["animation", "adventure", "comedy"],
          ageRating: "G",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e2fc54358df39b0f3466d36d50684aa2_60d14fc6-696f-427e-9234-64dd666465a2_500x749.jpg?v=1573595133"
        },
        {
          name: "The Land Before Time",
          description:
            "An orphaned brontosaurus teams up with other young dinosaurs in order to reunite with their families in a valley.",
          dateReleased: 1988,
          genre: ["animation", "adventure", "drama"],
          ageRating: "G",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/684e9792eb8c121e69ab5678d022544c_5c452637-a425-4c9d-900f-6d09878c41a9_480x.progressive.jpg?v=1573651484"
        },
        {
          name: "Labyrinth",
          description:
            "Sixteen-year-old Sarah is given thirteen hours to solve a labyrinth and rescue her baby brother Toby when her wish for him to be taken away is granted by the Goblin King Jareth.",
          dateReleased: 1986,
          genre: ["adventure", "family", "family"],
          ageRating: "PG",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/8d0690d8dd0f019a5391344c8d129f6b_384869d3-85d5-47e2-9a91-2ff4deb70e1f_500x749.jpg?v=1573590285"
        },
        {
          name: "Cool Runnings",
          description:
            "When a Jamaican sprinter is disqualified from the Olympic Games, he enlists the help of a dishonored coach to start the first Jamaican Bobsled Team.",
          dateReleased: 1993,
          genre: ["adventure", "comedy", "family"],
          ageRating: "PG",
          image: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/coolrunnings24_5a05ffff-c532-412e-ad36-deb984c4c37a_500x749.jpg?v=1620677269"
        },
      ];
    for (let i of moviesArray){
        i.id = i.name + ' ' + i.dateReleased
    }

    //just mapping the movies array and passing the info to our Movie component
    return(
        
        <div>
            <Container fluid className='bg-secondary'>
                <Row lg={2} md={'auto'}>
                {
                moviesArray.map(movie => {
                    return (
                        <Col key={movie.id}>
                            <Movie {...movie}/>
                        </Col>
                    )
                })
                }
                </Row>
            </Container>
        </div>
    )
}

export default MovieList;