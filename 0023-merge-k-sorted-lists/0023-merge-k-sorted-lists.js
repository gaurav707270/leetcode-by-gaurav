
var mergeKLists = function(lists) {
    let arr = [];

    // Convert linked lists into an array
    for (let i = 0; i < lists.length; i++) {
        let current = lists[i];

        while (current !== null) {
            arr.push(current.val);
            current = current.next;
        }
    }

    // Sort all values
    arr.sort((a, b) => a - b);

    // Create the merged linked list
    let dummy = new ListNode(0);
    let current = dummy;

    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return dummy.next;
};
