function debounce(callback, delay) {
  let timerId;

  return function (value) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(value);
    }, delay);
  };
}

function search(value) {
  console.log(value);
  //this should point debouceSearch scope
}

const debounceSearch = debounce(search, 1000);

debounceSearch("A");
debounceSearch("AB");
debounceSearch("ABC");
debounceSearch("ABCD"); //1sec
