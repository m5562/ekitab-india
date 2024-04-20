import { compare, hash } from "bcrypt";

const compareHash = (password, hashedPassword) =>
  compare(password, hashedPassword);

const createHash = async (password) => await hash(password, 10);

export { compareHash, createHash };
