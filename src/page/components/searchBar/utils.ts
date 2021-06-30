export const debounce =  function (execute: Function, delay: number) {
  let timer: any;
  return function (this: any,...args: any) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      execute.apply(this, args)
    }, delay)
  }
};