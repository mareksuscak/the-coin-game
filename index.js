/**
 * Alice and Bob are playing a game. They start with the pile of N < 10000 coins.
 * Alice and Bob take turns, in each turn the player takes some positive number of coins away from the pile.
 * Player can take only square number of coins, i.e. 1, 4, 9, 16, 25, etc.
 * For example, Alice starting his turn with 100 coins can reduce the pile to the size of 99, 96, 91, 84, ... , 0 coins,
 * but not to 97, 98 or 1 coin. The player, who cannot make a next turn (because the pile is empty) loses the game.
 *
 * The first turn is taken by Alice.
 *
 * Who will win if both players play as good as possible?
 */

// We know we can win for N=1 and we can't win for N=0 (base cases)
const memoizedCanWin = { 0: false, 1: true }

// Time Complexity:  Θ(√N) up to Θ(N)
// Space Complexity: Θ(N)
function canWin(remainingCoins) {
  if (typeof memoizedCanWin[remainingCoins] !== 'undefined') {
    return memoizedCanWin[remainingCoins];
  }

  // We'll find the largest candidate turn's square root
  const largestCandidateTurnSqrt = Math.floor(Math.sqrt(remainingCoins));
  let result = false;

  // Looking for a winning turn
  for (let candidateTurnSqrt=largestCandidateTurnSqrt; candidateTurnSqrt>=1; candidateTurnSqrt--) {
    // I can only win when my rival can't in the next turn following my current turn.
    result = result || !canWin(remainingCoins - Math.pow(candidateTurnSqrt, 2));

    // Once we found a winning turn, no need to continue.
    if (result) {
      break;
    }
  }

  // Memoize results for they're reusable
  return memoizedCanWin[remainingCoins] = result;
}

// Use: canWin(N)

module.exports = canWin;
