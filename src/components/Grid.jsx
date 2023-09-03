

const Grid = () => {

  const NumsArr = [] 
  const primeNum = []

  for(let i = 0; i<=31; i++){
    NumsArr.push(i)
  }

  for (let i = 2; i <= 31; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeNum.push(i);
    }
}

console.log(primeNum);
  return (
    <div className="container w-auto text-white">
      <div className="grid grid-cols-8 h-auto text-3xl font-medium">
      {NumsArr.map(num => (

        primeNum.includes(num)
        ? <div className="p-12 border border-slate-300 hover:border-slate-950 hover:scale-[1.03] transition bg-red-500" key={num}>{num}</div>
        : num % 2 == 0
        ? <div className="p-12 border border-slate-300 hover:border-slate-950 hover:scale-[1.03] transition bg-green-600" key={num}>{num}</div>
        : <div className="p-12 border border-slate-300 hover:border-slate-950 hover:scale-[1.03] transition bg-yellow-400" key={num}>{num}</div>
        )
       )
      }
      </div>
    </div>
  )
}

export default Grid