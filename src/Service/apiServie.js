import configure from "../configure";


export const  postMethodToken = (url,methodName,token) => {
 return fetch(configure.backendUrl + url, {
  method: methodName, // Use the GET method to retrieve profile information
  headers: {
    'Authorization': 'JWT ' + token, // Include any authorization token if required
    'Content-Type': 'application/json' // Set the content type to JSON if needed
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // Parse the response body as JSON
})
}


export const postMethodData = (url,methodName,values) => {
  console.log(configure.backendUrl)

   return fetch(configure.backendUrl + url, {
        method: methodName, // Specify the HTTP method as POST
      headers: {
    'Content-Type': 'application/json', // Specify the content type as JSON
},
      body: JSON.stringify(values), // Convert the form values to a JSON string
    }).then(
        response => {
            if (!response.ok) {
              alert('User not found')
                throw new Error('User not found');
              }
              return response.json();
        }
        ).catch(error => {
          console.log(error);
            console.error('Error in postMethodData:', error);
            throw error; // Rethrow the error to be caught by the caller
          });
}