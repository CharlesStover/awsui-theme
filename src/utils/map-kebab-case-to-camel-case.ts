const reduceWordsToCamelCase = (camelCase: string, word: string): string => {
  if (camelCase === '') {
    return word;
  }
  return camelCase + word.charAt(0).toUpperCase() + word.slice(1);
};

export default function mapKebabCaseToCamelCase(kebab: string): string {
  const words: string[] = kebab.split('-');
  return words.reduce(reduceWordsToCamelCase, '');
}
