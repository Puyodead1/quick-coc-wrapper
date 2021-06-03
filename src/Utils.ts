function isoShortToFull(timestamp: string) {
  const regex = new RegExp(
    /^([0-9]{4,4})([0-9]{2,2})([0-9]{2,2})T([0-9]{2,2})([0-9]{2,2})([0-9]{2,2}).([0-9]{1,3})Z$/
  );
  const matches = timestamp.match(regex);
  if (!matches) return null;
  const year = matches[1];
  const month = matches[2];
  const day = matches[3];
  const hour = matches[4];
  const minutes = matches[5];
  const seconds = matches[6];
  const ms = matches[7];
  return `${year}-${month}-${day}T${hour}:${minutes}:${seconds}.${ms}Z`;
}
