// creates array of unordered data
const data = [ 12, 45, 196, 18, 500, 11, 122, 20, 30, 100];
// create a selection sorting algo using arrow function
const selectionSort = (data) =>{
    const length=data.length;
    //swap function
    const swap = (data, minIndex,index) =>{
        ([data[minIndex],data[index]]=[data[index],data[minIndex]]);
    }
    // loop select element to be compared
    for (let index = 0; index < length; index++) {
        // var that holds the initial index and changes after iteration
        let minIndex=index;
        // loop for each candidate min element to be compared with
        for(let cIndex=index+1; cIndex<length;cIndex++){
            if(data[cIndex]<data[minIndex]){
                minIndex=cIndex;
            }
        }
        if(minIndex!==index){
            // const temp = data[minIndex];
            // data[minIndex]=data[index];
            // data[index]=temp;
            swap(data,minIndex,index);
        }
    }
    return data;
}
console.log(selectionSort(data))