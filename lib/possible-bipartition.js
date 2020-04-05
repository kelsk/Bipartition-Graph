const possibleBipartition = (dislikes) => {
  if (dislikes.length === 0) return true;

  const groupA = [0];
  const groupB = [0];

  const checkNode = (index, goodGroup, badGroup) => {
    // if we're trying to add a node into a group that's already marked this dog as "bad", return false
    if (goodGroup[index] === 'bad dog') return false

    goodGroup[index] = true;
    badGroup[index] = 'bad dog';

    dislikes[index].forEach(i => {
      // set each connected node to 'bad dog'
      if (goodGroup[i] === true) return false
      goodGroup[i] = 'bad dog'
    })
    console.log(groupA);
    console.log(groupB);
    console.log(index);

    if (dislikes[index + 1]) {
      if (goodGroup[index + 1] === 'bad dog') {
        return checkNode(index + 1, badGroup, goodGroup);
      } else {
        return checkNode(index + 1, goodGroup, badGroup);
      }
    }

    // if it doesn't return false
    return true
  }

  return checkNode(1, groupA, groupB)

}


let dislikesA = [ []
];
console.log(possibleBipartition(dislikesA));
