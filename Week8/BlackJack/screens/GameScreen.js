import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
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
          let newUserCard = prevUserCards;
          newUserCard[newUserCard.indexOf("aceClubs")] = "lowAceClubs";
          return newUserCard;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });

        // Ace of Dimonds
      } else if (userHand.includes("aceDimonds")) {
        setUserHand((prevUserCards) => {
          let newUserCard = prevUserCards;
          newUserCard[newUserCard.indexOf("aceDimonds")] = "lowAceDimonds";
          return newUserCard;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // Ace of Hearts
      } else if (userHand.includes("aceHearts")) {
        setUserHand((prevUserCards) => {
          let newUserCard = prevUserCards;
          newUserCard[newUserCard.indexOf("aceHearts")] = "lowAceHearts";
          return newUserCard;
        });

        // Change the user score
        setUserScore((prevUserScore) => {
          return prevUserScore - 10 + Cards[userCard].value;
        });
        // Ace of Spades
      } else if (userHand.includes("aceSpades")) {
        setUserHand((prevUserCards) => {
          let newUserCard = prevUserCards;
          newUserCard[newUserCard.indexOf("aceSpades")] = "lowAceSpades";
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
          let newComputerCard = prevComputerCards;
          newComputerCard[newComputerCard.indexOf("aceClubs")] = "lowAceClubs";
          return newComputerCard;
        });

        // Change the computer score
        setComputerScore((prevComputerScore) => {
          return prevComputerScore - 10 + Cards[computerCard].value;
        });

        // Ace of Dimonds
      } else if (computerHand.includes("aceDimonds")) {
        setComputerHand((prevComputerCards) => {
          let newComputerCard = prevComputerCards;
          newComputerCard[newComputerCard.indexOf("aceDimonds")] =
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
          let newComputerCard = prevComputerCards;
          newComputerCard[newComputerCard.indexOf("aceHearts")] =
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
          let newComputerCard = prevComputerCards;
          newComputerCard[newComputerCard.indexOf("aceSpades")] =
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

  const { width, height } = useWindowDimensions();

  let content = (
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
      <View style={[styles.titleContainer, { height: height * 0.15 }]}>
        <Header>Computer's Hand</Header>
      </View>

      <View style={styles.computerImageContainer}>
        <Image
          style={[styles.computerImage, { width: width * 0.25 }]}
          source={require("../assets/images/cardback1.png")}
        />
        <View style={{ marginLeft: -15 }}>
          <Image
            style={[styles.computerImage, { width: width * 0.25 }]}
            source={
              computerHand.length === 0
                ? require("../assets/images/cardback1.png")
                : Cards[computerHand[1]].picture
            }
          />
        </View>
      </View>

      <View style={[styles.titleContainer, { height: height * 0.15 }]}>
        <Header>Player's Hand</Header>
      </View>

      <View style={styles.playerImageContainer}>
        {userHand.map((index) => {
          return (
            <View key={index} style={{ marginLeft: -15 * (numUserHand + 1) }}>
              <Image
                style={[styles.playerImage, { width: width * 0.25 }]}
                source={
                  userHand.length === 0
                    ? require("../assets/images/cardback1.png")
                    : Cards[index].picture
                }
              />
            </View>
          );
        })}
      </View>

      <View style={[styles.buttonsContainer, { height: height * 0.25 }]}>
        <NavButton style={styles.button} onPress={drawUserCardHandler}>
          Hit Me!
        </NavButton>
        <NavButton style={styles.button} onPress={stayHandler}>
          Stay!
        </NavButton>
      </View>
    </View>
  );

  if (width > height) {
    content = (
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
        <View style={styles.rowContainer}>
          <View style={styles.innerRowContainer}>
            <View style={[styles.titleContainer, { height: height * 0.15 }]}>
              <Header>Computer's Hand</Header>
            </View>

            <View style={styles.computerImageContainer}>
              <Image
                style={[styles.computerImage, { width: width * 0.15 }]}
                source={require("../assets/images/cardback1.png")}
              />
              <View style={{ marginLeft: -15 }}>
                <Image
                  style={[styles.computerImage, { width: width * 0.15 }]}
                  source={
                    computerHand.length === 0
                      ? require("../assets/images/cardback1.png")
                      : Cards[computerHand[1]].picture
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.innerRowContainer}>
            <View style={[styles.titleContainer, { height: height * 0.15 }]}>
              <Header>Player's Hand</Header>
            </View>

            <View style={styles.playerImageContainer}>
              {userHand.map((index) => {
                return (
                  <View
                    key={index}
                    style={{ marginLeft: -15 * (numUserHand + 1) }}
                  >
                    <Image
                      style={[styles.playerImage, { width: width * 0.15 }]}
                      source={
                        userHand.length === 0
                          ? require("../assets/images/cardback1.png")
                          : Cards[index].picture
                      }
                    />
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        <View style={[styles.buttonsContainer, { height: height * 0.25 }]}>
          <NavButton style={styles.button} onPress={drawUserCardHandler}>
            Hit Me!
          </NavButton>
          <NavButton style={styles.button} onPress={stayHandler}>
            Stay!
          </NavButton>
        </View>
      </View>
    );
  }

  return (
    // Root View Holds Contents and Sets Screen Boundaries
    <ImageBackground
      source={require("../assets/images/blackjack_felt.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {content}
    </ImageBackground>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  backgroundImage: {
    opacity: 0.35,
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  computerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  computerImage: {
    resizeMode: "contain",
  },
  playerImageContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  playerImage: {
    resizeMode: "contain",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  innerRowContainer: {
    flex: 1,
  },
});