# Suwatta

## Why did I make it 🤔

SATs are the biggest exam that most high schoolers take, I personally am going to take it next year. I built Suwatta to help students master the SAT. 📝

**Main Issue** - Low income to middle income students need scholarships to be afford a good education and not fall into enormous amounts of student debt. 💵

**How Suwatta helps** - Because it is completely free and accessible on every device, it is a platform that not only uses proven learning methods, but also makes it enjoyable with the gamified aspect. 🖥️

**Impact** - All people are brilliant in their own way and deserve to get a good education no matter what, and that is why Suwatta is so great. 🧠

## Technologies used

Suwatta uses NextJS, TailwindCSS, Shadcn, Turso, Drizzle, and Kinde

THIS IS A NEXTJS HEAVY PROJECT - It is my first time using every single one of these technologies and even my first time using TypeScript, and I had a blast making this, thanks TUHSD! 🙏

## Documentation

This code is a bit messy so bear with me

*navbar.tsx* - Navigation bar, self-explanatory
<br>
*question.tsx* - This is a building block component as it tells the code exactly what each question in each practice should look like and how it is structed. It also reads all the question data.
<br>
*streak-calendar.tsx* - On top of calendar component, it keeps a streak of how many days you have used Suwatta, you get more points each day you keep a streak - inspired by Duolingo
<br>
*math-practice-carousel.tsx* - It is the component of each math practice
<br>
*english-practice-carousel.tsx* - It is the component of each english practice
<br>
*dialog.tsx* - That is how the practices are actually opened, rather than creating a new page for each practice, a dialog just pops up
<br>
*db.ts* - connects to Turso database using Drizzle, stores points
<br>
*kindeAuth* - Authentication system

## Feedback

Have any feedback? Please let me know by sending me a dm on discord, my username is the_pandaaa 👋

Keep in mind, there are probably problems you are going to encounter while viewing the project, time was probably the biggest thing here as even though I did nothing but code the entire day, I am a bit slow I guess 😅