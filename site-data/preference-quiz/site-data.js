export default {
  name: 'Panda Knowledge Quiz',
  templateType: 'list-quiz',

  trackerConfig: {
    todo: 'todo'
  },

  meta: {
    title: 'Panda Knowledge Quiz',
    desc: 'This is a quiz about pandas'
    // base: 'donkey/panda'
  },

  copyright: '© pandas-are-awesome.com 2099',

  appHeader: {
    title: {
      text: 'Panda',
      style: {
        marginLeft: '5rem'
      }
    }
  },

  startCard: {
    title: 'Test your panda skills',
    subText: 'How panda are you?!',
    image: 'animals.jpg',
    startButton: {
      text: 'Start Now!',
      variant: 'contained',
      color: 'primary'
    }
  },

  scoreMode: 'categorical',

  questions: [
    {
      question: 'What would you rather eat?',
      image: 'food.jpeg',
      answers: {
        panda: 'bamboo',
        goat: 'grass',
        tiger: 'meat',
        plant: 'sunlight'
      }
    },
    {
      question: 'What would you do everyday?',
      image: 'recreation.png',
      answers: {
        panda: 'bamboo',
        goat: 'do goat thing',
        tiger: 'kill things',
        plant: 'just chill'
      }
    }
  ],

  endCard: {
    panda: {
      title: 'Panda',
      subText: 'This is the end of the quiz, you are awesome',
      image: 'highfive.jpg',
      finishButton: 'Get your deal!',
      endText: {
        text:
          'The giant panda (Ailuropoda melanoleuca; Chinese: 大熊猫; pinyin: dà xióng māo),[4] also known as panda bear or simply panda, is a bear[5] native to south central China.[1] It is easily recognized by the large, distinctive black patches around its eyes, over the ears, and across its round body',
        variant: 'body1'
      }
    },
    goat: {
      title: 'Goat',
      subText: 'This is the end of the quiz, you are awesome',
      image: 'goat.jpeg',
      finishButton: 'Get your deal!',
      endText: {
        text:
          'The domestic goat or simply goat is a subspecies of C. aegagrus domesticated from the wild goat of Southwest Asia and Eastern Europe. The goat is a member of the animal family Bovidae and the goat—antelope subfamily Caprinae, meaning it is closely related to the sheep. There are over 300 distinct breeds of goat',
        variant: 'body1'
      }
    },
    tiger: {
      title: 'Tiger',
      subText: 'Taut like a tiger',
      image: 'tiger.jpeg',
      finishButton: 'Get your deal!',
      endText: {
        text:
          'The tiger is the largest species among the Felidae and classified in the genus Panthera. It is most recognizable for its dark vertical stripes on reddish-orange fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and bovids',
        variant: 'body1'
      }
    },
    plant: {
      title: 'Plant',
      subText: 'This is the end of the quiz, you are awesome',
      image: 'tree.jpeg',
      finishButton: 'Get your deal!',
      endText: {
        text:
          'In botany, a tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves in most species. In some usages, the definition of a tree may be narrower, including only woody plants with secondary growth, plants that are usable as lumber or plants above a specified height',
        variant: 'body1'
      }
    }
  }
};
