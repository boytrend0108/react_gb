const INITIAL_CHATS = [
  {
    chatId: 1,
    messages: [
      { id: 1, author: "me", text: "First message here" },
      { id: 2, author: "robot", text: "Second message here" },
    ]
  }, 

  {
    chatId: 2,
    messages: [
      { id: 1, author: "robot", text: "1  message here" },
      { id: 2, author: "robot", text: "2 message here" },
      { id: 3, author: "me", text: "3 message here" },
    ]
  },

  {
    chatId: 3,
    messages: [
      { id: 1, author: "me", text: "1  message here" },
    ]
  },
];

export default INITIAL_CHATS;
