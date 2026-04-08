import { registerRestrictions } from '../restrictions';
export function parentize(parents, name, msg) {
  registerRestrictions(name, [
    {
      type: 'hasparent',
      message: '$' + msg,
      types: parents
    }
  ]);
}
export function filled(inputs, name, msg) {
  registerRestrictions(name, [
    {
      type: 'notempty',
      message: '$' + msg,
      types: inputs
    }
  ]);
}
