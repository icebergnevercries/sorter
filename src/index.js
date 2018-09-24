class Sorter {
  constructor() {
    this.mass=[];
    this.CompareFun = function(left, right){
      return left-right;
    };/*default CompareFun*/
  }

  add(element) {
    this.mass.push(element);
  }

  at(index) {
    return this.mass[index];/*return an array element by index*/
  }

  get length() {
    return this.mass.length;/*return the length of the array*/
  }

  toArray() {
    return this.mass;/*return an array*/
  }

  sort(indices) {
    var massforsort = [];
    for(var i = 0; i < indices.length; i++)
    {
      massforsort.push(this.mass[indices[i]]);/*array of elements for sorting*/
    }
    massforsort.sort(this.CompareFun);/*sorting elements in an array*/
    indices.sort();/*sorting index*/    
    for(var i = 0; i < indices.length; i++)
    {
      this.mass[indices[i]] = massforsort[i];/*re-write the elements for sorting in sorted form*/
    }    
    return this.mass;
  }

  setComparator(compareFunction) {
    this.CompareFun = compareFunction;/*the change function CompareFun*/
  }
}

module.exports = Sorter;