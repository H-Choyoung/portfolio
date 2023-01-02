const Randoms =(arr:string[])=> {
  let randoms = Math.floor(Math.random() * arr.length);
  return randoms;
}
export default Randoms;