  //write your code here
  let pronouns = ['the', 'our']
  let adjetives = ['great', 'big']
  let nouns = ['jogger', 'racoon']
  
  for(let i = 0; i < pronouns.length; i++){
    for(let j = 0; j < adjetives.length; j++){
      for(let k = 0; k < nouns.length; k++){

        let sentence = `${pronouns[i]}${adjetives[j]}${nouns[k]}.com`;
        console.log(sentence)
      }
    } 
  }
 

