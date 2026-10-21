var reverseKGroup = function(head, k) {
    let count = 0;
    let current = head;

    // Check whether k nodes are available
    while (current !== null && count < k) {
        current = current.next;
        count++;
    }

    // Reverse only if k nodes are available
    if (count === k) {
        current = reverseKGroup(current, k);

        // Reverse the current group
        while (count > 0) {
            let temp = head.next;
            head.next = current;
            current = head;
            head = temp;
            count--;
        }

        head = current;
    }

    return head;
};