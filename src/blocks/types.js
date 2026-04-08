export const Types = {
  // Base
  Any: null,
  String: ['String'],
  Number: ['Number'],
  Boolean: ['Boolean'],
  Array: ['Array'],

  // Extended
  Date: ['Date'],
  Color: ['Colour'],
  Object: ['Object'],
  Collection: ['Collection'], // Also known as Map
  RegEx: ['Regex'],

  // Discord
  User: ['User'],
  Member: ['Member'],
  UserResolve: ['String', 'Member', 'User'],
  Emoji: ['Emoji'],
  Sticker: ['Sticker'],
  Embed: ['Embed'],
  Message: ['Message'],
  MessageContent: ['String', 'Number', 'Embed'],
  Channel: ['Channel'],
  Role: ['Role'],
  Server: ['Server']
};

export function T(...args) {
  return args.flat(Infinity);
}
