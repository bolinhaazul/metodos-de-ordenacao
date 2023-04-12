function bubbleSort<T>(vetor: T[]) {
  let aux: any;
  let movimentos = 0;
  const inicio = new Date().getTime();
  console.log(inicio);
  for (let i = 0; i < vetor.length; i++) {
    for (let j = 0; j < vetor.length; j++) {
      if (vetor[i] < vetor[j]) {
        aux = vetor[i];
        vetor[i] = vetor[j];
        vetor[j] = aux;
        movimentos++;
      }
    }

    console.log(vetor);
  }
  let tempoExecucao = new Date().getTime() - inicio;
  return `foram feitos ${movimentos} movimentos, em ${
    tempoExecucao / 1000
  } segundos`;
}

function insertionSort<T>(vetor: T[]) {
  const inicio = new Date().getTime();
  let count = 0;
  SetAux: for (let i = 1; i < vetor.length; i++) {
    const aux = vetor[i];

    for (let j = i - 1; j >= 0; j--) {
      if (aux >= vetor[j]) {
        vetor[j + 1] = aux;
        count++;
        continue SetAux;
      } else {
        vetor[j + 1] = vetor[j];
        vetor[j] = aux;
        count++;
        continue;
      }
    }
    console.log(vetor);
  }
  let tempoExecucao = new Date().getTime() - inicio;
  return `foram feitos ${count} movimentos, em ${
    tempoExecucao / 1000
  } segundos`;
}

function selectionSort<T>(vetor: T[]) {
  const inicio = new Date().getTime();
  let count = 0;
  for (let i = 0; i < vetor.length; i++) {
    let min = i;
    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[min]) {
        min = j;
      }
    }
    const aux = vetor[min];
    vetor[min] = vetor[i];
    vetor[i] = aux;
    count++;
    console.log(vetor);
  }
  let tempoExecucao = new Date().getTime() - inicio;
  return `foram feitos ${count} movimentos, em ${
    tempoExecucao / 1000
  } segundos e o vetor resultado e ${vetor}`;
}

export function shellSort<T>(vetor: T[]) {
  const inicio = new Date().getTime();
  let count = 0;
  let h = 0;
  while (h < Math.floor(vetor.length / 3)) {
    h = h * 3 + 1;
  }
  while (h > 0) {
    for (let i = h; i < vetor.length; i++) {
      const aux = vetor[i];
      let j = i;
      while (j >= h && vetor[j - h] > aux) {
        vetor[j] = vetor[j - h];
        j -= h;
      }
      vetor[j] = aux;
      count++;
      console.log(vetor);
    }
    h = Math.floor((h - 1) / 3);
  }
  let tempoExecucao = new Date().getTime() - inicio;
  return `foram feitos ${count} movimentos, em ${
    tempoExecucao / 1000
  } segundos e o vetor resultado e ${vetor}`;
}

function QuickSort<T>(
  vetor: T[],
  comeco: number = 0,
  final: number = vetor.length
) {
  const inicio = new Date().getTime();
  let count = 0;
  let i = comeco;
  let j = final;
  let pivot = vetor[Math.floor((comeco + final) / 2)];
  while (i <= j) {
    while (vetor[i] < pivot) i++;
    while (vetor[j] > pivot) j--;
    if (i <= j) {
      const aux = vetor[i];
      vetor[i] = vetor[j];
      vetor[j] = aux;
      i++;
      j--;
      count++;
      console.log(vetor);
    }
  }
  if (comeco < j) {
    QuickSort(vetor, comeco, j);
  }
  if (i < final) {
    QuickSort(vetor, i, final);
  }
  const tempoExecucao = new Date().getTime() - inicio;
  return `Foram feitos ${count} movimentos em ${
    tempoExecucao / 1000
  } segundos e o vetor resultado e:  ${vetor}`;
}

function MergeSort(items: number[]): number[] {
  return divide(items);
}

function divide(items: number[]): number[] {
  var halfLength = Math.ceil(items.length / 2);
  var low = items.slice(0, halfLength);
  var high = items.slice(halfLength);
  if (halfLength > 1) {
    low = divide(low);
    high = divide(high);
  }
  return combine(low, high);
}

function combine(low: number[], high: number[]): number[] {
  var indexLow = 0;
  var indexHigh = 0;
  var lengthLow = low.length;
  var lengthHigh = high.length;
  var combined = [];
  while (indexLow < lengthLow || indexHigh < lengthHigh) {
    var lowItem = low[indexLow];
    var highItem = high[indexHigh];
    if (lowItem !== undefined) {
      if (highItem === undefined) {
        combined.push(lowItem);
        indexLow++;
      } else {
        if (lowItem <= highItem) {
          combined.push(lowItem);
          indexLow++;
        } else {
          combined.push(highItem);
          indexHigh++;
        }
      }
    } else {
      if (highItem !== undefined) {
        combined.push(highItem);
        indexHigh++;
      }
    }
  }
  return combined;
}
