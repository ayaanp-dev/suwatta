'use client'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "./card"
import GetRandomMath from "@/app/api/get_random_math";
import QuestionForm from "./question";
import questions_json from "@/app/api/math_questions.json";

type Props = {
  questions: number
}

export default function MathPracticeCarousel(props: Props) {

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: props.questions }).map((_, index) => (
          <CarouselItem key={index}>
            <QuestionForm question={questions_json[Math.floor(Math.random() * questions_json.length)].question}
            answer_choices={questions_json[Math.floor(Math.random() * questions_json.length)].choices}
            answer={questions_json[Math.floor(Math.random() * questions_json.length)].answer}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

  )
}