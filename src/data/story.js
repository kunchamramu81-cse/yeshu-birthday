// ============================================================
// STORY DATA — Extracted from memories.md
// This is the single source of truth for all story content.
// ============================================================

export const meta = {
  title: "The Story We Never Planned",
  subtitle: "A Journey Through Friendship, Laughter & Unforgettable Memories",
  writtenBy: "Ramu",
  birthday: {
    person: "Yeshu",
    date: "2026",
  },
  runtime: {
    chapters: 17,
    photographs: 92,
    memories: "Countless",
  },
  cast: ["Yeshu", "Ramu", "Hansika", "Varshitha", "Aishwarya"],
  genres: [
    { emoji: "💜", label: "Friendship" },
    { emoji: "😂", label: "Comedy" },
    { emoji: "🎓", label: "College Life" },
    { emoji: "🌸", label: "Memories" },
    { emoji: "🎉", label: "Adventure" },
  ],
};

export const openingNarration = [
  "Life introduces us to thousands of people.",
  "Some stay only for a moment.",
  "Some stay for a semester.",
  "And then there are those rare people who quietly become one of the most beautiful parts of our journey.",
  "This is not a love story.",
  "It is not a fairy tale.",
  "It is simply the story of two college friends whose paths crossed on an ordinary day and slowly turned into something unforgettable.",
  "This story isn't about perfect photographs.",
  "It's about the memories hidden inside them.",
  "Every laugh. Every silly selfie. Every festival. Every trip. Every random conversation. Every ordinary day that somehow became extraordinary.",
  "If these memories could speak… this would be their story.",
];

export const friendshipStats = [
  { icon: "📅", label: "Friendship Started", value: "9 July 2024" },
  { icon: "📖", label: "Chapters", value: "17" },
  { icon: "📸", label: "Photographs", value: "92" },
  { icon: "🎉", label: "Festivals Celebrated", value: "Garba · Diwali · Holi · Ugadi · Srijan" },
  { icon: "🌄", label: "Trips", value: "Bathinda Falls · Sita Falls · Joy Junction · Airport · Restaurant Visits" },
  { icon: "😂", label: "Inside Jokes", value: "Unlimited" },
  { icon: "☕", label: "Tea Conversations", value: "Countless" },
  { icon: "🥒", label: "Pickles Received", value: "0 (Still waiting…)" },
  { icon: "❤️", label: "Friendship", value: "Still Growing…" },
];

export const acts = [
  {
    id: "act-1",
    number: "I",
    title: "The Beginning",
    quote: "Every unforgettable story begins with a single hello.",
    epilogue: "Every beginning creates a story. Every story creates memories. And ours had only just begun…",
    intermission: null,
    chapters: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    id: "act-2",
    number: "II",
    title: "Growing Together",
    quote: "Friendship isn't measured by how long you've known someone. It's measured by the memories you've created together.",
    epilogue: "The strangers we met during a campus tour had slowly become the people who made college feel like home. And without realizing it… The best chapters were still waiting to be written…",
    intermission: "The first semester ended. Everyone went home carrying different memories. Some returned with new stories. Some returned with homemade snacks. …Some still owe me pickles. 🥒😂 But when college began again, so did another beautiful chapter.",
    chapters: [8, 9, 10, 11, 12, 13, 14],
  },
  {
    id: "act-3",
    number: "III",
    title: "Every Story Continues",
    quote: "The best stories don't end. They simply become memories that we revisit with a smile.",
    epilogue: null,
    intermission: "Time moved faster than we realized. Assignments came. Exams came. Trips came. Festivals came. Birthdays came. Without noticing… We had already created a collection of memories that once seemed impossible.",
    chapters: [15, 16, 17],
  },
];

export const chapters = [
  {
    id: 1,
    title: "Where It All Began",
    date: "9 July 2024",
    location: "IIT (ISM) Campus Tour",
    act: 1,
    story: `The very first chapter of our friendship began on July 9 during the campus tour organized by our seniors. They introduced us to the academic buildings, laboratories, playgrounds, and all the places that would soon become our second home.

Among everyone that day was a girl wearing a yellow dress.

At that moment she was simply another face in a crowd of new students.

I never imagined that she would later become one of the closest friends of my college life.

Looking back now, this memory feels incredibly special because every friendship has a beginning.

This was ours.`,
    quote: "Every great story starts with one unexpected meeting.",
    photoCount: 0,
    photos: [], // To be filled with actual photos later
    placeholderLabel: "Campus Tour Photos",
  },
  {
    id: 2,
    title: "The Calls That Built Our Friendship",
    date: "4 August 2024",
    location: null,
    act: 1,
    story: `Friendship didn't grow in a single day.

It grew through countless video calls.

A small group slowly became our little gang.

Every evening turned into hours of conversations filled with laughter, academics, random discussions, personal stories, future dreams, and the funniest moments we could never have planned.

Those calls slowly built something much stronger than friendship.

They built trust. They built comfort. They built a bond where sharing thoughts became effortless.

Looking back, none of us realized that those random late-night conversations would become some of our favorite memories.`,
    quote: "Sometimes the strongest friendships are built one conversation at a time.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Video Call Screenshots",
  },
  {
    id: 3,
    title: "Partners in Every Experiment",
    date: "21 August 2024",
    location: "Manufacturing Process Lab",
    act: 1,
    story: `The Manufacturing Process Lab gave us more than practical knowledge.

It gave us another memory.

Being in the same lab group, we naturally became partners for the experiments.

The nut-and-bolt exercise became one of those simple moments that later turned into a cherished memory.

Everything around us felt new—the workshop, the machines, the uniforms, and college life itself.

We were simply learning together, laughing over little mistakes, and enjoying every moment without realizing how memorable it would become.

Sometimes the most ordinary college classes become the most extraordinary memories.`,
    quote: "The best partnerships aren't planned—they just happen.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Lab Photos",
  },
  {
    id: 4,
    title: "Our First College Festival",
    date: "4 October 2024",
    location: "Garba Celebration",
    act: 1,
    story: `Our first Garba celebration together was full of music, colorful traditional outfits, and endless excitement.

Holding hands as our gang danced together made the evening unforgettable.

Nobody cared about dancing perfectly.

We simply wanted to enjoy the moment.

After the celebrations ended, we clicked countless photographs that became our very first festival memories together.

Looking back now, those pictures hold much more than smiles.

They hold the excitement of experiencing our first college fest together.`,
    quote: "Some festivals end after one night. Their memories never do.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Garba Festival Photos",
  },
  {
    id: 5,
    title: "The First Adventure Beyond Campus",
    date: "21 October 2024",
    location: "Bathinda Falls & Sita Falls",
    act: 1,
    story: `As our friendship grew stronger, our gang finally decided to explore beyond campus.

Bathinda Falls and Sita Falls became the destination for one of our most memorable adventures.

The waterfalls, endless laughter, group photographs, and conversations made the day unforgettable.

Looking after everyone and seeing every smiling face made the trip even more meaningful.

It wasn't only about visiting a waterfall.

It was about creating memories that would stay with us long after the journey ended.`,
    quote: "The destination was beautiful. The company made it unforgettable.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Waterfall Trip Photos",
  },
  {
    id: 6,
    title: "Laughter Between the Lectures",
    date: "30 October 2024",
    location: "Classroom",
    act: 1,
    story: `Officially we were supposed to sit according to our roll numbers.

Unofficially…

I kept finding reasons to sit beside you.

Between lectures came countless jokes, small conversations, teasing each other, and Snapchat selfies with ridiculous filters.

Those pictures may never look perfect.

But they perfectly captured who we really were.

Just friends enjoying ordinary college days.

Sometimes happiness isn't found outside the classroom.

Sometimes it's sitting beside the right person inside it.`,
    quote: "Some of the happiest memories happen while pretending to listen in class.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Classroom Selfies",
  },
  {
    id: 7,
    title: "End of the First Chapter",
    date: "30 November 2024",
    location: "Ruby Park",
    act: 1,
    story: `The first semester had finally come to an end.

Before everyone left for home during the winter holidays, we gathered at Ruby Park.

There were group photos. Selfies. Random conversations. Laughter.

And those quiet moments where nobody realized this chapter of college life had already become unforgettable.

Looking back now, those photographs represent much more than the end of a semester.

They represent the beginning of friendships that would continue growing with every passing day.`,
    quote: "The first semester ended… our story was only beginning.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Ruby Park Farewell Photos",
  },
  {
    id: 8,
    title: "A Day Full of Laughter",
    date: "24 February 2025",
    location: "Joy Junction",
    act: 2,
    story: `Sometimes the best plans are the ones that aren't planned at all.

One random day, our gang decided to visit Joy Junction. There was no celebration, no special occasion—just a simple decision to spend time together.

From bowling and shooting games to jumping, cheering each other on, and laughing at every silly moment, the day was filled with pure fun. We competed, joked around, and enjoyed every minute without worrying about anything else.

Looking back, this wasn't memorable because of the games. It was memorable because of the people who made every game feel special.`,
    quote: "The happiest days are often the ones that never appeared on the calendar.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Joy Junction Adventure Photos",
  },
  {
    id: 9,
    title: "A Splash of Colors",
    date: "13 March 2025",
    location: "Holi Celebration",
    act: 2,
    story: `Holi arrived with colors, laughter, and one more unforgettable memory.

Since I was leaving for my Ayodhya and Varanasi trip the next day, the four of us decided to celebrate a little earlier.

Within minutes, nobody could recognize anyone anymore.

Faces were covered in colors. Everyone looked completely different.

And somehow… Everyone looked happier than ever.

Between all the laughter and playful color fights, we paused to click a few photos that would forever remind us of one colorful afternoon before another journey began.`,
    quote: "Colors disappear after a wash… memories never do.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Holi Celebration Photos",
  },
  {
    id: 10,
    title: "The Birthday I'll Never Forget",
    date: "2 April 2025",
    location: "Campus",
    act: 2,
    story: `College gave me many gifts.

But one of the best gifts was celebrating my birthday with friends who had become family.

That evening, Yeshu, Hansika, and Varshitha surprised me with a birthday cake.

Then came the cake on my face…

The birthday bumps…

The laughter…

The photos…

Everything happened exactly the way a college birthday should.

When I look back now, I don't remember how the cake tasted.

I remember who stood beside me.`,
    quote: "People forget birthdays. They never forget who celebrated them with them.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Birthday Celebration Photos",
  },
  {
    id: 11,
    title: "A Sky Full of Lights",
    date: "Diwali",
    location: "IIT (ISM) Campus",
    act: 2,
    story: `The campus looked magical.

Lights decorated every corner.

Fireworks filled the night sky.

We celebrated together by lighting crackers and releasing glowing sky lanterns.

Watching those lanterns slowly disappear into the night sky felt peaceful.

Between the fireworks and celebrations, we clicked photos that captured one of the brightest nights of college life.

Looking back now…

The brightest light wasn't in the sky.

It was in the smiles around us.`,
    quote: "Some lights last a moment. Some memories last forever.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Diwali Night Photos",
  },
  {
    id: 12,
    title: "A First Visit to the Airport",
    date: "29 January 2026",
    location: "Durgapur Airport",
    act: 2,
    story: `Sometimes ordinary days quietly become unforgettable.

We had gone to Durgapur Airport to see Aishwarya off before she traveled home.

For another reason, the day became even more special.

It was Yeshu's first visit to an airport.

Everything felt new. Every corner became a photo. Every smile became a memory.

She wanted photographs to show her parents when she reached home.

So naturally… I became the photographer.

Looking back, I don't just see an airport.

I see the excitement of experiencing something for the very first time.`,
    quote: "Life is made beautiful by collecting little 'firsts.'",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Airport First Visit Photos",
  },
  {
    id: 13,
    title: "The Treat That Needed No Reason",
    date: "28 January 2026",
    location: "Restaurant",
    act: 2,
    story: `Some meals are expensive.

Some meals are unforgettable.

This one was unforgettable.

Without any special occasion, Yeshu and Aishwarya decided to treat me at a restaurant.

Since the food was free…

I proudly accepted the responsibility of eating as much as possible. 😄

Between delicious food, endless conversations, and plenty of laughter, we forgot about assignments, deadlines, and college stress.

After finishing, we clicked random selfies to remember a day that never needed a reason.

Because the best memories rarely do.`,
    quote: "Friendship is sharing food… even if one friend clearly eats more than everyone else.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Restaurant Outing Photos",
  },
  {
    id: 14,
    title: "A Night Painted with Memories",
    date: "8 February 2026",
    location: "Srijan — Campus Cultural Festival",
    act: 2,
    story: `Srijan.

The biggest cultural festival of the year.

The campus looked magical. Music echoed from every direction. Lights filled every pathway.

That evening, Yeshu wore one of her favorite dresses.

At first she felt a little shy about coming outside.

Thankfully… She changed her mind.

Because what followed became one of our favorite memories.

Hansika. Varshitha. Yeshu. Me.

A tiny gang walking around campus.

And somehow… I became everyone's photographer.

One funny discovery that night? Despite carrying my iPhone… Somehow Yeshu's Android photos looked even better. 😄

By the time the night ended… We had captured well over a thousand photographs.

Not because every picture was perfect.

But because every picture told part of our story.`,
    quote: "Some nights become memories before they even end.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Srijan Festival Night Photos",
  },
  {
    id: 15,
    title: "Until We Meet Again",
    date: "3 March 2026",
    location: "Campus Farewell",
    act: 3,
    story: `Our mid-semester examinations had finally ended.

Everyone was preparing to leave campus for a short break.

Hansika. Varshitha. Yeshu.

All of them were going home.

I had decided to travel to Kolkata instead.

Before they left, I helped carry their luggage and walked with them, making sure everything was ready for their journey.

There were the usual reminders…

"Travel safely." "Message after reaching."

And one very important request… "Don't forget to bring homemade pickles!"

They smiled… They promised…

And somehow… The pickles never arrived. 🤧🥒

Even today, it's one of those funny little memories that still makes me smile.`,
    quote: "Some promises become memories… and some pickles never make it back to campus.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Mid-Sem Break Farewell Photos",
  },
  {
    id: 16,
    title: "A Beautiful Beginning",
    date: "19 March 2026",
    location: "Campus Temple & Bombay Sweets",
    act: 3,
    story: `Ugadi.

The Telugu New Year.

A day that symbolizes fresh beginnings.

We decided to begin the festival in the most peaceful way possible.

Early in the morning, we visited the campus temple together.

The calm atmosphere, the ringing temple bells, and the quiet moments of prayer made the morning feel incredibly peaceful.

Before leaving, we captured a few selfies outside the temple so we would always remember how the day had begun.

Then came the sweetest part.

We visited Bombay Sweets.

Gulab Jamun. Rasgulla. Rasmalai.

A delicious breakfast. And finally… A cup of tea.

Simple moments. Simple conversations.

Yet somehow… One of the most beautiful mornings of our friendship.`,
    quote: "The sweetest beginnings are shared with the right people.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Ugadi Morning Photos",
  },
  {
    id: 17,
    title: "Another Year, More Beautiful Memories",
    date: "2 April 2026",
    location: "Campus Celebration",
    act: 3,
    story: `Another birthday.

Another beautiful chapter.

This time, not only my closest friends but also my juniors joined the celebration.

The evening was filled with laughter, cake, photos, and unforgettable moments.

But my favorite memories weren't the perfect photographs.

They were the funny ones.

The ridiculous selfies. The meme-worthy faces. The completely random expressions that only made sense to us.

Those pictures perfectly captured the fun side of our friendship.

Before the day ended, our entire gang created a birthday reel together.

One more memory. One more chapter. One more reason to smile.

Looking back, birthdays aren't about growing older.

They're about realizing how lucky you are to have wonderful people standing beside you.`,
    quote: "The best birthdays aren't measured by candles… they're measured by the people who celebrate with you.",
    photoCount: 0,
    photos: [],
    placeholderLabel: "Birthday Reel & Party Photos",
  },
];

export const epilogue = {
  title: "One More Chapter…",
  text: `The photos end here.

But the story doesn't.

Every picture in this journey holds a laugh, a conversation, a celebration, or a simple moment that became unforgettable.

Looking back at these memories, I realize something.

The most valuable gift college gave me wasn't a classroom, a degree, or a campus.

It was the people I met along the way.

And among those people…

You became one of the most important parts of my journey.`,
};

export const birthdayLetter = {
  chapter: "Chapter 18",
  to: "Dear Yeshu…",
  from: "— Ramu",
  body: `If someone had told me on 9 July 2024 that the girl in the yellow dress during the campus tour would become one of my closest friends, I probably wouldn't have believed them.

But life has a funny way of introducing us to the people who end up changing our days in the simplest ways.

Thank you for every random conversation.
Thank you for every laugh.
Thank you for every festival.
Thank you for every selfie.
Thank you for every trip.
Thank you for every cup of tea.
Thank you for every memory hidden inside these photographs.

Some of our funniest moments happened completely by accident.
Some of our best memories came from random plans.
Some days had no special occasion at all.

Yet they became unforgettable simply because we experienced them together.

When I look through these pictures now, I don't just see photographs.

I see moments that made college life happier.
I see a friendship that slowly grew stronger with time.
Most importantly…
I see someone I'm truly grateful to have met.

As you celebrate another birthday, I hope the coming year brings you happiness, good health, success, and countless new adventures.

May every dream you work towards come true.
May your smile always stay the same.
And may we continue creating many more chapters that one day deserve another website like this.

Happy Birthday, Yeshu. 🎂💜

Thank you…
For being part of my story.`,
};

export const birthdaySurprise = {
  title: "Happy Birthday, Yeshu!",
  wishes: [
    "Wishing you a year filled with happiness, success, laughter, and beautiful memories.",
    "May every goal become an achievement.",
    "May every challenge become a lesson.",
    "May every dream become reality.",
  ],
  closing: "And may this story… never stop growing.",
};

export const endCredits = {
  cast: ["Yeshu", "Ramu", "Hansika", "Varshitha", "Aishwarya"],
  specialThanks: "To every memory that made this journey worth remembering.",
  stats: [
    { emoji: "📸", label: "92 Photographs" },
    { emoji: "🎬", label: "17 Chapters" },
    { emoji: "☕", label: "Infinite Conversations" },
    { emoji: "😂", label: "Unlimited Laughter" },
    { emoji: "❤️", label: "One Beautiful Friendship" },
  ],
  finalScene: {
    loadingSteps: ["18%", "42%", "67%", "89%", "100%"],
    closing: "To Be Continued…",
    epilogue: "Because the best friendships are still being written.",
  },
};
