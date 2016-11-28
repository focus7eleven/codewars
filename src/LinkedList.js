function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  let len = 0;
  while(head){
    len = len++;
    head=head.next;
  }
  return len;
}

function count(head, data) {
  // Your code goes here.
  let cnt = 0;
  while(head){
    if(head.data === data){
      cnt++;
    }
    head=head.next;
  }
  return cnt;
}
