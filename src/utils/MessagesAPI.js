import store from "./Store";

// const messageDB = [
//   {
//     "id": 1,
//     "to": "Joel",
//     "from": "John",
//     "subject": "Message",
//     "unread": true,
//     "archived": false,
//     "content": ""
//   },
//   {
//     "id": 2,
//     "to": "Joel",
//     "from": "John",
//     "subject": "Other Message",
//     "unread": true,
//     "archived": false,
//     "content": ""
//   },
//   {
//     "id": 3,
//     "to": "Joel",
//     "from": "Michael",
//     "subject": "Yay",
//     "unread": true,
//     "archived": false,
//     "content": ""
//   }
// ];

const API_URL = "https://wt-13aebf4eeaa9913542725d4a90e4d49e-0.sandbox.auth0-extend.com/react-workshop";

const getMessages = () => {
  // const messages = [];
  // messageDB.map(msg => {
  //   return messages.push(msg);
  // });
  // store.updateGlobalState({messages});
  let tokens = store.getTokens();
  fetch(`${API_URL}/`, {
    headers: {"Authorization": `Bearer ${tokens.accessToken}`}
  }).then(resp => resp.json()).then(data => {
    store.updateGlobalState({messages: data});
  });
};

const getMessage = (id) => {
  // const message = messageDB.find((msg) => msg.id.toString() === id.toString());
  // store.updateGlobalState({message});
  let tokens = store.getTokens();
  fetch(`${API_URL}/${id}`, {
    headers: {"Authorization": `Bearer ${tokens.accessToken}`}
  }).then(resp => resp.json()).then(data => {
    store.updateGlobalState({message: data});
  });
};

const updateMessage = (id, data) => {
  // let messages = messageDB.map(msg => {
  //   if (msg.id.toString() === id.toString()) {
  //     for (let key in data) {
  //       msg[key] = data[key];
  //     }
  //   }
  //   return msg;
  // });
  // store.updateGlobalState({messages});
  let tokens = store.getTokens();
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${tokens.accessToken}`
    },
    body: JSON.stringify(data)
  }).then(resp => resp.json()).then(data => {
    store.updateGlobalState({messages: data});
  });
};

export {
  getMessages,
  getMessage,
  updateMessage
}