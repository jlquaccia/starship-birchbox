export default {
  name: 'Zebra Knowledge Quiz',
  templateType: 'list-quiz',

  trackerConfig: {
    todo: 'todo'
  },

  meta: {
    title: 'Zebra Knowledge Quiz',
    description: 'This is a quiz about pandas'
  },

  copyright: '© pandas-are-awesome.com 2099',

  appHeader: {
    // Typography
    title: {
      text: 'Zebra!',
      style: {
        marginLeft: '5rem'
      }
    }
  },

  startCard: {
    // Typography
    title: 'Test your panda knowledge and get 14% off!',
    // Typography
    subText: 'How panda are you?!',
    image: 'landing_image.jpg',
    // Button
    startButton: {
      text: 'Start Now!',
      variant: 'contained',
      color: 'primary'
    }
  },

  scoreMode: 'threshold',

  questions: [
    {
      question: 'How many pandas are there in the world?',
      image: 'panda_1.jpg',
      answers: {
        a: ['None', 1],
        b: ['22', 2],
        c: ['alot', 5],
        d: ['42', 4]
      },
      correct: 'c',
      response: {
        positive:
          "How'd you know?! There are alot of pandas out there. It is a rare success story for environmental protection and wildlife conservation in China: The nation's once-a-decade survey has found China's wild panda population has risen by 268 animals, or 17 percent, to an estimated 1,864 in the mountainous forests of the west.",
        negative:
          "Not quiet! There are alot of pandas out there. It is a rare success story for environmental protection and wildlife conservation in China: The nation's once-a-decade survey has found China's wild panda population has risen by 268 animals, or 17 percent, to an estimated 1,864 in the mountainous forests of the west."
      }
    },
    {
      question: 'What is the average airspeed of a european swallow carrying a coconut?',
      image: 'swallow.jpg',
      answers: {
        a: ['22Knots', 1],
        b: ['How did the coconut get there?', 10],
        c: ['who cares', 5],
        d: ['0', 0]
      },
      correct: 'b',
      response:
        'In order to calculate the airspeed you have to take the difference between ground speed and the wind speed. Ground speed is the speed in which an object moves relative to some reference point on the ground. Wind speed is the speed in which the air moves relative to some reference point on the ground. The airspeed velocity of a (European) unladen swallow is about 24 miles per hour or 11 meters per second. '
    },
    {
      question: 'what is the answer to life the universe and everything',
      image: 'the-answer.png',
      answers: {
        a: ['42', 10],
        b: ['love', 5],
        c: ['nihilism', 2],
        d: ['pandas', 30]
      },
      correct: 'a',
      response:
        'In order to calculate the airspeed you have to take the difference between ground speed and the wind speed. Ground speed is the speed in which an object moves relative to some reference point on the ground. Wind speed is the speed in which the air moves relative to some reference point on the ground. The airspeed velocity of a (European) unladen swallow is about 24 miles per hour or 11 meters per second. '
    },
    {
      question: 'How many Eliots are there?',
      image: 'the-answer.png',
      answers: {
        a: ['42', 10],
        b: ['Infinite', 5],
        c: ['1', 2],
        d: ['Jason', 30]
      },
      correct: 'a',
      response:
        'In order to calculate the airspeed you have to take the difference between ground speed and the wind speed. Ground speed is the speed in which an object moves relative to some reference point on the ground. Wind speed is the speed in which the air moves relative to some reference point on the ground. The airspeed velocity of a (European) unladen swallow is about 24 miles per hour or 11 meters per second. '
    }
  ],

  endCard: {
    '0-30': {
      // Typography
      title: 'End 0-50',
      // Typography
      subText: 'This is the end of the quiz, you are awesome',
      image: 'sad-panda.jpg',
      // Button
      finishButton: 'Get your deal!',
      // Typography
      endText: {
        text:
          "Most Awards, you know, they don't give you unless you go and get them - did you know that? Needless to say- You didn\t get this one",
        variant: 'body1'
      }
    },
    '31-100': {
      title: 'End 51-100',
      subText: 'This is the end of the quiz, you are awesome',
      image: 'highfive.jpg',
      finishButton: 'Get your deal!',
      endText: {
        text:
          'In case you have not been adequately informed, please consider this official notification that you are awesome.  You are a unique snowflake.',
        variant: 'body1'
      }
    }
  }
};
