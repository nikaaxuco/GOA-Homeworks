class Specimen {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  getLabel() {
    return `Specimen ${this.id} - Type: ${this.type}`;
  }
}

class MutantSpecimen extends Specimen {
  constructor(id, type, mutationLevel) {
    super(id, type);
    this.mutationLevel = mutationLevel;
  }

  getLabel() {
    return `Specimen ${this.id} - Type: ${this.type} - Mutation Level: ${this.mutationLevel}`;
  }

  static mostMutated(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (
        arr[i] &&
        typeof arr[i].mutationLevel === 'number' &&
        typeof max.mutationLevel === 'number' &&
        arr[i].mutationLevel > max.mutationLevel
      ) {
        max = arr[i];
      }
    }
    return max;
  }
}