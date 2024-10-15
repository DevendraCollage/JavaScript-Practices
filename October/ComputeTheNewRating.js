// Write a JavaScript program to compute the updated ratings between two or more opponents using the Elo rating system. It takes an array of pre-ratings and returns an array containing post-ratings. The array should be ordered from top to bottom (winner -> loser).

// Note: Use the exponent ** operator and math operators to compute the expected score (chance of winning). of each opponent and compute the new rating for each. Loop through the ratings, using each permutation to compute the post-Elo rating for each player in a pairwise fashion. Omit the second argument to use the default kFactor of 32.

const elo = ([...ratings], kFactor = 32, selfRating) => {
  const [a, b] = ratings;
  const expectedScore = (self, opponent) =>
    1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) =>
    (selfRating || rating) +
    kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  if (ratings.length === 2) {
    return [newRating(a, 1), newRating(b, 0)];
  }

  for (let i = 0, len = ratings.length; i < len; i++) {
    let j = i;
    while (j < len - 1) {
      j++;
      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
    }
  }

  return ratings;
};

console.log(elo([1200, 1200]));
