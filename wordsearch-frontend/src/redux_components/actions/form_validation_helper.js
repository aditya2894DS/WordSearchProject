export const checkEmptyFields = (object) => {
  let entries = Object.entries(object);

  const countEmptyFields = () => {
    let i = 0;
    for(let entry of entries){
      if(entry[1] === '' || entry[1] === undefined){
        i++;
      }}
    return i }
   
    let fieldEmpty = countEmptyFields()
    if(fieldEmpty !== 0){
      return false
    } else return true
}

export const matchPassword = (string1, string2) => {
  if(string1 === string2){
    return true
  } else return false  
}

export const capitalizeFirstLetter = (word) => {
  const lowerCased = word.toLowerCase()
  return word.charAt(0).toUpperCase() + lowerCased.slice(1)	}