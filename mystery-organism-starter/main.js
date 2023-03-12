let numRegister = [123456, 123457];
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



pAequorFactory = () => {
  return {
    specimenNum: getNumId(),
    dna: mockUpStrand()
  }
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






