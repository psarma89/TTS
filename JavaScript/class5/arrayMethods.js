var players = [
    {firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
    {firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
    {firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
    {firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
    {firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
    {firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
    {firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

console.log(players.find(function(player){return player.firstName==="Mike"}));
console.log(players.filter(function(player){return player.position==="RB"}));
console.log(players.map(function(player){return player.lastName}));
console.log(players.filter(function(player){return player.position==="RB" && player.touchdowns > 5}).map(function(player){return player.firstName + " " + player.lastName}));
console.log(players.filter(function(player){return player.position==="RB"}).reduce(function(sum, player){return sum += player.touchdowns},0));
