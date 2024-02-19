import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Header from "../components/Header";
import Cards from "../constants/cards";
import { useEffect, useState } from "react";

function generateRandomBetween(min, max, exclude) {
  const cardKeys = Object.keys(Cards);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  const cardName = cardKeys[rndNum];

  if (exclude.includes(cardName)) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return cardName;
  }
}

function GameScreen(props) {
  // Set Safe Aera Screen Boundaries
  const inset = useSafeAreaInsets();

  // Set some state varables for drawn cards
  const [drawnCards, setDrawnCards] = useState([]);
  const [userHand, setUserHand] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [numUserHand, setNumUserHand] = useState(0);
  const [computerHand, setComputerHand] = useState([]);
  const [computerScore, setComputerScore] = useState(0);
  const [userFinished, setUserFinished] = useState(false);

  function drawUserCardHandler() {
    // Generate a random card name
    let userCard = generateRandomBetween(0, 52, drawnCards);

    // Set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [userCard, ...prevDrawnCards];
    });

    // Set tje card in the user hand
    setUserHand((prevDrawnCards) => {
      return [userCard, ...prevDrawnCards];
    });

    // Set the number of cards in players hand
    setNumUserHand(userHand.length);

    // Calculate the new score of the user to see if the card will make the player bust
    if (Cards[userCard].value + userScore > 21) {
      // If the new card will make the player bust, check to see if there are any aces in the users hand
      // Ace of Clubs
      if (userHand.includes("aceClubs")) {
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceClubs")] = "lowAceClubs";
          return newUserCard;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });

        // Ace of Dimonds
      } else if (userHand.includes("aceDimonds")) {
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceDimonds")] = "lowAceDimonds";
          return newUserCard;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // Ace of Hearts
      } else if (userHand.includes("aceHearts")) {
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceHearts")] = "lowAceHearts";
          return newUserCard;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // Ace of Spades
      } else if (userHand.includes("aceSpades")) {
        setUserHand((prevUserCards) => {
          let newUserCards = prevUserCards;
          newUserCards[newUserCards.indexOf("aceSpades")] = "lowAceSpades";
          return newUserCard;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // No Aces
      } else {
        // If the player has no aces then add the score and they bust
        setUserScore((prevUserScore) => {
          return prevUserScore + Cards[userCard].value;
        });
      }
    } else {
      // If the player wont bust, add the score like normal
      setUserScore((prevUserScore) => {
        return prevUserScore + Cards[userCard].value;
      });
    }
  }

  function drawComputerCardHandler() {
    // Generate a random card name
    let computerCard = generateRandomBetween(0, 52, drawnCards);

    // Set the card as drawn from the deck
    setDrawnCards((prevDrawnCards) => {
      return [computerCard, ...prevDrawnCards];
    });

    // Set tje card in the computer hand
    setComputerHand((prevDrawnCards) => {
      return [computerCard, ...prevDrawnCards];
    });
    // Calculate the new score of the computer to see if the card will make the player bust
    if (Cards[computerCard].value + computerScore > 21) {
      // If the new card will make the player bust, check to see if there are any aces in the computers hand
      // Ace of Clubs
      if (computerHand.includes("aceClubs")) {
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceClubs")] =
            "lowAceClubs";
          return newComputerCard;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });

        // Ace of Dimonds
      } else if (computerHand.includes("aceDimonds")) {
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceDimonds")] =
            "lowAceDimonds";
          return newComputerCard;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        // Ace of Hearts
      } else if (computerHand.includes("aceHearts")) {
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceHearts")] =
            "lowAceHearts";
          return newComputerCard;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        // Ace of Spades
      } else if (computerHand.includes("aceSpades")) {
        setComputerHand((prevComputerCards) => {
          let newComputerCards = prevComputerCards;
          newComputerCards[newComputerCards.indexOf("aceSpades")] =
            "lowAceSpades";
          return newComputerCard;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });
        // No Aces
      } else {
        // If the player has no aces then add the score and they bust
        setComputerScore((prevComputerScore) => {
          return prevComputerScore + Cards[computerCard].value;
        });
      }
    } else {
      // If the player wont bust, add the score like normal
      setComputerScore((prevComputerScore) => {
        return prevComputerScore + Cards[computerCard].value;
      });
    }
  }

  // Function that handles the user finisheing the game and adding cards to computers hand
  function stayHandler() {
    // Set user finished to True
    setUserFinished(true);

    // Attempt to add up to 10 cards to the computers hand
    if (computerScore <= 16) {
      // Wait for the draw handler to complete before continuing the loop
      drawComputerCardHandler();
    }
  }

  // Hook that will occur only when the page is added to the UI
  useEffect(() => {
    setUserHand([]);
    setComputerHand([]);
    setDrawnCards([]);
    setNumUserHand(0);
    setUserScore(0);
    setComputerScore(0);
    setUserFinished(false);

    // Draw initial two cards for user and computer
    drawComputerCardHandler();
    drawComputerCardHandler();
    drawUserCardHandler();
    drawUserCardHandler();
  }, []); // Since no dependencies only resolves when GameScreen is added to UI

  useEffect(() => {
    if (userScore > 21) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userScore]); // Dependent on userScore and will activate when userScore changes

  useEffect(() => {
    if (userFinished === true && computerScore > 16) {
      props.onSetUserScore(userScore);
      props.onSetComputerScore(computerScore);
      props.onNext();
    }
  }, [userFinished, computerScore]);

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
          paddingLeft: inset.left,
          paddingRight: inset.right,
        },
      ]}
    >
      <View style={styles.headerContainer}>
        <Header>Computer's Hand</Header>
      </View>

      <View style={styles.computerImageContainer}>
        <Image
          style={styles.computerImage}
          source={require("../assets/images/cardback1.png")}
        />
        <Image
          style={styles.computerImage}
          source={
            computerHand.length === 0
              ? require("../assets/images/cardback1.png")
              : Cards[computerHand[1]].picture
          }
        />
      </View>

      <View style={styles.headerContainer}>
        <Header>Player's Hand</Header>
      </View>

      <View style={styles.playerImageContainer}>
        {userHand.map((index) => {
          return (
            <Image
              style={[styles.playerImage, { width: 100 - numUserHand * 10 }]}
              key={index}
              source={
                userHand.length === 0
                  ? "../assets/images/cardback1.png"
                  : Cards[index].picture
              }
            />
          );
        })}
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <NavButton style={styles.button} onPress={drawUserCardHandler}>Hit Me!</NavButton>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton style={styles.button} onPress={stayHandler}>Stay!</NavButton>
        </View>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  computerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playerImage: {
    height: 150,
    width: 100,
    resizeMode: "contain",
  },
  imageContainer: {
    flex: 5,
    justifyContent: "center",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    marginHorizontal: 10,
    marginBottom: 25,
  },
});
