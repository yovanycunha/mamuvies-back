# Exemplos de uso  

## 1. Apenas filmes  

* Tipo de busca: s
* Tipo de show:  movie
* Título ou ID:  water

```
http://localhost:8080/api/omdb/s&movie&water  
```

Resultado da busca:  

    {
        "Search": [
            {
                "Title": "The Shape of Water",
                "Year": "2017",
                "imdbID": "tt5580390",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
            },
            {
                "Title": "The Shape of Water",
                "Year": "2017",
                "imdbID": "tt5580390",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
            },
            {
                "Title": "Hell or High Water",
                "Year": "2016",
                "imdbID": "tt2582782",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4NDA1OTA5NF5BMl5BanBnXkFtZTgwMDQ2MDM5ODE@._V1_SX300.jpg"
            },
            {
                "Title": "Water for Elephants",
                "Year": "2011",
                "imdbID": "tt1067583",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTQzMDU3NDEwN15BMl5BanBnXkFtZTcwMTI3MDU0NA@@._V1_SX300.jpg"
            },
            {
                "Title": "Lady in the Water",
                "Year": "2006",
                "imdbID": "tt0452637",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjEyNTc0NTk5M15BMl5BanBnXkFtZTcwMDE5NzkyMw@@._V1_SX300.jpg"
            },
            {
                "Title": "The Water Diviner",
                "Year": "2014",
                "imdbID": "tt3007512",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODA4NDYzM15BMl5BanBnXkFtZTgwMTc0Mzc0NDE@._V1_SX300.jpg"
            },
            {
                "Title": "Dark Water",
                "Year": "2005",
                "imdbID": "tt0382628",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTcyMDQ3MjEtNjZkOS00ZDQ0LWE1YWMtYTNkNmNiZjU0MzhhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
            },
            {
                "Title": "Open Water",
                "Year": "2003",
                "imdbID": "tt0374102",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNjQ5ODAyOTk3OF5BMl5BanBnXkFtZTcwNzQ1NjYyMQ@@._V1_SX300.jpg"
            },
            {
                "Title": "The SpongeBob Movie: Sponge Out of Water",
                "Year": "2015",
                "imdbID": "tt2279373",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjYyNDczNTE0MF5BMl5BanBnXkFtZTgwNjkzNDYxMzE@._V1_SX300.jpg"
            },
            {
                "Title": "The Water Horse",
                "Year": "2007",
                "imdbID": "tt0760329",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTc1MjcxMjg5OV5BMl5BanBnXkFtZTcwNDE1NzYzMw@@._V1_SX300.jpg"
            }
        ],
        "totalResults": "1705",
        "Response": "True"
    } 
    
## 2. Apenas séries  

* Tipo de busca: s
* Tipo de show:  series
* Título ou ID:  gate

```
http://localhost:8080/api/omdb/s&series&gate
```

Resultado da busca:

    {
        "Search": [
            {
                "Title": "Steins;Gate",
                "Year": "2011–2015",
                "imdbID": "tt1910272",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjUxMzE4ZDctODNjMS00MzIwLThjNDktODkwYjc5YWU0MDc0XkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_SX300.jpg"
            },
            {
                "Title": "Gate",
                "Year": "2015–",
                "imdbID": "tt4958580",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYmY2N2EzYzQtM2ViYS00OTkzLTkyOWMtMDdhYjc1NWNiMWNmXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Steins;Gate 0",
                "Year": "2018–",
                "imdbID": "tt5514358",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYmJhMDYzYzMtNTVlZS00MzgwLWE3ZjAtN2FhZTBlOGQzZmFmXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg"
            },
            {
                "Title": "The Neighbourhood's Gate",
                "Year": "2006–2017",
                "imdbID": "tt1999065",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZDlhNzk0M2EtZDRmNC00NDJlLWFkOTUtY2ZlMjQ4ODk0NTQ1XkEyXkFqcGdeQXVyMzI4MTk3MTY@._V1_SX300.jpg"
            },
            {
                "Title": "Divine Gate",
                "Year": "2016–",
                "imdbID": "tt5330856",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BYWQ2MjA0MDAtMTk1Yi00MTM1LWE2ZGItYTJmNmVlZTM5NjA5XkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"
            },
            {
                "Title": "Gate Keepers",
                "Year": "2000–",
                "imdbID": "tt0305596",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BZjUzM2ZhOTAtMWExYy00M2MwLTg2NTEtNDExODVmZjI2NmM3XkEyXkFqcGdeQXVyOTA0MzY4MjY@._V1_SX300.jpg"
            },
            {
                "Title": "Banshee Origins: Carrie at the Gate",
                "Year": "2013",
                "imdbID": "tt3004670",
                "Type": "series",
                "Poster": "N/A"
            },
            {
                "Title": "Down the 'Gate",
                "Year": "1975–1976",
                "imdbID": "tt0162074",
                "Type": "series",
                "Poster": "N/A"
            },
            {
                "Title": "Gate Keepers 21",
                "Year": "2002–2003",
                "imdbID": "tt3488994",
                "Type": "series",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI4NzAxMDg2MV5BMl5BanBnXkFtZTcwNzk3MDkxMQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Destiny Gate",
                "Year": "2015–",
                "imdbID": "tt3601028",
                "Type": "series",
                "Poster": "N/A"
            }
        ],
        "totalResults": "14",
        "Response": "True"
    }

## 3. Filmes e Séries

* Tipo de busca: s
* Tipo de show:
* Título ou ID:  glow  

```
http://localhost:8080/api/omdb/s&&glow
```

Resultado da Busca

    {
        "Search": [
            {
                "Title": "GLOW",
                "Year": "2017–",
                "imdbID": "tt5770786",
                "Type": "series",
                "Poster": "https://m.media-amazon.com/images/M/MV5BOTA0ODc1MzM3M15BMl5BanBnXkFtZTgwMDM3MTA3NTM@._V1_SX300.jpg"
            },
            {
                "Title": "GLOW: The Story of the Gorgeous Ladies of Wrestling",
                "Year": "2012",
                "imdbID": "tt1559038",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTg4MDAxMTY1M15BMl5BanBnXkFtZTcwODU5MzI5OA@@._V1_SX300.jpg"
            },
            {
                "Title": "The Glow",
                "Year": "2002",
                "imdbID": "tt0286653",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BNTUyNzcwNzk0NF5BMl5BanBnXkFtZTcwODMwMDY4Mw@@._V1_SX300.jpg"
            },
            {
                "Title": "The Dark Glow of the Mountains",
                "Year": "1985",
                "imdbID": "tt0087317",
                "Type": "movie",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzY4MmNlYjgtMTdkMy00MzUxLWE5MGQtNjEzYTA5MmZmNGU3XkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_SX300.jpg"
            },
            {
                "Title": "GLOW: Gorgeous Ladies of Wrestling",
                "Year": "1986–1989",
                "imdbID": "tt0252462",
                "Type": "series",
                "Poster": "https://ia.media-imdb.com/images/M/MV5BMTI3MTczMTgwNl5BMl5BanBnXkFtZTcwOTM5NzQzMQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Like Cattle Towards Glow",
                "Year": "2015",
                "imdbID": "tt5024728",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTBjMDU3YmEtZTg0ZC00OWQyLTg3ZWQtNDEwN2Y4YTM0MTRjXkEyXkFqcGdeQXVyNjUzNzAxMTc@._V1_SX300.jpg"
            },
            {
                "Title": "Glow Ropes: The Rise and Fall of a Bar Mitzvah Emcee",
                "Year": "2008",
                "imdbID": "tt0425068",
                "Type": "movie",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI5NzYzMjkyNF5BMl5BanBnXkFtZTcwNTEwMTE0MQ@@._V1_SX300.jpg"
            },
            {
                "Title": "Joe Glow, the Firefly",
                "Year": "1941",
                "imdbID": "tt0033773",
                "Type": "movie",
                "Poster": "N/A"
            },
            {
                "Title": "Glow",
                "Year": "2013",
                "imdbID": "tt3638556",
                "Type": "movie",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDZjNTlmZmEtNzNlOC00NTMzLTk1NjktMGEyZTUyZDRlNTczXkEyXkFqcGdeQXVyMjE0NjIwMjQ@._V1_SX300.jpg"
            },
            {
                "Title": "Purple Glow",
                "Year": "2005",
                "imdbID": "tt0476479",
                "Type": "movie",
                "Poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDBjNGUyY2UtOTk5Ny00Y2Q4LTgyZTItNzZhNWNmZGE4YTU3XkEyXkFqcGdeQXVyMTA3OTQ3NQ@@._V1_SX300.jpg"
            }
        ],
        "totalResults": "69",
        "Response": "True"
    }

## 4. Série pelo ID

* Tipo de busca: i
* Tipo de show:
* Título ou ID:  tt1608180  

```
http://localhost:8080/api/omdb/i&&tt1608180
```

Resultado da Busca:

    {
        "Title": "Mike & Molly",
        "Year": "2010–2016",
        "Rated": "TV-14",
        "Released": "20 Sep 2010",
        "Runtime": "30 min",
        "Genre": "Comedy",
        "Director": "N/A",
        "Writer": "Mark Roberts",
        "Actors": "Billy Gardell, Melissa McCarthy, Reno Wilson, Katy Mixon",
        "Plot": "A couple meets at an Overeaters' Anonymous meeting.",
        "Language": "English",
        "Country": "USA",
        "Awards": "Won 2 Primetime Emmys. Another 3 wins & 16 nominations.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTk4NTk4MjkyMl5BMl5BanBnXkFtZTcwNzAwMjYyOQ@@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "6.4/10"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "6.4",
        "imdbVotes": "21,020",
        "imdbID": "tt1608180",
        "Type": "series",
        "totalSeasons": "6",
        "Response": "True"
    }

## 5. Filme pelo ID

* Tipo de busca: i
* Tipo de show:
* Título ou ID:  tt0050976  

```
http://localhost:8080/api/omdb/i&&tt0050976
```

Resultado da busca:

    {
        "Title": "The Seventh Seal",
        "Year": "1957",
        "Rated": "Not Rated",
        "Released": "13 Oct 1958",
        "Runtime": "96 min",
        "Genre": "Drama, Fantasy",
        "Director": "Ingmar Bergman",
        "Writer": "Ingmar Bergman (play), Ingmar Bergman (screenplay)",
        "Actors": "Gunnar Björnstrand, Bengt Ekerot, Nils Poppe, Max von Sydow",
        "Plot": "A man seeks answers about life, death, and the existence of God as he plays chess against the Grim Reaper during the Black Plague.",
        "Language": "Swedish, Latin",
        "Country": "Sweden",
        "Awards": "7 wins & 1 nomination.",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNWE2NmMwZjgtOWYxYy00NWU0LTkzOGUtYTg4Yjk3MDFmY2IyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "8.2/10"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "93%"
            }
        ],
        "Metascore": "N/A",
        "imdbRating": "8.2",
        "imdbVotes": "141,758",
        "imdbID": "tt0050976",
        "Type": "movie",
        "DVD": "17 Nov 2009",
        "BoxOffice": "N/A",
        "Production": "Janus Films",
        "Website": "N/A",
        "Response": "True"
    }
