import Chatkit from '@pusher/chatkit-client';

const ConnectToChatkit=userId=>{
     userId=localStorage.getItem("userId")
    const tokenProvider = new Chatkit.TokenProvider({
        url: 'http://localhost:3001/authenticate',
    });
    const chatManager = new Chatkit.ChatManager({
        instanceLocator: 'v1:us1:366d4bfd-9da9-4a3c-8b98-fb24d065efc5',
        userId,
        tokenProvider
    })
    chatManager.connect()
    .then(currentUser => {
      console.log('Successful connection', currentUser)
    })
    .catch(err => {
      console.log('Error on connection', err)
    })
}

export default ConnectToChatkit