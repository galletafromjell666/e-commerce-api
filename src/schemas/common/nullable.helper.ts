export default function nullable<T>(inp: T): T & { nullable: true } {
  return inp as T & { nullable: true };
}
