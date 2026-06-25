const rl = require('readline').createInterface({ input: process.stdin })

const iter = rl[Symbol.asyncIterator]()

const readline = async () => (await iter.next()).value.trim()

void async function() {
  const [m, n] = (await readline()).split(' ').map(Number)
  const dfs = (m, n) => {
    if (m===0) return 1
    if (n===1) return 1
    if (n>m) return dfs(m, m)
    return dfs(m, n-1) + dfs(m-n,n)
  }
  console.log(dfs(m, n))
  rl.close()

}()


