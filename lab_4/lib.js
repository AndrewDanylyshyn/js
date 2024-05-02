let Sorting = {};

Sorting.bubbleSort = function(arr, order = "asc") {
		let comparisons = 0;
		let exchanges = 0;

		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			for (let j = 0; j < n - i - 1; j++) {
				comparisons++;
				if (order === 'asc' ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1]) {
		        	[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
		        	exchanges++;
		        }
			}
		}

		console.log(`Number of comparisons: ${comparisons}`);
		console.log(`Number of exchanges: ${exchanges}`);

		return arr;
}

Sorting.minSort = function(arr, order = "asc") {
		let comparisons = 0;
		let exchanges = 0;

		const n = arr.length;
		for (let i = 0; i < n - 1; i++) {
			let minIndex = i;
			for (let j = i + 1; j < n; j++) {
				comparisons++;
				if (order === 'asc' ? arr[j] < arr[minIndex] : arr[j] > arr[minIndex]) {
            		minIndex = j;
        		}

			}
			if (minIndex !== i) {
				[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
				exchanges++;
			}
		}

		console.log(`Number of comparisons: ${comparisons}`);
		console.log(`Number of exchanges: ${exchanges}`);

		return arr;
}

Sorting.insetrionSort = function(arr, order = "asc") {
		let comparisons = 0;
		let exchanges = 0;	

		const n = arr.length;
		for (let i = 1; i < n; i++) {
			let current = arr[i];
			let j = i - 1;
			while (j >= 0 && (order === 'asc' ? arr[j] > current : arr[j] < current)) {
				comparisons++;
        		arr[j + 1] = arr[j];
        		j--;
			}
			arr[j + 1] = current;
    		exchanges++;
		}

		console.log(`Number of comparisons: ${comparisons}`);
		console.log(`Number of exchanges: ${exchanges}`);

		return arr;
}

Sorting.shellSort = function(arr, order = "asc"){
		let comparisons = 0;
		let exchanges = 0;	

		const n = arr.length;
		let gap = Math.floor(n / 2);
		while (gap > 0) {
			for (let i = gap; i < n; i++) {
				let temp = arr[i];
        		let j = i;
        		while (j >= gap && (order === 'asc' ? arr[j - gap] > temp : arr[j - gap] < temp)) {
        			comparisons++;
        			arr[j] = arr[j - gap];
        			j -= gap;
        		}
        		arr[j] = temp;
        		exchanges++;
			}
			gap = Math.floor(gap / 2);
		}

		console.log(`Number of comparisons: ${comparisons}`);
		console.log(`Number of exchanges: ${exchanges}`);

		return arr;
}

Sorting.quickSort = function(arr, order = "asc"){
	    let comparisons = 0;
	    let exchanges = 0;

	    function partition(arr, low, high) {
	      const pivot = arr[Math.floor((low + high) / 2)];
	      let i = low;
	      let j = high;
	      while (i <= j) {
	        if (order === 'asc') {
	          while (arr[i] < pivot) {
	            i++;
	            comparisons++;
	          }
	          while (arr[j] > pivot) {
	            j--;
	            comparisons++;
	          }
	        } else {
	          while (arr[i] > pivot) {
	            i++;
	            comparisons++;
	          }
	          while (arr[j] < pivot) {
	            j--;
	            comparisons++;
	          }
	        }
	        if (i <= j) {
	          [arr[i], arr[j]] = [arr[j], arr[i]];
	          i++;
	          j--;
	          exchanges++;
	        }
	      }
	      return i;
	    }

	    function quickSortHelper(arr, low, high) {
	      if (arr.length > 1) {
	        const index = partition(arr, low, high);
	        if (low < index - 1) {
	          quickSortHelper(arr, low, index - 1);
	        }
	        if (index < high) {
	          quickSortHelper(arr, index, high);
	        }
	      }
	    }

	    const n = arr.length;
	    quickSortHelper(arr, 0, n - 1);

	    console.log(`Number of comparisons: ${comparisons}`);
	    console.log(`Number of exchanges: ${exchanges}`);
	    
	    return arr;
}
