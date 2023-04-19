export default function dhondtElectionSystem(seats, votes_array) {

    const votes = {}
  
    votes_array.forEach(function(party) {
      votes[party[0]] = party[1];
    });

    const parties = Object.keys(votes);
    const seatDistribution = {};
  
    for (let i = 0; i < seats; i++) {
      let maxParty = null;
      let maxVotes = -1;
  
      for (let j = 0; j < parties.length; j++) {
        const party = parties[j];
        const votesPerSeat = Math.floor(votes[party] / (seatDistribution[party] || 1));
  
  
        if (votesPerSeat > maxVotes) {
          maxParty = party;
          maxVotes = votesPerSeat;
  
        }
      }
  
      if (!seatDistribution[maxParty]) {
        seatDistribution[maxParty] = 0;
      }
  
      seatDistribution[maxParty]++;
    }
    
    console.log(Object.entries(seatDistribution));
    return(Object.entries(seatDistribution));
    
    
  }
  
  
