let numRegister = [];
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const getNumId = () => {
  const randomId = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };
  const checkId = (numRegister) => {
    let match;
    let attempts = 0;
    do {
      numId = randomId();
      match = numRegister.find(item => {
        return item === numId;
      });
      attempts++;
    } while (match && attempts <= 100);
    if (match && attempts >= 100) {
      return "No available number found";
    } else {
      numRegister.push(numId);
      return numId;
    }
  };
  return checkId(numRegister);
};



pAequorFactory = () => {
  return {
    specimenNum: getNumId(),
    dna: mockUpStrand(),
    mutate() {
      let numBases = (this.dna.length) - 1;
      let basetoMutate = Math.floor(Math.random() * (numBases - 0 + 1) + 0);
      const dnaBases = ['A', 'T', 'C', 'G'];
      let indextoquit = dnaBases.findIndex((basetoFind) => basetoFind === this.dna[basetoMutate]);
      dnaBases.splice(indextoquit, 1);
      basetoChange = Math.floor(Math.random() * (((dnaBases.length) - 1) - 0 + 1) + 0);
      this.dna.splice(basetoMutate, 1, dnaBases[basetoChange]);
      return this.dna;
    },
    compareDNA(pAequor) {
      let basesMatches = 0;
      for (let i = 0; i <= this.dna.length; i++) {
        if (this.dna.length[i] === pAequor.dna[i]) {
          basesMatches++;
        }
      }
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${Math.round(basesMatches / 15 * 100)}% DNA in common`);
    },
    willLikelySurvive() {
      let amountCorG = 0;
      this.dna.forEach((base) => {
        if (base === 'C' || base === 'G') {
          amountCorG++;
        }
      });
      if (amountCorG / this.dna.length >= 0.6) {
        return true;
      } else {
        return false;
      }
    }
  };
};



const pAequorGenerator = (numReplication) => {
  let pAequorForStudy = [];
  for (let i = 1; i <= numReplication; i++) {
    pAequorForStudy.push(pAequorFactory());
  }
  return pAequorForStudy;
};

console.log(

  pAequorGenerator(3)

);




