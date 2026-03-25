const apiKey = 'f0c266fa-4ffb-4605-8707-e3551fa339d8';
//
// for security reasons: always call this from your server-side - never from client code
//
fetch('https://api.us.embeddable.com/api/v1/security-token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}` // Keep your API key secure
  },
  body: JSON.stringify({
    embeddableId: '90c56d19-a74b-4783-a07b-0d7cdefa0b61', // the id of the dashboard you want to load
    savedVersion: 'production', // or 'development' or 'staging', etc.
    expiryInSeconds: 60 * 60 * 24 * 7, // token expiry (e.g. 1 week)
    securityContext: { // any context (key-value pairs) you want to provide to the SQL data models
      userId: '9sZSJ9LHsiYXR0cmlidXRlIjoiZ2VvaXBf',
      regions: ['us-east', 'eu-west']
    },
    user: 'morongwa.wimmy@gmail.com', // unique key (e.g. email or user_id) representing current user
    //
    // for more fields, see "Comprehensive example" below
    //
  })
})
.then((resp) => resp.json())
.then(({ token }) => {
  // 'token' is the security token your `<em-beddable token={token}.../>` web component needs
  console.log(token);
});