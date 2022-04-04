class Heap {
    heap: Array<number>
    constructor(arr: Array<number>) {
        this.heap = this.buildHeap(arr)
    }

    private swap(arr: Array<number>, i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    private buildHeap(arr: Array<number>) {
        // builds a heap from an array of elements
        for(let i = Math.floor((arr.length-1)/2); i >= 0; i--) {
            this.heapify(arr, i)
        }
        return arr
    }

    insert(element: number) {
        // insert an element into the heap
        this.heap.push(element)
        this.heap = this.buildHeap(this.heap)
    }

    delete(index: number) {
        // delete an element from the heap
        this.heap.splice(index, 1)
        this.heap = this.buildHeap(this.heap)
    }

    private heapify(arr: Array<number>, index: number) {
        // used when an inserted element unbalances the heap and it loses the heap properties
        // bottom-up approach
        let largest = index
        let left = this.getLeft(index)
        let right = this.getRight(index)
        if ((left <= arr.length) && (arr[left] > arr[index])){
            largest = left
        }
        if ((right <= arr.length) && (arr[right] > arr[largest])){
            largest = right
        } 
        if (largest != index){
            this.swap(arr, index, largest)
            this.heapify(arr, largest)
        }
    }

    getMax() {
        // returns the max element in the heap
        return this.heap[0]
    }

    pop() {
        // returns the max element in the heap and deletes it from the heap
        let max = this.heap[0]
        this.delete(0)
        this.heap = this.buildHeap(this.heap)
        return max
    }

    private getRight(index: number) {
        return 2 * index + 2
    }
    private getLeft(index: number) {
        return 2 * index + 1
    }

    // HEAP SORT
    heapSort() {
        // sorts the heap in ascending order
        let tmp = [...this.heap]
        let sorted = []
        while(this.heap.length > 0) {
            sorted.push(this.pop())
        }
        this.heap = tmp
        return sorted.reverse()
    }
}
