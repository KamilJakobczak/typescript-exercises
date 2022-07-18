class SingleNode {
  next: SingleNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList {
  head: SingleNode | null = null;

  add(data: number): void {
    const newNode = new SingleNode(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
  }
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
}
