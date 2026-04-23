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
  Collection: ['Collection'], // Also known as: Map
  RegEx: ['Regex'],

  // Discord
  User: ['User'],
  Member: ['Member'],
  UserResolve: ['String', 'Member', 'User'],
  Emoji: ['Emoji'],
  Sticker: ['Sticker'],
  Embed: ['Embed'],
  //ActionRow: ['ActionRow'], // Also known as: Component type 1
  //Button: ['Button'], // Also known as: Component type 2
  Message: ['Message'],
  MessagePayload: ['Embed'],
  MessageContent: ['String', 'Number', 'Embed'],
  Webhook: ['Webhook'],
  Channel: ['Channel'],
  Role: ['Role'],
  Invite: ['Invite'],
  Server: ['Server']
};

export function T(...args) {
  return args.flat(Infinity);
}
