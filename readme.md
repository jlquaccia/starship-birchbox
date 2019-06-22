# Config Template

- The configuration data for any given quiz is split into two parts:
  - site-data.js
  - theme.js
  - index.js
    - DO NOT TOUCH THIS FILE WITHOUT KNOWING WHAT YOU ARE DOING

## Generic Configuration Details

### site-data.js

- Responsible for the data driving the quiz and minimal style changes
- can change the props on the material ui componen
  - ButtonProps and TypographyProps
  - The properties defined in the API documentation are avaliable here along with 'text' which is the display text of the component
    - [Typography](https://material-ui.com/api/typography/)
    - [Button](https://material-ui.com/api/button/)
  - Using this extended notation is not required and the standard string text can be used instead if the theme is suitably configured in theme.js
- Questions can have as many answers as you want, only limited by:
  - the ammount of space avaliable in the UI
- Questions can have any key they want
  - useful for categorical/preference quizes
- Questions can have a disparate numer of answers among themselves

```java
export default {
  name: string,
  meta: {
    title: string,
    desc: string,
    base: string,
    ...other
  },

  copyright: string | TypographyProps,

  appHeader: {
    title: string | TypographyProps
  },

  startCard: {
    title: string | TypographyProps
    subText: string | TypographyProps,
    image: string,
    startButton: string | ButtonProps
  },

  scoreMode: 'threshold' | 'categorical',

  questions: [
    {
      question: string,
      image: string,
      answers: {
        [string]: string | [string, number],
      },
      correct?: string, // reference to self.answers.keys
      response?: string | {| positive: string, negative: string |}
    }
  ],

  // Can have 1 end card or N corresponding to the quiz type
  // n being a range or the category names.
  endCard: {
    title: string | TypogrpahyProps,
    subText: string | TypogrpahyProps,
    image: string,
    finishButton: string | ButtonProps,
    endText: string | TypographyProps
  } | {
    [range: string | category: string]: {
      title: string | TypogrpahyProps,
      subText: string | TypogrpahyProps,
      image: string,
      finishButton: string | ButtonProps,
      endText: string | TypographyProps
    }
  }
};

```

### theme.js

- responsible for the theme and more comprehensive style changes
- can change the style of the material ui components themselves
  - i.e., we can change all buttons to have rounded borders and change the site theme colors.
- In the material ui documentation this is the overrides and each ui component and offers a list of overridable style classes that are defined in the components CSS API docs.

The theme is an extremely powerful material ui component that allows you to alter every visual aspect provided by material-ui.

Core Theme Variables
https://material-ui.com/customization/themes/#theme-configuration-variables
Component Overrides
https://material-ui.com/customization/components/#5-global-theme-variation

This theme file can be as large or as small as necessary and should be able to handle all desired configurations.

```java
const theme = createMuiTheme({
  palette: {
    // https://material-ui.com/customization/palette/#palette
    type: 'light',
    primary: {
      main: '#0fb658'
    },
    secondary: {
      main: '#d500f9'
    },
    background: {
      default: '#b96480'
    }
  },
  overrides: {
    // https://material-ui.com/api/button/#css
    MuiButton: {
      label: {
        // justifyContent: 'left',
        // textTransform: 'none'
      },
      root: {
        // borderRadius: 10
      }
    },
    // https://material-ui.com/api/button/#css
    MuiPaper: {
      root: {
        // borderRadius: 24
        // backgroundColor: 'orange'
      }
    }
  }
});
```

## Score Mode

There are two type of score modes, threshold and categorical.

Threshold Mode (examples/threshold-quiz)

> As the user answers questions the weights get added together in order to determine which end card to show. The end cards in this instance are keyed with the notation 'a-b' which is the range of the score associated with showing that card. If the users' final score is within that range then that is the end card that will be shown.

Categorical Mode ((examples/preference-quiz))

> As the user answers questions each question adds a weight to it's given category (defined by the answer's key). At the end of the quiz the category with the most points
> is used to determine which card is shown

## Score Mode: Threshold

- This score mode is typically used to create graded quizes.
- It requires that the questions have the folowing configuration,
  where each answer is assigned a certain weight

```java
{
  question: string,
  image: string,
  answers: {
    // The tuple here is the possible answer text and the score associated with choosing that answer.
    // e.g., a: ['This is a answer worth 10 points', 10],
    a: [string, number],
    // ...
  },
  correct: string, // reference to key in answers object
  response: string | {|positive: string, negative: string|}
}
```

- It also requires that the end card has the following configuration

```java
{
  endCard: {
    'a-b': {
      // Overload: Typography
      title: string | TypographyProps,
      // Overload: Typography
      subText: string | TypographyProps,
      image: string,
      // Overload: Button
      finishButton: string | ButtonProps,
      // Overload: Typography
      endText: string | TypographyProps
    }
  }
}
```

## Score Mode: Categorical

- This score mode is typically used to create preference quizes.
- It requires that the questions have the folowing configuration,
  where each answer is assigned a certain category

```java
{
  question: 'What would you rather eat?',
  image: 'food.jpeg',
  answers: {
    [category: string]: string
    // e.g., panda: 'bamboo',
    // ...
  }
}
```

- It also requires that the end card has the following configuration

```java
{
  endCard: {
    [category: string]: {
      // Overload: Typography
      title: string | TypographyProps,
      // Overload: Typography
      subText: string | TypographyProps,
      image: string,
      // Overload: Button
      finishButton: string | ButtonProps,
      // Overload: Typography
      endText: string | TypographyProps
    },
    // ... more categories
  }
}
```
