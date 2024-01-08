function simulateAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("비동기 작업 완료!");
    }, 2000);
  });
}

// async
async function main() {
  console.log("시작");

  try {
    // 비동기 작업을 기다리고 결과를 받아옴
    const result = await simulateAsyncOperation();

    // 비동기 작업 완료 후 실행되는 부분
    console.log(result);
  } catch (error) {
    // 비동기 작업 중 에러가 발생한 경우 실행되는 부분
    console.error("에러 발생:", error);
  }

  console.log("끝");
}

// main 함수 호출
main();
