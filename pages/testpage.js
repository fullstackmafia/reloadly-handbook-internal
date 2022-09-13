// import React, { useState, useEffect } from 'react';
// import { Octokit, App } from "octokit";

// export function GetGitHubDetails() {
//   const [data, setData] = useState(null)
//   const [isLoading, setLoading] = useState(false)
//   const octokit = new Octokit({
//     auth: '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'
//   })
  
//   await octokit.request('GET /users/{username}', {
//     username: 'fullstackmafia'
//   })

//   const username = "fullstakmafia"

//   useEffect(() => {
//     setLoading(true)
//     fetch(`https://api.github.com/users/${username}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       setData(data)
//       setLoading(false)
//     })
//   }, [])

//   if (isLoading) return <p>Loading...</p>
//   if (!data) return <p>No profile data</p>

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.bio}</p>
//     </div>
//   )
// }

import React, { useEffect } from "react";
import { Octokit } from "octokit";

export function App() {
  const octokit = new Octokit({
    auth: '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'
  });

  useEffect(() => {
    getGithubUsers();
  }), [];

  async function getGithubUsers() {
    const result = await octokit.request('GET /users/{username}', {
      username: 'fullstackmafia'
    });
    console.log(result.data);
  }

  return <></>;
}
