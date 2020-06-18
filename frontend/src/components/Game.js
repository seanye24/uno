import React, { useState, useEffect } from 'react';
import './../App.css';
import socketService from './../services/socket.js';
import Deck from './Deck';
import Opponent from './Opponent';
import Player from './Player';

const Game = () => {
  const [props, setProps] = useState({
    id: null,
    hand: [],
    cardOnTop: [],
    opponents: [],
    currTurn: [],
    winner: [],
  });

  const { id, hand, cardOnTop, opponents, currTurn, winner } = props;

  const draw = () => {
    console.log(`calling draw`);
    socketService.draw({ id: id });
  };

  const playCard = (card) => {
    socketService.play({ id: id, card: card });
  };

  useEffect(() => {
    socketService.socket.on('giveID', (data) => {
      let temp = data.id;
      socketService.socket.on('fetch', (data) => {
        setProps({
          id: temp,
          hand: data.playerData.find((p) => p.id === temp).hand,
          cardOnTop: data.topCard,
          opponents: data.playerData.filter((p) => p.id !== temp),
          currTurn: data.currPlayer,
          winner: data.winner,
        });
      });
    });
  }, []);

  useEffect(() => {
    if (id) {
      socketService.socket.on('fetch', (data) => {
        setProps({
          ...props,
          hand: data.playerData.find((p) => p.id === id).hand,
          cardOnTop: data.topCard,
          opponents: data.playerData.filter((p) => p.id !== id),
          currTurn: data.currPlayer,
          winner: data.winner,
        });
      });
    }
  }, []);

  const cardOnTopStyle = {
    height: 100,
    width: 80,
    fontSize: 'xx-large',
    color: cardOnTop.color,
    border: 'solid',
    borderRadius: 1,
    marginTop: 10,
    marginBottom: 10,
    alignText: 'center',
  };

  if (!winner) {
    return (
      //players in circle
      //deck in middle/ uno button
      <div>
        <center>
          <table>
            <tbody style={{ marginTop: 10, marginBottom: 10 }}>
              <tr >
                {opponents.map((o) => (
                  <Opponent opponent={o} />
                ))}
              </tr>
            </tbody>
          </table>
          <Deck />
          <div style={cardOnTopStyle}>{`${cardOnTop.value}`}</div>
          <button onClick={() => draw()}>Draw</button>
          <Player
            player={{ hand: hand, id: id }}
            cardOnTop={cardOnTop}
            currTurn={currTurn}
            playCard={playCard}
          />
        </center>
      </div>
      //player's deck with navigation buttons
    );
  } else {
    return <h1>Game Over Boiz!</h1>;
  }
};

export default Game;
