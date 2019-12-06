import React from 'react'
import Scoreboard from './Scoreboard'
import {answerDistribution, choiceColors, choiceSymbols, scoresByPlayer} from '../../utils'
import styles from '../styles/Leaderboard.css'
import Icons from '../Icons'

class Leaderboard extends React.Component {
  render() {
    const {match} = this.props
    // const playersWithScores = scoresByPlayer(match)
    // const playersWithScoresCurrentQuestion = scoresByPlayer(match, match.currentQuestionKey)
    const playersWithScores = match.players
    return (
      <div className={styles.root}>
        <h2 className={styles.heading}>Leaderboard</h2>
        <div className={styles.wrapper}>
          <ul className={styles.list}>
            {playersWithScores.map((player, index) => {
              return (
                <li className={styles.item} key={player._id}>
                  <span className={styles.rank}>{index + 1}</span>
                  <span className={styles.name}>{player.name}</span>
                  <span className={styles.points}>{player.score > 0 ? player.score : 0} pts</span>
                </li>
              )
            })}
          </ul>
        </div>
        {/* TODO: Add to click/timeout between total and current scores */}
        <p>Current/Total</p>
        {/* <Scoreboard playersWithScores={playersWithScoresCurrentQuestion} />
        <h2>Scores - Overall </h2>
        <Scoreboard playersWithScores={playersWithScores} /> */}
      </div>
    )
  }
}

export default Leaderboard
