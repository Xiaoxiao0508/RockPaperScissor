export interface roundresult {
    playerchoice:string;
    syschoice:string;
    resultofround:string;
}
export interface gameresult{
    result:string;
    allresult:roundresult[];
}


export interface playerroundrequest{
    Name:string;
   numberofrounds:number; 
    choices:string[];
}
export interface leaderboardline {
    name:string;
    winratio:number;
    gamesplayed:number;
    lastfive:string;
}
export interface leaderboard{
  leaderboardlist:leaderboardline[];
  
}
