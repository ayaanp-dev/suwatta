'use client'

import React, { useState } from 'react';
import { Card, CardTitle, CardContent, CardDescription, CardFooter, CardHeader } from './card';
import { Label } from './label';
import { Button } from './button';
import { toast } from './use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type Props = {
    question: string,
    answer_choices: Array<String>,
    answer: string
}

const QuestionForm = (props: Props) => {
  const [selectedChoice, setSelectedChoice] = useState('');
  const [right, setRight] = useState(false);

  const handleChoiceChange = (event:any) => {
    setSelectedChoice(event.target.value);
  };

  const wrong_choices = props.answer_choices.splice(props.answer_choices.indexOf(props.answer), 1)

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Check if the selected choice is correct
    if (selectedChoice === 'correct-answer') {
      setRight(true);
      toast({

        title: "CORRECT",
        description: "good job, keep learning!",
      })
    } else {
      setRight(false);
      toast({
        variant: "destructive",
        title: "INCORRECT",
        description: "KEEP TRYING!!!!",
      })
    }
  };

  return (
    <Card>
        <CardHeader>
            <CardTitle>
                {props.question}
            </CardTitle>
        </CardHeader>
        <CardContent className="flex aspect-square items-center justify-center p-6">
        <form onSubmit={handleSubmit}>
          <input
            type="radio"
            name="answer"
            value="wrong-answer1"
            checked={selectedChoice === 'wrong-answer1'}
            onChange={handleChoiceChange} id="wrong-answer1"
          />
            <label htmlFor="wrong-answer1">{wrong_choices[0]}</label>
          <input
            type="radio"
            name="answer"
            value="wrong-answer2"
            checked={selectedChoice === 'wrong-answer2'} id="wrong-answer2"
            onChange={handleChoiceChange}
          />
          <label htmlFor="wrong-answer2">{wrong_choices[1]}</label>
          <input
            type="radio"
            name="answer"
            value="correct-answer"
            checked={selectedChoice === 'correct-answer'} id ="correct-answer"
            onChange={handleChoiceChange}
          />
<label htmlFor="correct-answer">{props.answer}</label>          <input
            type="radio"
            name="answer"
            value="wrong-answer3"
            checked={selectedChoice === 'wrong-answer3'} id ="wrong-answer4"
            onChange={handleChoiceChange}
          />
          <label htmlFor="wrong-answer3">{wrong_choices[2]}</label>
        <Button type="submit">Submit</Button>
      </form>
      </CardContent>
   </Card>
  );
};

export default QuestionForm;