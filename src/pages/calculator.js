import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import dhondtElectionSystem, {final} from '../functions/function';
import Head from 'next/head';

import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '500', subsets: ['devanagari'] })
const poppins200 = Poppins({ weight: '400', subsets: ['devanagari'] })



import { useEffect, useState } from 'react';
import NavBar from '../components/Navbar';


function Calculator() {


  const [partyName, setPartyName] = useState('');
  const [partyVote, setPartyVote] = useState('');

  const [partyName2, setPartyName2] = useState('');
  const [partyVote2, setPartyVote2] = useState('');

  const [partyName3, setPartyName3] = useState('');
  const [partyVote3, setPartyVote3] = useState('');

  const [partyName4, setPartyName4] = useState('');
  const [partyVote4, setPartyVote4] = useState('');

  const [partyName5, setPartyName5] = useState('');
  const [partyVote5, setPartyVote5] = useState('');

  const [partyName6, setPartyName6] = useState('');
  const [partyVote6, setPartyVote6] = useState('');

  const [partyName7, setPartyName7] = useState('');
  const [partyVote7, setPartyVote7] = useState('');

  const [partyName8, setPartyName8] = useState('');
  const [partyVote8, setPartyVote8] = useState('');

  const [totalSeats, setTotalSeats] = useState('');

  var all_parties = [
    [partyName, partyVote],
    [partyName2, partyVote2],
    [partyName3, partyVote3],
    [partyName4, partyVote4],
    [partyName5, partyVote5],
    [partyName6, partyVote6],
    [partyName7, partyVote7],
    [partyName8, partyVote8]
  ];

  const [final_result, setFinal_result] = useState(["The results will appear here once you enter the data"]);

  const join_results = final_result.join(' ').split(",").join("");  

  const results = final_result.map((final_result) => <div key={final_result}><li className='font-link text-md' key={final_result}>{final_result}</li></div>);  

  return (
    <div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
  <NavBar />
</div>

    <Head>
        <link rel='icon' href='https://dcnaber.github.io/dhondt-calculator-next/favicon.ico' />
        <title>D'hondt Calculator</title>
    </Head>

<div className={poppins200.className}>
<div className='flex justify-center items-center'>



<div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
{<div className="bg-white p-6 rounded-lg shadow">
    <h1 className="text-lg font-medium mb-4 font-link">Results:</h1>
    <div>{results}</div>
  </div>}
  <div className="bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-medium mb-4 font-link">Enter party details</h2>
    
    <div className="space-y-5">
      <div>
        <TextField id="outlined-basic" onChange={(e) => {setPartyName(e.target.value + " ")}} label="Party Name" variant="outlined"/>
        <TextField id="outlined-basic" onChange={(e) => {setPartyVote(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div>
      

      <div>
        <TextField id="outlined-basic" onChange={(e) => {setPartyName2(e.target.value + " ")}} label="Party Name" variant="outlined" />
        <TextField id="outlined-basic" onChange={(e) => {setPartyVote2(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div>

      <div>
        <TextField id="outlined-basic" onChange={(e) => {setPartyName3(e.target.value + " ")}} label="Party Name" variant="outlined" />
        <TextField id="outlined-basic" onChange={(e) => {setPartyVote3(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div>

      <div>
        <TextField id="outlined-basic" onChange={(e) => {setPartyName4(e.target.value + " ")}} label="Party Name" variant="outlined" />
        <TextField id="outlined-basic" onChange={(e) => {setPartyVote4(e.target.value)}} label="Number of Votes" variant="outlined" />
      </div> 
      
      <div>
        <TextField id="outlined-basic" onChange={(e) => {setTotalSeats(e.target.value)}} label="Number of Seats" variant="outlined" />
        <div className="my-2"><Button onClick={() => {setFinal_result(dhondtElectionSystem(totalSeats, all_parties))}} variant="outlined">Calculate</Button></div>
      </div>
    </div>
    
  </div>
  

</div>
</div>
    </div>
    </div>
  );
}

export default Calculator;
