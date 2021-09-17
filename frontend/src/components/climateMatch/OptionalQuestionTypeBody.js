import React from 'react';
import { Chip, makeStyles } from '@material-ui/core';
import ClimateMatchHeadline from './ClimateMatchHeadline';
import QuestionButtonBar from './QuestionButtonBar';

const useStyles = makeStyles(theme => ({
  headline: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    textAlign: "center"
  },
  answerContainer: {
    textAlign: "center",
    letterSpacing: 0,
    opacity: 1
  },
  answerChip: {
    height: 59,
    width: 509,
    background: "#66BCB5 0% 0% no-repeat padding-box",
    borderRadius: 36,
    marginTop: 10,
    color: "#F8F8F8",
    fontSize: 25,
    fontWeight: 600 
  }
}))

export default function OptionalQuestionTypeBody({question, onForwardClick, onBackClick}) {
  const classes = useStyles();
  const answers = question.answers;
  return (
    <div>
      <ClimateMatchHeadline size="medium" className={classes.headline}>
        {question.text}
      </ClimateMatchHeadline>
      <div>
        {answers.map((a, index) => (
          <div key={index} className={classes.answerContainer}>
            <Chip label={a.text} 
              clickable={true} 
              onClick={onForwardClick}
              className={classes.answerChip}
            />  
          </div>
        ))}
      </div>
      <QuestionButtonBar onForwardClick={onForwardClick} onBackClick={onBackClick}/>
    </div>
  )
}