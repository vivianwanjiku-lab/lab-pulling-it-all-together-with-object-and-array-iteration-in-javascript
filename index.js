function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

// Keep your existing gameObject function here

// 3.1 Retrieve Player Information

// Helper function to find player stats across both teams
function findPlayerStats(playerName) {
    const game = gameObject();
    
    // Check home team
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }
    // Check away team
    if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
    
    return null;
}

// Returns the number of points scored by the player
function numPointsScored(playerName) {
    const stats = findPlayerStats(playerName);
    return stats ? stats.points : null;
}

// Returns the shoe size of the player
function shoeSize(playerName) {
    const stats = findPlayerStats(playerName);
    return stats ? stats.shoe : null;
}

// 3.2 Retrieve Team Information

// Returns team colors for a given team name
function teamColors(teamName) {
    const game = gameObject();
    
    if (game.home.teamName === teamName) {
        return game.home.colors;
    }
    if (game.away.teamName === teamName) {
        return game.away.colors;
    }
    
    return null;
}

// Returns an array of team names
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// Returns player numbers for all players on a team
function playerNumbers(teamName) {
    const game = gameObject();
    let team;
    
    if (game.home.teamName === teamName) {
        team = game.home;
    } else if (game.away.teamName === teamName) {
        team = game.away;
    } else {
        return [];
    }
    
    const numbers = [];
    for (let player in team.players) {
        numbers.push(team.players[player].number);
    }
    return numbers;
}

// 3.3 Retrieve Player Stats

// Returns total rebounds for a player
function rebounds(playerName) {
    const stats = findPlayerStats(playerName);
    return stats ? stats.rebounds : null;
}

// Returns total assists for a player
function assists(playerName) {
    const stats = findPlayerStats(playerName);
    return stats ? stats.assists : null;
}

// Returns total steals for a player
function steals(playerName) {
    const stats = findPlayerStats(playerName);
    return stats ? stats.steals : null;
}

// 3.4 Advanced Challenge

// Returns player with the most points
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = -1;
    let topPlayer = "";
    
    // Check home team
    for (let playerName in game.home.players) {
        if (game.home.players[playerName].points > maxPoints) {
            maxPoints = game.home.players[playerName].points;
            topPlayer = playerName;
        }
    }
    
    // Check away team
    for (let playerName in game.away.players) {
        if (game.away.players[playerName].points > maxPoints) {
            maxPoints = game.away.players[playerName].points;
            topPlayer = playerName;
        }
    }
    
    return topPlayer;
}

// Bonus Questions

// Identifies which team has the most total points
function winningTeam() {
    const game = gameObject();
    let homeTotal = 0;
    let awayTotal = 0;
    
    // Calculate home team total points
    for (let playerName in game.home.players) {
        homeTotal += game.home.players[playerName].points;
    }
    
    // Calculate away team total points
    for (let playerName in game.away.players) {
        awayTotal += game.away.players[playerName].points;
    }
    
    return homeTotal > awayTotal ? game.home.teamName : game.away.teamName;
}

// Finds the player with the longest name
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    
    // Check home team players
    for (let playerName in game.home.players) {
        if (playerName.length > longestName.length) {
            longestName = playerName;
        }
    }
    
    // Check away team players
    for (let playerName in game.away.players) {
        if (playerName.length > longestName.length) {
            longestName = playerName;
        }
    }
    
    return longestName;
}

// Super Bonus Challenge

// Returns true if the player with the longest name has the most steals
function doesLongNameStealATon() {
    const longestName = playerWithLongestName();
    const longestNameSteals = steals(longestName);
    
    const game = gameObject();
    let maxSteals = -1;
    
    // Find the maximum steals among all players
    for (let playerName in game.home.players) {
        if (game.home.players[playerName].steals > maxSteals) {
            maxSteals = game.home.players[playerName].steals;
        }
    }
    
    for (let playerName in game.away.players) {
        if (game.away.players[playerName].steals > maxSteals) {
            maxSteals = game.away.players[playerName].steals;
        }
    }
    
    return longestNameSteals === maxSteals;
}

// Make functions available globally for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        gameObject,
        numPointsScored,
        shoeSize,
        teamColors,
        teamNames,
        playerNumbers,
        rebounds,
        assists,
        steals,
        mostPointsScored,
        winningTeam,
        playerWithLongestName,
        doesLongNameStealATon
    };
}
