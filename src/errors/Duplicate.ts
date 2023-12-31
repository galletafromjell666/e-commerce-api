class Duplicate extends Error {
  resource: string;

  constructor(message: string, resource: string) {
    super(message);
    this.resource = resource;
  }
}

export default Duplicate;
