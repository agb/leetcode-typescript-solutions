class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
      this.val = val !== undefined && typeof val === 'number' ? val : 0;
      this.next = next !== undefined && typeof ListNode ? next : null;
  }
}
