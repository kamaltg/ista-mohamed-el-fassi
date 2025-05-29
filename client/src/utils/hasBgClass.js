function hasBgClass(classes) {
  return /\b!?bg-[^\s]+/.test(classes); // checks for bg-* or !bg-*
}

export default hasBgClass;
