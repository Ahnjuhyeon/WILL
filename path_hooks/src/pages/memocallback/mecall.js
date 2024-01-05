/*
목표: 나는 리랜더링 시 불필요한 연산을 다시 하지 않고 재사용할 수 있는가
      또, 재연산을 하지 않는 것은 반드시 옳은 결과인가?


목표: 나는 리랜더링 시 불필요한 함수를 재선언하지 않고 사용할 수 있는가
      또, 그 재선언하지 않아야하는 순간은 언제일까?


수업 시간에 잠깐 살펴봤던 아래의 예제를 통해 각각 어느 순간에 사용한 사레인지 생각해보자


1-1)
const Text = useCallback(()=> <div>{state}<div>, [state])

1-2)
const text = useMemo(()=>{
	if(state === 'error'){
		return {
			color: "red",
			text: "에러가 발생했습니다"
		}
	}
	//... 수십가지의 경우의 수
},[state])

1-3)
const loopfunction = useCallback(()=>{
	for(let i=0; i<arr.length, i++){
		for (let el of arr[i]){
			// 많은 변수
			// 많은 함수
      // 비동기 ...
			setTiemOut(()=>{
				console.log(el)
			},1000)
		}
	}
},[])



++ 생각해보기

만약 1-2)의 수십가지 경우의 수가 아닌 크기가 작은 경우라면 useMemo를 꼭 사용해야할까?
사용하지 않는다면 어떻게 해볼 수 있을까?

*/
