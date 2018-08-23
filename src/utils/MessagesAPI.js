import store from "./Store";

const messageDB = [
  {id: 1, to: "Joel", from: "Joel", subject: "Message", unread: true, archived: false, content: ""},
  {id: 2, to: "Joel", from: "John", subject: "Other Message", unread: true, archived: false, content: ""},
  {id: 3, to: "Joel", from: "Michael", subject: "Yay", unread: true, archived: false, content: ""}
];

const getMessages = () => {
  const messages = [];
  messageDB.map(msg => {
    return messages.push(msg);
  });
  store.updateGlobalState({messages});
};

const getMessage = (id) => {
  const message = messageDB.find((msg) => msg.id.toString() === id.toString());
  store.updateGlobalState({message});
};

const updateMessage = (id, data) => {
  let messages = messageDB.map(msg => {
    if (msg.id.toString() === id.toString()) {
      for (let key in data) {
        msg[key] = data[key];
      }
    }
    return msg;
  });
  store.updateGlobalState({messages});
};

export {
  getMessages,
  getMessage,
  updateMessage
}