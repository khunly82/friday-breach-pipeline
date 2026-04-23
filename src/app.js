export function additionner(a, b) {

  return a - b;

}

export function direBonjour(nom) {

  if (!nom) throw new Error("Un nom est requis !");

  return `Bonjour, ${nom} !`;

}
