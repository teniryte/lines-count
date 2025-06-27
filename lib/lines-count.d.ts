declare module 'lines-count' {
  /**
   * Подсчитывает общее количество строк во всех файлах в указанных директориях
   * @param dirs Массив путей к директориям для подсчета строк
   * @returns Общее количество строк во всех файлах
   */
  function linesCount(dirs?: string[]): number;

  export = linesCount;
}
