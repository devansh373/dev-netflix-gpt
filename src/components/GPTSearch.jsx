import React, { useRef } from "react";
// import { GoogleGenAI } from "@google/genai";
import { Gemini_API_Key, TMDB_Api_Options } from "../utils/constants";
import { GoogleGenAI, Type } from "@google/genai";
import MoviesList from "./MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { setGPTMovies } from "../utils/gptSlice";
const GPTSearch = () => {
  const dispatch = useDispatch();
  const inputValue = useRef();
  // const ai = new GoogleGenAI({ apiKey: Gemini_API_Key });

  // async function main() {
  //   const response = await ai.models.generateContent({
  //     model: "gemini-2.0-flash",
  //     contents: "Explain how AI works",
  //   });
  //   console.log(response.text);
  // }

  // main();

  const ai = new GoogleGenAI({ apiKey: Gemini_API_Key });

  const callApi = async (movieName) => {
    // const data = await fetch(`https://api.themoviedb.org/3/search/${movieName}`,TMDB_Api_Options)
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
      TMDB_Api_Options
    );
    const response = await data.json();
    // console.log(response.results);
    return response.results;
  };
  //   callApi();
  async function main(e) {
e.preventDefault()
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents:
        `Act as a movie recommendation system and give comma seperated list of only names of the movies from given query without double quotes. Query: ${inputValue.current}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING,
          },
          minItems: 5,
        },
      },
    });

    console.log(response.text);
    const promiseArray = response.text
      .split(",")
      .map((movie) => callApi(movie));
    const results = await Promise.all(promiseArray);
    console.log(results);
    dispatch(setGPTMovies(results));
  }
  const gptMovies = useSelector((store) => store.gpt.gptMovies);
  const dum = [
    [
      {
        adult: false,
        backdrop_path: "/v4Rvu6BMup3uecXgLjKmxO9SkxK.jpg",
        genre_ids: [14, 27],
        id: 538858,
        original_language: "hi",
        original_title: "तुम्बाड",
        overview:
          "India, 1918. On the outskirts of Tumbbad, a cursed village where it always rains, Vinayak, along with his mother and his brother, care of a mysterious old woman who keeps the secret of an ancestral treasure that Vinayak gets obsessed with.",
        popularity: 7.5733,
        poster_path: "/6qeRFImDskoIRkSCFatqeM2rM3k.jpg",
        release_date: "2018-10-12",
        title: "Tumbbad",
        video: false,
        vote_average: 7.479,
        vote_count: 268,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27, 14],
        id: 1356563,
        original_language: "hi",
        original_title: "तुम्बाड 2",
        overview: "Sequel to Mythology-Horror Hindi film.",
        popularity: 0.132,
        poster_path: "/39E8hnuCmtSv0OQmA2PHqlfwAtm.jpg",
        release_date: "",
        title: "Tumbbad II",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        id: 1357863,
        original_language: "en",
        original_title: "Tumbbad Collection",
        overview:
          "This is a Film Collection of Mythology-Horror Films, that takes place in a fictional place called Tumbbad. This is a franchise by Sohum Shah originally stemmed from Rahi Anil Barve's story.",
        poster_path: null,
        title: "Tumbbad Collection",
      },
    ],
    [
      {
        adult: false,
        backdrop_path: "/rfxj5AoOuvbqi0019TVZLy6gyCC.jpg",
        genre_ids: [27, 14, 53],
        id: 714338,
        original_language: "hi",
        original_title: "बुलबुल",
        overview:
          "A child bride grows up to be an enigmatic woman presiding over her household, harboring a painful past as supernatural murders of men plague her village.",
        popularity: 2.5785,
        poster_path: "/4XYEqHqvcf6vxFhNyeKZz5xbUfV.jpg",
        release_date: "2020-06-24",
        title: "Bulbbul",
        video: false,
        vote_average: 6.56,
        vote_count: 141,
      },
    ],
    [
      {
        adult: false,
        backdrop_path: "/f9gUtJtjda7Dy1sw3oJ9yWzjJiC.jpg",
        genre_ids: [27, 35],
        id: 533991,
        original_language: "hi",
        original_title: "स्त्री",
        overview:
          "Set in the town of Chanderi, Stree is based on the urban legend of Nale Ba that went viral in Karnataka in the 1990s, and features Shraddha Kapoor and Rajkummar Rao in pivotal roles.",
        popularity: 4.4364,
        poster_path: "/euhgW6hpDYw7nxFDjqHn0eKvQPX.jpg",
        release_date: "2018-08-31",
        title: "Stree",
        video: false,
        vote_average: 6.903,
        vote_count: 160,
      },
      {
        adult: false,
        backdrop_path: "/v0zWNLExxNzeqvAkaINtYE4o5rM.jpg",
        genre_ids: [27, 35],
        id: 1112426,
        original_language: "hi",
        original_title: "स्त्री 2: सरकटे का आतंक",
        overview:
          "After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it's up to Vicky and his friends to save their town and loved ones.",
        popularity: 4.441,
        poster_path: "/nfnhwfUEFuSOxxf4jDdBlY6Lccw.jpg",
        release_date: "2024-08-15",
        title: "Stree 2",
        video: false,
        vote_average: 6.595,
        vote_count: 58,
      },
      {
        adult: false,
        backdrop_path: "/3oamuPpVlwePMPuTdMS6SluHwHa.jpg",
        genre_ids: [18],
        id: 593995,
        original_language: "bn",
        original_title: "স্ত্রী",
        overview:
          "During the liberation of India, an old-fashioned man must examine his priorities.",
        popularity: 0.1335,
        poster_path: "/1e0n5mPNzYJZ5UDAuoK0qEepU3H.jpg",
        release_date: "1972-08-18",
        title: "Stree",
        video: false,
        vote_average: 9,
        vote_count: 1,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27, 35],
        id: 1374067,
        original_language: "hi",
        original_title: "स्त्री 3",
        overview: "",
        popularity: 0.5309,
        poster_path: "/mCLrSZl4ROUPlDv8VFFVQzTGQQU.jpg",
        release_date: "2027-08-13",
        title: "Stree 3",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [18, 10749],
        id: 824358,
        original_language: "or",
        original_title: "ସ୍ତ୍ରୀ",
        overview:
          "Anuaradha and her brother save a man, Debabrata, washed ashore from the sea. Anuaradha and Debabrata fall in love and get married, but Anuaradha's feelings change when she finds that Debabrata is widower and has a son.",
        popularity: 0.1006,
        poster_path: "/21l9hmxWeML4gmmRo6v6kEvFgWg.jpg",
        release_date: "1968-05-17",
        title: "Stree",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 767586,
        original_language: "hi",
        original_title: "Stree",
        overview:
          "Stree is a 1961 Indian fantasy film selected as the Indian entry for the Best Foreign Language Film at the 34th Academy Awards, but not nominated.",
        popularity: 0.1723,
        poster_path: "/mQ19rXBHzeg3s5TbDNmx48NGVuH.jpg",
        release_date: "1961-01-01",
        title: "Stree",
        video: false,
        vote_average: 5,
        vote_count: 1,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 1216294,
        original_language: "mr",
        original_title: "स्त्री जन्म ही तुझी कहाणी",
        overview: "Starring Usha Kiran and Sulochana.",
        popularity: 0,
        poster_path: null,
        release_date: "1952-01-01",
        title: "Stree Janma Hi Tujhi Kahani",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 322394,
        original_language: "en",
        original_title: "Stree Janma",
        overview: "1967 Indian Film",
        popularity: 0.0143,
        poster_path: null,
        release_date: "1967-01-01",
        title: "Stree Janma",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 570653,
        original_language: "en",
        original_title: "Ek Stree: A Hot Woman",
        overview: "Ek Stree: A Hot Woman 2000",
        popularity: 0.0331,
        poster_path: null,
        release_date: "2000-12-25",
        title: "Ek Stree: A Hot Woman",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 1099012,
        original_language: "en",
        original_title: "Rodney Yee's Yoga for Energy and Stree Relief",
        overview:
          "Filmed in picturesque Western Colorado, this DVD included three restorative yoga practices designed to calm the mind and gently energize the body. Perfect for anyone who wants to reduce stress and increase focus.",
        popularity: 0.1472,
        poster_path: "/eZpGlahKrtFGHwYU5v8JwOuKl7X.jpg",
        release_date: "2013-01-01",
        title: "Rodney Yee's Yoga for Energy and Stree Relief",
        video: true,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 1440925,
        original_language: "fr",
        original_title: "Michel Strée, Une âme Chevaleresque",
        overview:
          "About the Walloon teenager who hijacked the bus with schoolchildren in Vielsalm, who had been given the assignment to make a statement on the radio against injustice and inequality. Nowadays he takes care of birds and the wounds on their legs in a quarry. The father turns out to be the man's child. As a seven-year-old he found an injured bird along the road, which he took to class. The teacher told him to take care of it, but when the bird turned out to be a crow, the advice came to kill the animal. But the boy cured the crow and the animal stayed with him for eight years until it died of old age.",
        popularity: 0.0071,
        poster_path: null,
        release_date: "",
        title: "Michel Strée, Une âme Chevaleresque",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
    [
      {
        adult: false,
        backdrop_path: "/bZsATFS6wg6L45ele7Ve4ogGkUT.jpg",
        genre_ids: [14, 18, 27],
        id: 60898,
        original_language: "cn",
        original_title: "聊齋艷譚",
        overview:
          "Three vixens have meditated for 1,000 years to able to shed their animal natures and become human. For the final month of their rigors, they have moved near a village where women pray to a god of fertility. One sister visits the god's temple and thinks lustful thoughts. As she leaves, a priest confronts her, warning of dire consequences and of demons that will try to stop the vixens' transformation. Soon, the youngest sister saves a poor scholar from bandits and becomes enamored of him. Each sister visits him, and before long, the youth has made love to all three. After they invite him to stay with them, the playfulness takes a scary turn. Where can they turn for help?",
        popularity: 5.7829,
        poster_path: "/fTUCwsxVoLFuodAtlL6aITP1B45.jpg",
        release_date: "1990-05-19",
        title: "Erotic Ghost Story",
        video: false,
        vote_average: 6.176,
        vote_count: 85,
      },
      {
        adult: false,
        backdrop_path: "/7vyzEMfcEpBChEyK7cP6XW6B7hi.jpg",
        genre_ids: [27, 18],
        id: 429417,
        original_language: "en",
        original_title: "Ghost Stories",
        overview:
          "Professor Philip Goodman devotes his life to exposing phony psychics and fraudulent supernatural shenanigans. His skepticism soon gets put to the test when he receives news of three chilling and inexplicable cases -- disturbing visions in an abandoned asylum, a car accident deep in the woods and the spirit of an unborn child. Even scarier -- each of the macabre stories seems to have a sinister connection to the professor's own life.",
        popularity: 1.2058,
        poster_path: "/7a0sai9k5jr7YJRP5S3YIDErMVY.jpg",
        release_date: "2018-01-20",
        title: "Ghost Stories",
        video: false,
        vote_average: 6.443,
        vote_count: 1208,
      },
      {
        adult: false,
        backdrop_path: "/gGBF7gDBsbddvSdps6fvNKQoqDh.jpg",
        genre_ids: [27, 18, 14],
        id: 105825,
        original_language: "cn",
        original_title: "聊齋三集之燈草和尚",
        overview:
          "A wanderer meets a monk with magical powers and becomes entranced by a mural of exquisite dancing women. He enters the painting, unaware of the conspiracy behind it, and must rescue the women who are trapped within.",
        popularity: 7.6494,
        poster_path: "/2b1Y6NbZenY45DgC5CwncoLkpo.jpg",
        release_date: "1992-03-05",
        title: "Erotic Ghost Story III",
        video: false,
        vote_average: 5.5,
        vote_count: 23,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27],
        id: 687259,
        original_language: "zh",
        original_title: "镜花风月三之螺女挑情",
        overview: "",
        popularity: 3.8598,
        poster_path: "/m4ALMhsuqOOUkkABvgQWfrgoL8y.jpg",
        release_date: "1982-01-01",
        title: "Ghost stories",
        video: false,
        vote_average: 9.5,
        vote_count: 1,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27, 9648],
        id: 1270645,
        original_language: "it",
        original_title: "Lo Scrittore di Ghost Stories",
        overview:
          "The writer Lando Vivaldi makes his triumphal entrance in a world populated by ghosts, surreal hallucinations and crazy doctors, losing his mind in the labyrinth of these stories.",
        popularity: 0.0143,
        poster_path: "/oFPue4wIRcbURioFWeslFgOcN4k.jpg",
        release_date: "2012-01-01",
        title: "A Writer of Ghost Stories",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27],
        id: 85012,
        original_language: "cn",
        original_title: "猛鬼愛情故事",
        overview:
          "Wong Jing's Classroom follows Ling, the new substitute teacher at a suburban high school. She feels something wrong about her class. The students in her Class 4E are an unruly bunch, except for Don Don, who always sits quietly in the corner. Suspecting that her students Gi Gi, Co Co, and Fong engage in prostitution, Ling reports the problems with her class to the dean, only to be told that there has never been a Class 4E in the school...  In Patrick Kong's Travel, a group of friends go on vacation in Mainland, during which Bo gets killed in a road accident. At Bo's funeral, her travel mates meet Bo's estranged lover Ka Ming , with whom Bo had a heated quarrel on the phone just prior to her tragic death. At the hot-pot dinner after the funeral, a pale-faced Ka Ming reveals to the survivors the secret of his relationship with Bo before going on a killing spree...",
        popularity: 0.6004,
        poster_path: "/b7avr37w2mcx2nOziXqGTMHYTcR.jpg",
        release_date: "2011-10-27",
        title: "Hong Kong Ghost Stories",
        video: false,
        vote_average: 3.8,
        vote_count: 6,
      },
      {
        adult: false,
        backdrop_path: "/9c7riUPW9E8HhybB2In62yzPdLE.jpg",
        genre_ids: [14, 28, 35],
        id: 9050,
        original_language: "cn",
        original_title: "倩女幽魂II人間道",
        overview:
          "In this installment of a phenomenal saga of the super natural, four young people are caught in a tug-o-war of evil between an Imperial Wizard and a corrupt General. Outrageous special effects galore.",
        popularity: 2.1817,
        poster_path: "/uh9xhW3OX77fisjYNhhy4hrUtRZ.jpg",
        release_date: "1990-07-13",
        title: "A Chinese Ghost Story II",
        video: false,
        vote_average: 6.714,
        vote_count: 126,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27],
        id: 1135028,
        original_language: "ja",
        original_title: "コワバナJ 放課後の怪談",
        overview:
          'A number of terrifying experiences unfold in a school setting! A mysterious transfer student comes to a high school girl who is aiming for a contest. In "Koisuru Jinbutsu Modeki (Human Body Model in Love)," a girl on the class committee tries to stop a prank on a rag doll in the science lab. Three stories, including "Ghost Club Members," which depicts an apparition that occurred in the art room !',
        popularity: 0.0286,
        poster_path: "/A3bv1Kw5ZLACH1Yl2Mx8NM8b29V.jpg",
        release_date: "2012-08-03",
        title: "Kowabana J: After School Ghost Stories",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27, 9648],
        id: 1206874,
        original_language: "ja",
        original_title: "会社の怪談",
        overview:
          "A spine-chilling horror story set in a company, not a school. The film dramatically recreates a bizarre story that occurred in an office. Miki, a temporary worker, feels a spirit when she heads to her new office. On the 13th floor of the building, there used to be a red crack...",
        popularity: 0.1539,
        poster_path: "/2aGxZrWDBlLNVr8T9H2ZdmIUaGD.jpg",
        release_date: "1997-05-30",
        title: "Company Ghost Stories",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/1dPQKapAGIdeGFFBhn6zdSKcHE0.jpg",
        genre_ids: [27, 9648],
        id: 74650,
        original_language: "it",
        original_title: "Fantasmi",
        overview: "An Italian anthology horror movie about different stories.",
        popularity: 0.1703,
        poster_path: "/8ykbl5Ax5LRg5UjJu2vlmngXjmg.jpg",
        release_date: "2011-07-10",
        title: "Fantasmi: Italian Ghost Stories",
        video: false,
        vote_average: 3.917,
        vote_count: 6,
      },
      {
        adult: false,
        backdrop_path: "/8dxusN9fVOFc89jcycLBYOqBCj.jpg",
        genre_ids: [27, 14],
        id: 78428,
        original_language: "cn",
        original_title: "聊齋艷譚續集：五通神",
        overview:
          "Wutung a sex demon returns in another body where he falls for the mortal girl Hsiao-yen, but heaven thinks otherwise with the girl being burned at the stake and her soul being incarnated in the just born Fang Yu-yin. Anger fills Wutung, and to stop this vengeance the town near his lair promise to offer him a virgin girl at the end of every month to become his sex slave. Ya-Yin is selected; however her lover rescues her from the clutches of Wutung. So Wutung sends his demon concubine to get her back, and to cause havoc on the village for the interference.",
        popularity: 3.1499,
        poster_path: "/ighnU4PYk0AQDW9qkD64E5p4hRd.jpg",
        release_date: "1991-01-23",
        title: "Erotic Ghost Story II",
        video: false,
        vote_average: 5.019,
        vote_count: 27,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27],
        id: 1135030,
        original_language: "ja",
        original_title: "コワバナJ 放課後の怪談3",
        overview:
          'A number of terrifying experiences take place in a school! The mysterious incident "The Day You Were There" at a closed-down alma mater, "The Day of the Dead" in which an older sister in despair after losing her only living relative, her younger sister, and a former teacher standing in a school building just before it was demolished. A former teacher stands in a school building just before its demolition. What is the abominable event he had sealed away ?',
        popularity: 0.091,
        poster_path: "/wKfazWA0321LnwikBmwAQHadcH2.jpg",
        release_date: "2012-12-07",
        title: "Kowabana J: After School Ghost Stories 3",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [],
        id: 524793,
        original_language: "cn",
        original_title: "網上怪談‎",
        overview:
          "There is a rumor that floats around the web. If someone surfs the website www.990714.com, during the Chinese Ghost Festival, they can communicate with the people of the underworld. Seven students succeed in communicating, and reap the consequences. One by one, they each mysterious die. While Han is surfing the website, he hears a knock on the door. It is Tal, a hall-monitor for his school. One night, Tal tells Han that there is another mystery to the site. He reveals that the site can tell you what will happen the next day...",
        popularity: 0.193,
        poster_path: "/qWZRbJmRSNJImMzQSRbprIHQAha.jpg",
        release_date: "2000-01-14",
        title: "Internet Ghost Stories",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: "/xHAKGxhi4m4i8e0CQ9UHOLxI9Nr.jpg",
        genre_ids: [14, 10749],
        id: 298099,
        original_language: "cn",
        original_title: "聊齋艷譚之幽媾",
        overview:
          "The soon-to-be Monk Talkative does his best to understand when Fairy Yeh explains what must be done. Rabbit spirits have escaped from the heavenly garden, and must be recaptured. These bunnies can assume human female form, and gorgeous forms at that. One is played by Pang Dan, who happens to be the soon-to-be Monk Talkative's wife. Talkative finds the explanation hard to follow but decides to help.",
        popularity: 1.9709,
        poster_path: "/s8wcMzeFJadfbVt40ietjDJ6JAm.jpg",
        release_date: "1997-11-06",
        title: "Erotic Ghost Story: Perfect Match",
        video: false,
        vote_average: 2.25,
        vote_count: 8,
      },
      {
        adult: false,
        backdrop_path: "/fz3HjkLtXRzRedhebARuTuncd7X.jpg",
        genre_ids: [14],
        id: 64530,
        original_language: "cn",
        original_title: "玉女聊齋",
        overview:
          "Chu is a lowly debt collector for the local strongman Wang. Problem is that Chu is too nice/honest/dopey to be very good at the grubby collections job. Chu is treated badly by his boss Wang. Eventually Wang catches one of his twin daughters in the act of seducing the hapless bumpkin Chu. Wang naturally blames Chu rather than the daughter. For punishment Wang sends Chu on an impossible quest to Satan's Temple to steal a statue of Judge Lu.",
        popularity: 2.3683,
        poster_path: "/m6y5exiIeJz5L8G5nWdaimdBn3d.jpg",
        release_date: "1998-06-12",
        title: "Chinese Erotic Ghost Story",
        video: false,
        vote_average: 6.083,
        vote_count: 12,
      },
      {
        adult: false,
        backdrop_path: "/uLfXzapeBlbsa2C8m0ewNiONNns.jpg",
        genre_ids: [27, 14],
        id: 855302,
        original_language: "zh",
        original_title: "台湾怪谈",
        overview: "",
        popularity: 2.6436,
        poster_path: "/JgXvITwWlH7kKJvJp0n39Swqum.jpg",
        release_date: "1986-01-01",
        title: "Taiwan Ghost Stories",
        video: false,
        vote_average: 8,
        vote_count: 1,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27],
        id: 1135032,
        original_language: "ja",
        original_title: "コワバナJ 放課後の怪談4",
        overview:
          'A number of terrifying experiences take place in a school! In "Toilet Hair", a girl in a school uniform talks to a stranger in the school bathroom. When she goes to school one day, she sees a girl who looks exactly like the girl she saw in her dream in "MAGIC" and 4 other stories.',
        popularity: 0.0363,
        poster_path: "/tlp35zjgCFmv0t8LWHHZEjvCkn9.jpg",
        release_date: "2013-01-08",
        title: "Kowabana J: After School Ghost Stories 4",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27, 10770],
        id: 877430,
        original_language: "en",
        original_title: "Classic Ghost Stories",
        overview:
          'Five partially-dramatized readings of classic M.R. James ghost stories by actor Robert Powell. Including "The Mezzotint", "The Ash-Tree", "The Rose Garden", "Wailing Well" and "Oh, Whistle, and I\'ll Come to You, My Lad".',
        popularity: 0.0404,
        poster_path: "/axKIhHcht8LDrLeMdyYoINxrL8l.jpg",
        release_date: "1986-12-31",
        title: "Classic Ghost Stories",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [27],
        id: 1119842,
        original_language: "ja",
        original_title: "怪談百物語",
        overview:
          '"It really happened!! The definitive version of the mysterious document released by the staff of "Urban Legend"! Practice the fear of a hundred stories handed down from ancient times.',
        popularity: 0.0404,
        poster_path: "/eL99jXAPq1K4EgdMGZ7IpUSzqoh.jpg",
        release_date: "2004-05-07",
        title: "100 Ghost Stories",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [18, 27],
        id: 1055350,
        original_language: "ja",
        original_title: "四谷怪談",
        overview: "",
        popularity: 0.0286,
        poster_path: null,
        release_date: "1936-01-01",
        title: "Yotsuya Ghost Stories",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
    [
      {
        adult: false,
        backdrop_path: "/tctSp3V05bCspn3s0JSZB16kmeZ.jpg",
        genre_ids: [27, 35],
        id: 694103,
        original_language: "hi",
        original_title: "रूही",
        overview:
          "Roohi is set in a fictional town of North India. The film revolves around two small-town boys Bhaura and Kattanni who are stuck in a forest with Roohi. But there’s an insidious spirit following them with feet turned backwards.",
        popularity: 1.7271,
        poster_path: "/j00W4Y5ynvFpjPa53UC1JULBZbc.jpg",
        release_date: "2021-03-11",
        title: "Roohi",
        video: false,
        vote_average: 4.4,
        vote_count: 28,
      },
      {
        adult: false,
        backdrop_path: null,
        genre_ids: [18],
        id: 846942,
        original_language: "hi",
        original_title: "Roohi",
        overview:
          "It's 1996 and Roohi has decided to follow her heart and be with the person she loves.",
        popularity: 0.0704,
        poster_path: "/ehEFCGGApRNheeOyrETDVkAa3ad.jpg",
        release_date: "2018-09-06",
        title: "Roohi",
        video: false,
        vote_average: 0,
        vote_count: 0,
      },
    ],
  ];
  dum.map((m1) => m1.map((m2) => console.log(m2.original_title)));
//   main();
  return (
    <div className="pt-[15%] w-full  netflix-hero-bg bg-cover bg-no-repeat bg-center">
      <form className=" w-[600px] h-[200px] mx-auto p-4 bg-gray-800/50 flex items-center" onSubmit={(e)=>main(e)}>
        <input
          ref={inputValue}
          type="text"
          name="movie-name"
          id="movie-name"
          onChange={(e) => (inputValue.current = e.target.value)}
          placeholder="Try 'Indian Horror Movies'"
          className="p-2 text-xl rounded-lg text-white w-[80%] border border-white"
        />
        <button
          type="submit"
          className="bg-amber-700 p-2 text-white text-lg rounded-lg ml-2 cursor-pointer hover:bg-amber-800"
        >
          Submit
        </button>
      </form>
      <div className="w-full bg-gray-800">
        {gptMovies &&
          gptMovies.map((m1) =>
            <MoviesList category={""} movies={m1} />
            // m1.map((m2) => (
            
          )}
      </div>
    </div>
  );
};

export default GPTSearch;
