// 定义延迟函数
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runFiveTimes() {
  for (let i = 0; i < 5; i++) {
    console.log(`🚀 开始第 ${i + 1} 次请求`);

    try {
      const response = await fetch(
        "https://jwxt.hubu.edu.cn/jsxsd/xsxkkc/ggxxkxkOper?kcid=17E13265E90C4F0BA97E03A421582075&cfbs=null&jx0404id=202520262004096&xkzy=&trjf=",
        {
          headers: {
            accept: "*/*",
            cookie: "JSESSIONID=14DD2AA706055E2545F4A09E621C71DC;SERVERID=80",
            Referer: "https://jwxt.hubu.edu.cn/jsxsd/xsxkkc/comeInGgxxkxk",
          },
          method: "GET",
        }
      );

      const data = await response.json();
      console.log(`✅ 第 ${i + 1} 次结果:`, data);
    } catch (error) {
      console.error(`❌ 第 ${i + 1} 次请求出错:`, error.message);
    }

    // 前 4 次请求后等待 2 秒，第 5 次结束后不再等待
    if (i < 4) {
      console.log(`⏳ 等待 2 秒...`);
      await sleep(2000);
    }
  }

  console.log('🎉 所有请求执行完毕');
}

// 执行函数
runFiveTimes();