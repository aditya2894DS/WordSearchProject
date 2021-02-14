// Not a good way to store, keys especially if you are pushing code to GitHub
// Use environment variables instead or create a json file
module.exports = {
  backendURL: "http://localhost:4000",
  frontendURL: "http://localhost:3012",
  memberDashboardURL: "/memberdashboard",
  viewWordsByLetterURL: '/memberdashboard/viewwordsbyletter',
  signupURL: '/api/account/signup',
  signinURL:'/api/account/signin',
  signoutURL: '/api/account/signout',
  getCurrentUserURL: '/api/account/getcurrentuser',
  viewworddatabaseURL: '/api/word/allwords',
  viewwordbyletterURL: '/api/word/viewwordsbyletter',
  enternewwordURL: '/api/word/new',
  newWordFormInputs: [
    'NewWord',
    'OriginLang',
    'RootWord',
    'Category', 
    'SubCategory',
    'Connotation' ],
  alphabetsArray: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ] ,
  originLanguages: [
    'Anglo-Saxon', 'Australian Aboriginal', 'African', 'Afrikaans', 'Arabic', 'Brittonic', 
    'Chinese', 'Czech', 'Dravidian', 'Dutch', 'Etruscan', 'Finnish', 'French', 'Gaulish',
    'Hawaiian', 'Hebrew', 'Hindi or Urdu', 'Hungarian', 'Indian', 'Indonesian', 'Irish',
    'Italian', 'Japanese', 'Korean', 'Malay', 'Māori', 'Persian', 'Philippine', 'Polish',
    'Polynesian', 'Portuguese', 'Romani', 'Romanian', 'Russian', 'Sami', 'Sanskrit',
    'Scandinavian', 'Scots', 'Scottish Gaelic', 'Serbo-Croatian', 'Spanish', 'Swedish',
    'Turkic', 'Ukrainian', 'Welsh', 'Yiddish', 'Zulu' ],
  partsOfSpeech: [
    'Noun', 'Pronoun', 'Verb', 'Adjective', 'Adverb', 'Preposition', 'Conjunction', 'Interjection' ],
  connotation: [ 'Positive', 'Negative', 'Neutral' ],
  subTypes: {
    "Nouns": ['Common', 'Proper', 'Abstract', 'Collective', 'Compound'],
    "Adjective": ['Descriptive', 'Demonstrative', 'Possessive', 'Indefinite'],
    "Adverb": ['Conjuctive', 'Time/Frequency', 'Place/Direction', 'Degree', 'Manner'],
    "Verb": ['Action', 'Phrasal', 'Stative']
  },
  emptyFieldError: 'Fill all the fields!',
  passwordsDonotMatchError: 'Passwords donot match!',
  landingpageInfoText: 'The vocabulary journal is a kind of personal dictionary; learners record the words they encounter, along with their meanings and any other important aspects. Based on the previous studies, it has been frequently suggested that vocabulary journals are recommended as effective tools for students to use to take charge of, organize and manage their vocabulary learning.'
}