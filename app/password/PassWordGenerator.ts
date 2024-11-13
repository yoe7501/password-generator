
  export function PassWordGenerator(checked: number[], value: number) {
    const UppercaseCharacters: number[] = highToLow(65, 90);
    const LowercaseCharacters: number[] = highToLow(97, 122);
    const NumberCharacters: number[] = highToLow(48, 57);
    const SymbolCharacter: number[] = highToLow(33, 46);
    const full: number[][] = [
      UppercaseCharacters,
      LowercaseCharacters,
      NumberCharacters,
      SymbolCharacter,
    ];
    let fullRange: number[] = [];
    for (let i = 0; i < 4; i++) {
      if (checked[i] == 1) {
        fullRange = fullRange.concat(full[i]);
      }
    }

    let password = '';
    for (let i = 0; i < value; i++) {
      const randomCharCode = fullRange[Math.floor(Math.random() * fullRange.length)];
      password += String.fromCharCode(randomCharCode);
    }
    return password;
  };

  const highToLow = (min: number, max: number) => {
    const number: number[] = [];
    for (let i = min; i <= max; i++) {
      number.push(i);
    }
    return number;
  };
